"""Report training progress to the Go data server so the app can show it.

Use either the plain `post_progress` function or, with HuggingFace `Trainer` /
TRL `SFTTrainer`, drop in `ProgressCallback` to stream live status to the app's
"Training Jobs" panel:

    from report import ProgressCallback
    trainer = SFTTrainer(..., callbacks=[ProgressCallback(job_id="qlora-1")])
"""

from __future__ import annotations

import os

import requests

DATA_SERVER = os.getenv("DATA_SERVER", "http://localhost:7843")


def post_progress(job_id: str, *, status: str, step: int = 0, total: int = 0,
                  loss: float = 0.0, message: str = "") -> None:
    """Best-effort POST of one progress update; never raises (training wins)."""
    try:
        requests.post(
            f"{DATA_SERVER}/jobs",
            json={"id": job_id, "status": status, "step": step,
                  "total": total, "loss": loss, "message": message},
            timeout=3,
        )
    except Exception:
        pass


try:
    from transformers import TrainerCallback

    class ProgressCallback(TrainerCallback):
        """Streams Trainer step/loss to the data server's /jobs endpoint."""

        def __init__(self, job_id: str):
            self.job_id = job_id

        def on_train_begin(self, args, state, control, **kw):
            post_progress(self.job_id, status="running", total=int(state.max_steps),
                          message="starting")

        def on_log(self, args, state, control, logs=None, **kw):
            logs = logs or {}
            post_progress(
                self.job_id, status="running", step=int(state.global_step),
                total=int(state.max_steps), loss=float(logs.get("loss", 0.0)),
                message=f"epoch {state.epoch:.2f}" if state.epoch else "",
            )

        def on_train_end(self, args, state, control, **kw):
            post_progress(self.job_id, status="done", step=int(state.global_step),
                          total=int(state.max_steps), message="finished")

except ImportError:  # transformers not installed yet (few-shot-only setup)
    ProgressCallback = None  # type: ignore

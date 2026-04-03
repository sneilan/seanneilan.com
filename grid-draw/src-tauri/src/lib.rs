use tauri::{AppHandle, Emitter};

#[tauri::command]
fn set_fullscreen(window: tauri::Window, enabled: bool) -> Result<(), String> {
    window.set_fullscreen(enabled).map_err(|e| e.to_string())
}

/// Starts a tiny HTTP server on port 7842 for receiving tensor data from Python.
///
/// Python usage:
///   import requests
///   requests.post("http://localhost:7842/tensor", json=my_tensor.tolist())
///
/// When a POST arrives the body is emitted as a "tensor-from-python" event to
/// all Tauri windows, where the frontend catches it and calls importTensor().
fn start_tensor_server(app_handle: AppHandle) {
    std::thread::spawn(move || {
        let server = match tiny_http::Server::http("127.0.0.1:7842") {
            Ok(s) => s,
            Err(e) => {
                eprintln!("Failed to start tensor server: {e}");
                return;
            }
        };

        for mut request in server.incoming_requests() {
            let mut body = String::new();
            if request.as_reader().read_to_string(&mut body).is_ok() && !body.is_empty() {
                app_handle.emit("tensor-from-python", body).ok();
            }
            request
                .respond(tiny_http::Response::empty(tiny_http::StatusCode(200)))
                .ok();
        }
    });
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            start_tensor_server(app.handle().clone());
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![set_fullscreen])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

import { QueryClient } from '@tanstack/react-query';

// A single QueryClient used imperatively from the server store (.ts) via
// queryClient.fetchQuery — TanStack Query is the fetch/cache/dedup engine, but
// it is never used as a hook in components. Components read the zustand store.
export const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5_000, retry: 1 } },
});

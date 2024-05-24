import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { useState } from "react";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient, _] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: async (error: any, _) => {
            if (error) {
              console.log({ error });
              const message = error?.response?.data.error;
              if (message === "token-expired") {
                console.log("token expired");
              }
            }
          },
        }),

        mutationCache: new MutationCache({
          onError: async (error: any, _variables, _context, _) => {
            if (error) {
              const message = error?.response?.data?.error;
              if (message === "token-expired") {
                console.log("token expired");
              }
            }
          },
        }),
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default QueryProvider;

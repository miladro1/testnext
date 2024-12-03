import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextIntlProvider } from "@togetherise/components/common/NextIntlProvider";
import { StoreProvider } from "@togetherise/core/stores/StoreProvider";
import "@togetherise/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return ( 
    <StoreProvider>
      <NextIntlProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </NextIntlProvider>
    </StoreProvider>
  )
}

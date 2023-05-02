import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import "@/styles/globals.css";
import { WagmiConfig } from "wagmi";
import { client } from "@/utils/wagmi";
import { ConnectKitProvider } from "connectkit";

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="retro">
      
        <div className="min-h-[calc(100vh-68px)] pt-16 px-2 sm:px-4">
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </div>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

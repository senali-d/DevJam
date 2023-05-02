import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import { WagmiConfig } from "wagmi";
import { client } from "@/utils/wagmi";
import { ConnectKitProvider } from "connectkit";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <WagmiConfig client={client}>
        <ConnectKitProvider theme="retro">
            <ChakraProvider>
              <Component {...pageProps} />
            </ChakraProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
}

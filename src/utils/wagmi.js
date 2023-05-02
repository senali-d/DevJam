import { createClient } from "wagmi";
import { getDefaultClient } from 'connectkit';
import { polygonMumbai,filecoinHyperspace } from "wagmi/chains";


export const client = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: 'DovJam',
    chains: [polygonMumbai,filecoinHyperspace],
  })
);
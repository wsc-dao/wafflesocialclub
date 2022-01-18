// import { useMemo } from "react";
// import { clusterApiUrl } from "@solana/web3.js";
// import {
//   getPhantomWallet,
//   getSolflareWallet,
//   getSolletWallet,
// } from "@solana/wallet-adapter-wallets";

// import {
//   ConnectionProvider,
//   WalletProvider,
// } from "@solana/wallet-adapter-react";

// import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import * as anchor from "@project-serum/anchor";
import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";
import {createTheme} from "@material-ui/core";


/*
const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!;
const candyMachineId = process.env.NEXT_PUBLIC_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID)
  : undefined;
const connection = new anchor.web3.Connection(rpcHost);
const startDateSeed = parseInt(process.env.NEXT_PUBLIC_CANDY_START_DATE!, 10);
const txTimeout = 30000; // milliseconds (confirm this works for your project)


const network = process.env.NEXT_PUBLIC_SOLANA_NETWORK as WalletAdapterNetwork;

console.log(network, rpcHost);
*/
const App = () => <section style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: '100vh'}}>
  <h1 style={{textAlign: "center"}}>Baking Waffles</h1>
</section>

export default App;

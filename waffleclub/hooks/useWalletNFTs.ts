import {useWallet} from "@solana/wallet-adapter-react";
import {useEffect, useState} from "react";
import * as anchor from "@project-serum/anchor";
import {existsOwnerSPLToken, getNFTsForOwner} from "../utils/candyMachine";

const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const useWalletNfts = () => {
  const wallet = useWallet();
  const [setIsLoading] = useState(false);
  const [isSPLExists, setSPLExists] = useState(false);

  const [nfts, setNfts] = useState<Array<any>>([]);

  useEffect(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }
    setIsLoading(true);
    console.log(connection)
    existsOwnerSPLToken(
      connection,
      wallet.publicKey
    ).then(isExistSPLToken => {
      setSPLExists(isExistSPLToken);


    getNFTsForOwner(connection, wallet.publicKey as anchor.web3.PublicKey).then(nftsForOwner => {
      console.log('Arne: nftsForOwner', nftsForOwner);
      setNfts(nftsForOwner);
      setIsLoading(false);
    });
  });
  }, [isSPLExists, wallet]);

  return [nfts, isSPLExists];
};

export default useWalletNfts;

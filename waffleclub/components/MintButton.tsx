import styled from "styled-components";
import {CandyMachineAccount} from "../helpers/candy-machine";
import {GatewayStatus, useGateway} from "@civic/solana-gateway-react";
import {useEffect, useState} from "react";

export const CTAButton = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 20px;
  font-weight: bold;
  color: #B8202E;
  background: #f5d8ad;
  border:none;
`; // add your styles here

export const MintButton = ({
                             onMint,
                             candyMachine,
                             isMinting,
                           }: {
  onMint: () => Promise<void>;
  candyMachine: CandyMachineAccount | undefined;
  isMinting: boolean;
}) => {
  const {requestGatewayToken, gatewayStatus} = useGateway();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (gatewayStatus === GatewayStatus.ACTIVE && clicked) {
      console.log("Minting");
      onMint();
      setClicked(false);
    }
  }, [gatewayStatus, clicked, setClicked, onMint]);
  return (
    <CTAButton
      disabled={
        candyMachine?.state.isSoldOut || isMinting
        // || !candyMachine?.state.isActive
      }
      onClick={async () => {
        setClicked(true);
        if (candyMachine?.state.isActive && candyMachine?.state.gatekeeper) {
          if (gatewayStatus === GatewayStatus.ACTIVE) {
            setClicked(true);
          } else {
            await requestGatewayToken();
          }
        } else {
          await onMint();
          setClicked(false);
        }
      }}
    >
      {candyMachine?.state.isSoldOut ? (
        "SOLD OUT"
      ) : isMinting ? (
        'loading'
      ) : (
        "MINT"
      )}
    </CTAButton>
  );
};

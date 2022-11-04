import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { Chain } from "../../lib/types/starknet";
import { useTransaction } from "../../providers/TxProvider";
import { useStarknet } from "../../providers/StarknetProvider";

import Navbar from "./Navbar";
import TxInfo from "./TxInfo";
import TxTrace from "./TxTrace";
import TxExecutionResources from "./TxResources";

function TxViewerContainer() {
    const params = useParams();
    const { tx } = useTransaction();
    const { setChain } = useStarknet();

    useEffect(() => {
        const { chainId, txHash } = params;

        if (!chainId && !txHash) return;

        setChain((chainId as string).toUpperCase() as Chain);
        tx.setHash(txHash || null);
    }, [params]);

    return (
        <>
            <TxViewer />
        </>
    );
}

const Container = styled.div`
    /* display: flex;
    flex-direction: column;
    position: relative; */
`;

const ContentWrapper = styled.div`
    min-height: 500px;
    height: calc(100vh - 60px);
`;

function TxViewer() {
    return (
        <Container>
            <Navbar />
            <ContentWrapper>
                {/* <TxInfo /> */}
                <TxTrace />
                <TxExecutionResources />
            </ContentWrapper>
        </Container>
    );
}

export default TxViewerContainer;

import styled from "styled-components";

export const BoxFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid blueviolet;
`;

export const InfoContainer = styled.div`
    /* display: grid; */
`;

export const InfoBox = styled.div`
    border: 1px solid grey;
    padding: 1.5rem 2rem;
`;

export const BottomInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-top: 1rem;
    /* justify-content: space-between; */
    font-family: "Space Mono", monospace;
`;

const EntryWrapper = styled.div`
    font-size: 0.95rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;
    margin-bottom: 0.5rem;
`;

const EntryKey = styled.div`
    color: grey;
    font-style: italic;
    /* font-weight: 500; */
`;

const EntryValue = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Space Mono", monospace;
`;

export const Entry = ({
    title,
    value,
}: {
    title: string;
    value: string | string[] | number | number[];
}) => (
    <EntryWrapper>
        <EntryKey>{title}</EntryKey>
        <EntryValue>
            {typeof value == "string" || typeof value == "number" ? (
                <div>{value}</div>
            ) : (
                value.map((e) => <div>{e}</div>)
            )}
        </EntryValue>
    </EntryWrapper>
);

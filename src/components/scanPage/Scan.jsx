import React from "react"
import styled from "styled-components"

const Scan = ({scanId, userName="", userEmail="", status, createdAt}) => {
    return (
        <StyledScan>
            <div>
                <p>{scanId}</p>
                <p>{`${userName} / ${userEmail}`}</p>
                <StyledStatusParagraph status={status}>
                    {status.split("_").join(" ")}
                </StyledStatusParagraph>
            </div>
            <p>{createdAt}</p>
        </StyledScan>
    )
}

export default Scan

const StyledScan = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-end;
    margin-bottom: 30px;
    border: 4px solid;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
`

const StyledStatusParagraph = styled.div`
    color: ${({status}) => status === "failed" ? "#e31818" : status === "done" ? "#35dc35" : "#e5e52c"};
    text-transform: capitalize;
`
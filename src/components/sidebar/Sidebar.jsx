import React from "react";
import styled from "styled-components"
import { statuses } from "./statuses";

const Sidebar = ({status, setStatus}) => {
    return (
        <StyledSidebar>
            {
                statuses.map(element => (
                    <StyledItem
                        className={status === element.value && "active"}
                        key={element.id}
                        onClick={() => setStatus(() => element.value)}
                    >
                        {element.label}
                    </StyledItem>
                ))
            }
        </StyledSidebar>
    )
}

export default Sidebar

const StyledSidebar = styled.div`
    padding: 40px;
    width: 20%;
    display: flex;
    flex-direction: column;
    .active {
        color: #000;
        opacity: 1;
        font-weight: 700;
    }
`

const StyledItem = styled.button`
    margin-bottom: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    width: 150px;
    text-align: left;
    font-size: 20px;
    opacity: .7;
    color: #808080;
    :hover {
        color: #000;
        opacity: 1;
    }
`
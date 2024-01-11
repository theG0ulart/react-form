import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
    
    &:disabled {
        Background-color: #F2F2F2;
        border: 1px solid #F2F2F2;
        cursor: not-allowed;
    }
`
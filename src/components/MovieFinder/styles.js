import styled from "styled-components";

export const ExplorerWrapper = styled.div`
    position: relative;
    z-index: 3;
`;

export const Search = styled.input`
    width: 100%;
    line-height: 60px;
    background: #fff;
    font-style: italic;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    padding: 0 50px;
    font-size: 14px;
`;

export const ResultWrapper = styled.div`
    position: absolute;
    width: 80%;
    top: 61px;
    background: #fff;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    max-height: calc(100vh - 130px);
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 2;
`;

export const SearchItem = styled.div`
    cursor: pointer;
    line-height: 40px;
    padding: 0 50px;
    border-bottom: 1px solid #e4e4e4;
    &:hover {
        // text-decoration: underline;
        background: #e3eefb;
    }
`;

export const Loader = styled.div`
    float: right;
    position: absolute;
    top: 10px;
    right: 20px;
`;

export const Interstitial = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

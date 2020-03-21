import styled from "styled-components";

export const Poster = styled.img`
    height: 300px;
    width: 200px;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
`;

export const MovieDetail = styled.div`
    height: 300px;
    width: 300px;
`;

export const MovieCard = styled.div`
    width: 500px;
    border: 1px solid #dedede;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
    background: #fff;
    cursor: pointer;
`;

export const MovieListWrapper = styled.div`
    flex-wrap: wrap;
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    &:after {
        content: "";
        width: 487px;
    }
`;

export const Header = styled.div`
    border-bottom: 1px solid #dedede;
    padding: 0 10px;
    width: 100%;
    color: #333;
    text-align: center;
`;

export const Rating = styled.div`
    font-weight: bold;
    font-size: 14px;
    color: #66ff66;
    padding-bottom: 5px;
`;

export const MovieName = styled.div`
    font-weight: bold;
    padding: 10px 0 0;
`;

export const Description = styled.div`
    font-size: 14px;
    color: #a9a9a9;
    height: 205px;
    padding: 20px;
    overflow: hidden;
`;

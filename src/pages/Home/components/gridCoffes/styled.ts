import { styled } from "styled-components";


export const ContainerGridCoffes = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .title{
        font-family: ${({theme}) => theme.fonts.title };
        font-size: ${({theme}) => theme.textSizes["title-title-l"]};
    }



`

export const ContainerCard = styled.div`

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 3.5rem 0rem;

`


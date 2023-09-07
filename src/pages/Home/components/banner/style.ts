import { styled } from "styled-components";

import background from '../../../../assets/Background.png'

export const BannerComponent = styled.div`

    width: 100%;
    background-image: url(${background});
    height: 32rem;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;

    >div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`

export const InfoComponent = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 50%;

    h1{
        font-family: ${({theme}) => theme.fonts.title };
        font-size: ${({theme}) => theme.textSizes["title-title-l"]};
    }

    p{
        margin-top: 0.5rem;
        font-family: ${({theme}) => theme.fonts.regular };
        font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
    }

`

interface GridInfosCollors{
    color: 'brand-yellow-dark' | 'base-text' | 'brand-yellow' | 'brand-purple'
}

export const GridInfosBanner = styled.div`

    margin-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 2rem;

    .line_info{
        display: flex;
        width: 47%;
        gap: 0.5rem;
        align-items: center;

        p{
            font-size: ${( {theme} ) => theme.textSizes["text-regular-s"]};
        }
    }

`

export const GridInfosBullet = styled.div<GridInfosCollors>`
        border-radius: 999px;
        width: 2rem;
            height: 2rem;
            border-radius: 50%;


        color: ${( {theme} ) => theme.colors["base-white"]};
        background-color: ${({ color, theme }) => theme.colors[`${color}`]};

        display:flex;
        align-items:center;
        justify-content:center;
`
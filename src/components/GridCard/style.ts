import { styled } from "styled-components";

export const Card = styled.div`

    width: 22.5%;
    background-color: ${({theme}) => theme.colors["base-card"]};
    border-radius: 6px 36px 6px 36px;
    /* height: 25rem; */
    padding:0 2% 2% 2%;

    header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        img{
            margin-top: -1.25rem;
        }

        main{
            margin-top:0.5rem;
            display: flex;
            gap: 0.25rem;
            flex-wrap: wrap;

            p{
                border-radius: 999px;
                background-color: ${({theme}) => theme.colors["brand-yellow-light"]};
                color: ${({theme}) => theme.colors["brand-yellow-dark"]};
                padding: 0.25rem 0.75rem;
                text-transform: uppercase;
                font-size: ${({theme}) => theme.textSizes["components-tag"]};
                font-weight: 600;
            }
        }

        
    }

    section{
        text-align: center;
        margin-top: 1rem;
        

        p{
            font-family: ${({theme}) => theme.fonts.title};
            font-size: ${({theme}) => theme.textSizes["title-title-s"]};
        }

        label{
            font-family: ${({theme}) => theme.fonts.regular};
            font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
            color: gray;
        }
    }

    footer{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;

        p{
            font-family: ${({theme}) => theme.fonts.title};
            font-size: ${({theme}) => theme.textSizes["title-title-s"]};
        }
        

        .container_footer{
            display: flex;
            align-items: center;
            width: 60%;
            gap: 0.5rem;

            .container_footer_btns{
                display: flex;
                background-color: ${({theme}) => theme.colors["base-button"]};
                border-radius: 6px;
                padding: 0.5rem 0.25rem;
                width: 100%;
                

                input{
                    text-align: center;
                    width: 100%;
                    background: none;
                    border: none;
                    color: ${({ theme }) => theme.colors["base-title"]};

                    &:focus {
                    outline: none;
                    }
                }

                button{
                    border: none;
                    background-color: transparent;
                    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
                    font-weight: bold;
                }
            }

            .button_card{
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${({theme}) => theme.colors["brand-purple-dark"]};
                color: white;
                border: none;
                height: 2rem;
                width: 3rem;
                border-radius: 6px;
            }
        }
    }
    

`
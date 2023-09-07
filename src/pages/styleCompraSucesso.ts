import { styled } from "styled-components";

export const CompraSucessoContainer = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    section{
        width: 45%;
    }

    .container_compra_sucesso{
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;

        header{
            display: flex;
            flex-direction: column;
            gap: 0.25rem;

            h1{
                color: ${({theme}) => theme.colors["brand-yellow-dark"]};

            }
            p{
                font-weight: 500;
            }
        }

        main{
            margin-top: 2rem;
            padding: 2rem;

            border: 1px solid #ccc;
            border-radius: 6px 36px 6px 36px;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            div{
                display: flex;
                align-items: center;
                gap: 1rem;
                font-size: ${({theme}) => theme.textSizes["text-regular-s"]};

                section{
                    width: 100%;
                }
            }
        }
    }

`
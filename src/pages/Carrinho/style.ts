import { styled } from "styled-components";

export const CarrinhoContainer = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;

`

export const CarrinhoSectionsContainer = styled.div`

    display: flex;
    justify-content: space-between;
    gap: 2rem;

    h2{
        font-family: ${({theme}) => theme.fonts.title };
        font-size: ${({theme}) => theme.textSizes["title-title-s"]};
        font-weight: 400;
    }

    .section_endereco{
        display: flex;
        flex-direction: column;
        width: 60%;

        strong{
            display: flex;
            gap: 0.25rem;
            align-items: center;
            

            .img_pin{
                margin-top: 0.25rem;
                color: ${({theme}) => theme.colors["brand-yellow-dark"]};
            }
        }

        

        form{
            width: 100%;
            background-color: ${({theme}) => theme.colors["base-card"]};
            padding: 2.5rem;
            margin-top: 1rem;

            header{
                margin-left: 1rem;
                
                
                .img_pin{
                    margin-left: -1.6rem;
                }

                strong{
                    font-size: 0.95rem;
                }

                p{
                    font-size: 0.825rem;
                }
            }

            main{
                margin-top: 2.5rem;
                display: flex;
                flex-direction: column;
                /* gap: 1rem; */

                input{
                    padding:0.5rem;
                    background-color: ${({theme}) => theme.colors["base-input"]};
                    border: 1px solid ${({theme}) => theme.colors["base-hover"]};
                    font-size: ${({theme}) => theme.textSizes["components-button-g"]};
                    border-radius: 4px;
                    transition: 0.2s border;
                    color: ${({theme}) => theme.colors["base-text"]};
                    margin-bottom: 1rem;

                    &:focus{
                        border: 1.5px solid ${({theme}) => theme.colors["brand-yellow-dark"]};
                    }
                }

                .input_medio{
                    width: 45%;
                }

                .input_longo{
                    width: 100%;
                }

                .input_medioLongo{
                    width: 55%;
                }

                .input_curto{
                    width: 10%;
                }

                div{
                    display: flex;
                    /* gap: 0.5rem; */
                }

                .complemento{
                    position: relative;
                    /* display: flex; */
                    width: 100%;
                    /* justify-content: space-between; */
                    label{
                        position: absolute;
                        top: 0.6rem;
                        right: 0.8rem;
                        font-size: ${({theme}) => theme.textSizes["components-button-s"]};
                        font-style:italic;
                    }
                }

                
            }
        }

        .message_error{
            font-size: 0.75rem;
            color: ${({ theme }) => theme.colors["brand-yellow"]};
            margin: -0.5rem 0rem 0.5rem 0rem;
        }

        .container_pagamento{

            width: 100%;
            background-color: ${({theme}) => theme.colors["base-card"]};
            padding: 2.5rem;
            margin: 1rem 0rem;

            header{
                margin-left: 1rem;
                
                
                .img_pin{
                    margin-left: -1.6rem;
                    color: ${({theme}) => theme.colors["brand-purple"]};
                }

                strong{
                    font-size: 0.95rem;
                }
                p{
                    font-size: 0.825rem;
                }
            }

            main{
                margin-top: 2rem;
                display: flex;
                gap: 0.5rem;

                button{
                    width: 33%;
                    display: flex;
                    gap: 0.6rem;
                    padding: 0 0.25rem;
                    align-items: center;
                    justify-content: center;
                    font-size: ${({theme}) => theme.textSizes["components-button-s"]};
                    height: 3rem;
                    background-color: ${({theme}) => theme.colors["base-button"]};
                    border: none;
                    border-radius: 6px;
                    color: ${({theme}) => theme.colors["brand-purple"]};
                    transition: 0.2s border;

                    p{
                        color: ${({theme}) => theme.colors["base-text"]};
                    }

                    &:hover{
                        background-color: ${({theme}) => theme.colors["brand-purple-light"]};
                        border: 1px solid ${({theme}) => theme.colors["brand-purple"]};
                    }
                }
            }
        }
    }

    .section_carrinho{
        display: flex;
        flex-direction: column;
        width: 40%;

        form{
            width: 100%;
            background-color: ${({theme}) => theme.colors["base-card"]};
            padding: 2rem;
            margin-top: 1rem;
            border-radius: 6px 36px 6px 36px;

            .container_cafes{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .card_cafe{
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    
                    img{
                        width: 4.5rem;
                    }

                    .content_card{
                        display: flex;
                        flex-direction: column;
                        width: 65%;

                        p{
                            font-weight: 600;
                        }

                        .container_card_btns{
                            display: flex;
                            gap: 0.5rem;
                            margin-top: 0.75rem;

                            .card_btns{
                                background-color: ${({theme}) => theme.colors["base-button"]};
                                border-radius: 6px;
                                padding: 0.5rem 0.25rem;
                                width: 30%;
                                display: flex;
                                align-items: center;

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

                            .btn_remover{
                                background-color: ${({theme}) => theme.colors["base-button"]};
                                border: none;
                                border-radius: 6px;
                                padding: 0.5rem 0.8rem;
                                display: flex;
                                align-items: center;
                                gap: 0.25rem;
                                color: ${({theme}) => theme.colors["brand-purple"]};
                                transition: 0.2s background-color;

                                p{
                                    font-size: ${({theme}) => theme.textSizes["components-button-s"]};
                                    font-weight: 500;
                                    color: ${({theme}) => theme.colors["base-text"]};
                                }

                                &:hover{
                                    background-color:${({theme}) => theme.colors["base-hover"]};
                                }
                            }
                        }

                        
                    }

                    .card_cafe_valor{
                        width: 28%;
                        font-weight: 600;
                        text-align: right;
                    }

                    padding-bottom: 1.25rem;
                    border-bottom: 1px solid ${({theme}) => theme.colors["base-hover"]};

                }
            }

            footer{
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                div{
                    display: flex;
                    justify-content:space-between;
                    font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
                }

                .total{
                    font-size: ${({theme}) => theme.textSizes["text-regular-l"]};
                    font-weight: 600;
                }

                button{
                    background-color: ${({theme}) => theme.colors["brand-yellow"]};
                    border: none;
                    padding: 0.75rem;
                    color: white;
                    border-radius: 6px;
                    font-weight: 500;
                    margin-top: 1rem;
                    transition: 0.2s all;
                    width: 100%;

                    &:hover{
                        background-color: ${({theme}) => theme.colors["brand-yellow-dark"]};
                    }
                }
            }
        }
    }

`
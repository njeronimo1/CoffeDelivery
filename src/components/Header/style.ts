import { css, styled } from "styled-components";



export const ContainerHeader = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors["base-background"]};
    height: 6rem;
    position: sticky;
    top: 0;

    .container_header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }


`

export const HeaderButtonsContainer = styled.div`

    display: flex;
    gap: 1rem;
    align-items: center;

`

interface HeaderProps{
    variant: 'purple' | 'yellow';
}

export const HeaderButton = styled.button<HeaderProps>`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    border: none;
    border-radius: 6px;
    height: 2.3rem;
    padding: 0rem 0.5rem;
    min-width: 2.3rem;
    cursor: inherit;

    font-size: ${({ theme }) => theme.textSizes["text-bold-s"]};

    ${({ variant }) => css`
        background-color: ${({ theme }) => theme.colors[`brand-${variant}-light`]};
        color: ${({ theme }) => theme.colors[`brand-${variant}-dark`]};
    `}

    ${({ variant }) =>
    variant === "purple" &&
    css`
      svg {
        color: ${({ theme }) => theme.colors[`brand-${variant}`]};
        ;
      }
    `}

`
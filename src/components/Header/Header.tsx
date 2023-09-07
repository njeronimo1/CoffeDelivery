import { NavLink } from "react-router-dom";
import { ContainerHeader, HeaderButton, HeaderButtonsContainer } from "./style";

import logo from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { ContextCoffe } from "../../contexts/ContextCoffe";

export function Header(){

    const coffeContext = useContext(ContextCoffe);
    const [countCarrinho, setCountCarrinho] = useState(0);

    useEffect(() => {
        setCountCarrinho(coffeContext.ArrayCarrinho.length);
    }, [coffeContext.ArrayCarrinho])

    return(
        <ContainerHeader>
            <div className="container">
                <div className="container_header">
                    <NavLink to={'/'}>
                        <img src={logo} alt="logo"/>
                    </NavLink>
                

                    <HeaderButtonsContainer>
                        <HeaderButton variant="purple">
                            <MapPin width={20} height={20}/>
                            Porto Alegre, RS
                        </HeaderButton>

                        <NavLink to={'/carrinho'}>
                            <HeaderButton variant="yellow">
                                
                                    <ShoppingCart width={20} height={20} weight="fill" />
                                    { countCarrinho }
                            </HeaderButton>
                        </NavLink>
                    </HeaderButtonsContainer>
                </div>
            </div>
        </ContainerHeader>
    )
}
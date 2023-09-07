import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { BannerComponent, GridInfosBanner, GridInfosBullet, InfoComponent } from "./style";

import coffe from '../../../../assets/cafe_imagem.png'

export function Banner(){
    return(
        <BannerComponent>
            <div className="container">
                <InfoComponent>
                    <h1>Encontre o café perfeito <br/>para qualquer hora do dia</h1>
                    <p>Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    
                    <GridInfosBanner>
                        <div className="line_info">
                            <GridInfosBullet color="brand-yellow-dark">
                               <ShoppingCart weight="fill" />
                            </GridInfosBullet>
                            <p>Compra simples e segura</p>
                        </div>

                        <div className="line_info">
                            <GridInfosBullet color="base-text">
                                <Package weight="fill" />
                            </GridInfosBullet>
                            <p>Embalagem mantém o café intacto</p>
                        </div>

                        <div className="line_info">
                            <GridInfosBullet color="brand-yellow">
                                <Timer weight="fill" />
                            </GridInfosBullet>
                            <p>Entrega rápida e rastreada</p>
                        </div>

                        <div className="line_info">
                            <GridInfosBullet color="brand-purple">
                                <Coffee weight="fill" />
                            </GridInfosBullet>
                            <p>O café chega fresquinho até você</p>
                        </div>
                    </GridInfosBanner>
                </InfoComponent>

                <div className="image_coffe">
                    <img src={coffe} />
                </div>


            </div>
        </BannerComponent>
    )
}
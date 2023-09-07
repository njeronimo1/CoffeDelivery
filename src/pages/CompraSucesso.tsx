import { CurrencyDollar, MapPin, ShoppingCart, Timer } from "phosphor-react";
import { GridInfosBullet } from "./Home/components/banner/style";
import { CompraSucessoContainer } from "./styleCompraSucesso";

import compraSucesso from '../assets/Illustration.png'
import { useContext, useEffect } from "react";
import { ContextCoffe } from "../contexts/ContextCoffe";

export function CompraSucesso(){

    const CoffeContext = useContext(ContextCoffe);

    return(
        <CompraSucessoContainer>
            <div className="container">
                <div className="container_compra_sucesso">
                    <section>
                        <header>
                            <h1>Uhul! Pedido confirmado</h1> 
                            <p>Agora é só aguardar que logo o café chegará até você</p>
                       </header>

                       <main>

                            <div>
                                <GridInfosBullet color="brand-yellow-dark">
                                <MapPin weight="fill" />
                                </GridInfosBullet>
                                <section>
                                    <p>Entrega em {CoffeContext.DadosPessoaisGlobal?.rua}, {CoffeContext.DadosPessoaisGlobal?.numero}</p>
                                    <p>{CoffeContext.DadosPessoaisGlobal?.bairro} - {CoffeContext.DadosPessoaisGlobal?.cidade}, {CoffeContext.DadosPessoaisGlobal?.uf}</p>
                                </section>
                            </div>
                            <div>
                                <GridInfosBullet color="brand-yellow">
                                <Timer weight="fill" />
                                </GridInfosBullet>
                                <section>
                                    <p>Previsão de entrega</p>
                                    <strong>20 min - 30 min</strong>
                                </section>
                            </div>
                            <div>
                                <GridInfosBullet color="brand-yellow-dark">
                                <CurrencyDollar weight="fill" />
                                </GridInfosBullet>
                                <section>
                                    <p>Pagamento na entrega</p>
                                    <strong>{CoffeContext.DadosPessoaisGlobal?.pagamento}</strong>
                                </section>
                            </div>

                       </main>
                    </section>
                    <section>
                        <img src={compraSucesso}/>
                    </section>
                </div>
            </div>
        </CompraSucessoContainer>
    )
}
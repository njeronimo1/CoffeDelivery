import {  Minus,  Plus, Trash } from "phosphor-react";
import { CarrinhoContainer, CarrinhoSectionsContainer } from "./style";

import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ContextCoffe } from "../../contexts/ContextCoffe";
import { formatMoney } from "../../utils/FormatedPrice";
import { DadosPessoais } from "./DadosPessoais";
import { DadosPessoaisType } from '../../@types/dadosPessoais';



export function Carrinho(){

    const coffeContext = useContext(ContextCoffe);
    const[rodarFunction, setRodarFunction] = useState(0);
    const history = useNavigate();

    function deleteCoffeInCar(id: number){
        coffeContext.deleteCoffeInCar(id);
    }

    function handleCountCoffeInCar(index:number, value: string){
        coffeContext.handleCountCoffeInCar(index, value);
    }

    const formatedPrice = () => {
        var price = 0;

        coffeContext.ArrayCarrinho.forEach(coff => {
            let priceForQuantity = coff.price * coff.quantity;
            price += priceForQuantity
        });

        price + 3.50;

        return formatMoney(price);
    };

    const formatedPriceTotalItens = () => {
        var price = 0;

        coffeContext.ArrayCarrinho.forEach(coff => {
            let priceForQuantity = coff.price * coff.quantity;
            price += priceForQuantity
        });

        if(price > 0)price -= 3.50;
        

        return formatMoney(price);
    };

    async function submitDados(){
        setRodarFunction(Math.random());
        // var dados = await handleSubmitDadosPessoais();
    }

    async function handleSubmitDadosPessoais(data: DadosPessoaisType, pagamento: string){
        var dataFormated = {
            ...data,
            pagamento: pagamento
        };

        var result = await coffeContext.setDadosPessoais(dataFormated);

        if(result){
            history('/compra-sucesso');
        }
    }

    return(
        <CarrinhoContainer>
            <div className="container">

                <CarrinhoSectionsContainer>
                    <section className="section_endereco">
                        <DadosPessoais rodarFunction={rodarFunction} handleSubmitDadosPessoais={handleSubmitDadosPessoais} />
                    </section>
                    <section className="section_carrinho">
                        <h2>Cafés selecionados</h2>

                        <form action="">
                            <div className="container_cafes">

                                {coffeContext.ArrayCarrinho.map((c, i) => {
                                    return(
                                        <div key={c.id} className="card_cafe">
                                            <img src={`/coffees/${c.photo}`} alt={c.description}/>
                                            <div className="content_card">
                                                <p>{c.name}</p>
                                                <div className="container_card_btns">
                                                    <div className="card_btns">
                                                        <button type="button" onClick={() => {handleCountCoffeInCar(i, 'decrement')}}>
                                                            <Minus size={14} weight="fill" />
                                                        </button>
                                                        <input type="number" readOnly value={c.quantity} />
                                                        <button type="button" onClick={() => {handleCountCoffeInCar(i, 'increment')}}>
                                                            <Plus size={14} weight="fill" />
                                                        </button>
                                                    </div>

                                                    <button className="btn_remover" type="button"
                                                    onClick={() => {deleteCoffeInCar(c.id)}}>
                                                    <Trash size={22} />
                                                    <p>REMOVER</p>
                                                    </button>
                                                </div>
                                                
                                            </div>
                                            <label className="card_cafe_valor"> R$ {formatMoney(c.price * c.quantity)}</label>
                                        </div>
                                    )
                                })}

                            </div>

                            <footer>
                                <div>
                                    <p>Total de itens</p>
                                    <p>R$ {formatedPriceTotalItens()}</p>
                                </div>
                                <div>
                                    <p>Entrega</p>
                                    <p>R$ 3,50</p>
                                </div>
                                <div className="total">
                                    <p>Total</p>
                                    <p>R$ {formatedPrice()}</p>
                                </div>

                                {/* <NavLink to={'/compra-sucesso'} style={{width:'100%'}} > */}
                                    <button type="button" onClick={submitDados}>CONFIRMAR PEDIDO</button>
                                {/* </NavLink> */}
                            </footer>
                        </form>
                    </section>
                </CarrinhoSectionsContainer>
            </div>
        </CarrinhoContainer>
    )
}
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Card } from "./style";
import { useContext, useState } from "react";
import { ContextCoffe } from "../../contexts/ContextCoffe";
import { carrinho } from "../../contexts/ContextCoffeProvider";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
  }
  
  interface CoffeeProps {
    coffee: Coffee;
  }



export function GridCard({ coffee }: CoffeeProps){

    const [countCoffe, setCountCoffe] = useState(1);
    const contextCoffe = useContext(ContextCoffe);

    function handleCountCoffe(type: string){
        if(type === 'plus'){
            setCountCoffe(countCoffe + 1);
        }else{
            if(countCoffe - 1 !== 0){
                setCountCoffe(countCoffe - 1);
            }
        }
    }

    function submitCountCoffe(){
        var CoffeCar:carrinho = {
            id: coffee.id,
            tags: coffee.tags,
            name: coffee.name,
            description: coffee.description,
            photo: coffee.photo,
            price: coffee.price,
            quantity: countCoffe
        }

        // console.log(CoffeCar);
        contextCoffe.setCoffeInCar(CoffeCar);
    }

    return(
        <Card>
            <header>
                <img src={`/coffees/${coffee.photo}`} />

                <main>
                    {coffee.tags.map(( data ) => {
                        return(
                            <p key={data}>{data}</p>
                        )
                    })}
                </main>
            </header>

            <section>
                <p>{coffee.name}</p>
                <label>{coffee.description}</label>
            </section>
            
            <footer>
                <p>R$ {coffee.price}</p>

                <div className="container_footer">
                    <div className="container_footer_btns">
                        <button onClick={() => { handleCountCoffe('minus') }}
                        disabled={countCoffe == 1 ? true : false}>
                            <Minus size={14} weight="fill" />
                        </button>

                        <input type="number" readOnly value={countCoffe} />

                        <button onClick={() => { handleCountCoffe('plus') }}>
                            <Plus size={14} weight="fill" />
                        </button>
                    </div>

                    <button className="button_card" type="button" onClick={submitCountCoffe}>
                        <ShoppingCart weight="fill" size={20} />
                    </button>
                </div>
                
            </footer>
        </Card>
    )
}
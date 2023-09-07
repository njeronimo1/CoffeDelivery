import { ReactNode, useEffect, useState } from "react";
import { ContextCoffe } from "./ContextCoffe";
import { Coffee } from "../components/GridCard/GridCard";
import { produce } from "immer";
import { DadosPessoaisType } from "../@types/dadosPessoais";

interface coffeProvider{
    children: ReactNode
}

export interface carrinho extends Coffee{
    quantity: number
}

export function ContextCoffeProvider( {children}: coffeProvider ){

    const [ArrayCarrinho, setArrayCarrinho] = useState<carrinho[]>([]);
    const [DadosPessoaisGlobal, setDadosPessoaisGlobal] = useState<DadosPessoaisType>();

    useEffect(() => {
        var carrinho = localStorage.getItem('carrinho');
        var dadosPessoais = localStorage.getItem('DadosPessoais');

        if(carrinho){
            let carrinhoConverted:carrinho[] = JSON.parse(carrinho);
            setArrayCarrinho(carrinhoConverted);
        }
        
        if(dadosPessoais){
            let dadosPessoaisConverted:DadosPessoaisType = JSON.parse(dadosPessoais);
            setDadosPessoaisGlobal(dadosPessoaisConverted);
        }

    }, [])

    async function setCoffeInCar(CoffeDados: carrinho) {
        const carrinho = localStorage.getItem('carrinho');

        if(carrinho){
            let carrinhoConverted:carrinho[] = JSON.parse(carrinho);

            var newCarFunction = async () => await newCart(carrinhoConverted, CoffeDados).then((data) => {
                setArrayCarrinho(data);
                localStorage.setItem('carrinho', JSON.stringify(data));
            });
            
            await newCarFunction();
            
        }else{
            let carrinhoConverted:carrinho[] = [];

            var newCarFunction = async () => await newCart(carrinhoConverted, CoffeDados).then((data) => {
                setArrayCarrinho(data);
                localStorage.setItem('carrinho', JSON.stringify(data));
            });

            await newCarFunction();
        }
    };

    const newCart = async (carrinhoConverted:carrinho[], CoffeDados: carrinho) => produce(ArrayCarrinho, (draft) => {
        let findIndexCar = carrinhoConverted.findIndex(c => c.id === CoffeDados.id);

        if(findIndexCar < 0){
            draft.push(CoffeDados);
           
        }else{
            draft[findIndexCar].quantity += CoffeDados.quantity
        }
    })

    function getCoffesInCar(){
        const carrinho = localStorage.getItem('carrinho');
        
        if(carrinho) return JSON.parse(carrinho);
    }

    function deleteCoffeInCar(id: number){
        var carrinho = localStorage.getItem('carrinho');

        if(carrinho){
            let carrinhoConverted:carrinho[] = JSON.parse(carrinho);
            let deleteCoffe = carrinhoConverted.filter(c => c.id !== id);

            localStorage.setItem('carrinho', JSON.stringify(deleteCoffe));
            setArrayCarrinho(deleteCoffe);
        }

    }

    function handleCountCoffeInCar(index: number, value: string){
        var carrinho = localStorage.getItem('carrinho');

        if(carrinho){
            let carrinhoConverted:carrinho[] = JSON.parse(carrinho);

            if(value === 'increment'){
                carrinhoConverted[index].quantity += 1;
                localStorage.setItem('carrinho', JSON.stringify(carrinhoConverted));
                setArrayCarrinho(carrinhoConverted);
            }else{
                carrinhoConverted[index].quantity -= 1;
                localStorage.setItem('carrinho', JSON.stringify(carrinhoConverted));
                setArrayCarrinho(carrinhoConverted);
            }
        }
    }

    async function setDadosPessoais(data: DadosPessoaisType){
        localStorage.setItem('DadosPessoais', JSON.stringify(data));
        setDadosPessoaisGlobal(data);

        localStorage.setItem('carrinho', JSON.stringify([]));
        setArrayCarrinho([]);

        return true
    }

    return(
        <ContextCoffe.Provider value={{setCoffeInCar, getCoffesInCar, deleteCoffeInCar, handleCountCoffeInCar, setDadosPessoais, ArrayCarrinho,
            DadosPessoaisGlobal}}>
            { children }
        </ContextCoffe.Provider>
    )
}
import { createContext } from "react";
import { carrinho } from "./ContextCoffeProvider";
import { DadosPessoaisType } from "../@types/dadosPessoais";

interface ContextCoffe{
    setCoffeInCar: (CoffeDados: carrinho) => void;
    getCoffesInCar: () => carrinho[];
    setDadosPessoais: (data: DadosPessoaisType) => Promise<boolean>;
    deleteCoffeInCar: (id: number) => void;
    handleCountCoffeInCar: (index: number, value: string) => void;
    ArrayCarrinho: carrinho[];
    DadosPessoaisGlobal: DadosPessoaisType | undefined;
}


export const ContextCoffe = createContext<ContextCoffe>(null!);
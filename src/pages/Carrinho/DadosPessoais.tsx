import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputMask from "react-input-mask";
import { useEffect, useRef, useState } from "react";
import { DadosPessoaisType } from "../../@types/dadosPessoais";

const schema = yup.object({
    cep: yup.string().required("É Necessario preencher o campo de cep"),
    rua: yup.string().required("É Necessario preencher o campo de rua"),
    numero: yup.string().required("É Necessario preencher o campo de número").max(7),
    complemento: yup.string(),
    bairro: yup.string().required("É Necessário preencher o campo de bairro"),
    cidade: yup.string().required("É Necessário preencher o campo de cidade"),
    uf: yup.string().required("É Necessário preencher o campo de UF").max(2, "Preencha com no máximo 2 caracteres"),
  }).required();

interface DadosPessoaisInterface{
    rodarFunction: number;
    handleSubmitDadosPessoais: (data: DadosPessoaisType, pagamento: string) => void;
}

export function DadosPessoais({rodarFunction, handleSubmitDadosPessoais}: DadosPessoaisInterface){

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const button = useRef<HTMLButtonElement | null>(null);
    const[pagamento, setPagamento] = useState('');
    const[pagamentoError, setPagamentoError] = useState('');

    useEffect(() => {
        if(rodarFunction == 0) return

        button.current?.click();

    }, [rodarFunction]);

    function handleSubmitDados(data: any){
        if(pagamento !== ""){
            handleSubmitDadosPessoais(data, pagamento);
        }else{
            setPagamentoError('Escolha o método de pagamento!');
            return;
        }
    }   

    return(
        <>
            <h2>Complete seu pedido</h2>

            <form onSubmit={handleSubmit(handleSubmitDados)}>
                <header>
                    <strong>
                        <div className="img_pin">
                            <MapPinLine size={22} />
                        </div> 
                        Endereço de Entrega
                    </strong>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </header>

                <main>
                    <InputMask mask="99999-999"type="text" {...register("cep")} placeholder="CEP" className="input_medio"/>
                    {/* <input type="text"  {...register("cep")}/> */}
                    <span className="message_error" style={errors?.cep?.message !== "" ? {display:'initial'}: {display:'none'}}>{errors?.cep?.message}</span>
                    
                    <input type="text" placeholder="Rua" className="input_longo" {...register("rua")}/>
                    <span className="message_error" style={errors?.rua?.message !== "" ? {display:'initial'}: {display:'none'}}>{errors?.rua?.message}</span>

                    <div className="complemento">
                        <input type="text" placeholder="Número" className="input_medio" {...register("numero")}/>
                        

                        <input type="text" placeholder="Complemento" className="input_medioLongo" style={{paddingRight:'4rem', marginLeft:'0.5rem'}}
                        {...register("complemento")}/>
                        <label>Opcional</label>
                    </div>
                    <span className="message_error" >{errors?.numero?.message}</span>

                    <div>
                        <input type="text" placeholder="Bairro" className="input_medio" {...register("bairro")}/>
                        

                        <input type="text" placeholder="Cidade" className="input_medio" {...register("cidade")} style={{marginLeft:'0.5rem'}} />
                        

                        <input type="text" placeholder="UF" className="input_curto" {...register("uf")} style={{marginLeft:'0.5rem'}}/>
                        
                    </div>
                    <span className="message_error" style={errors?.bairro?.message !== "" ? {display:'initial'}: {display:'none'}}>{errors?.bairro?.message}</span>
                    <span className="message_error" style={errors?.cidade?.message !== "" ? {display:'initial'}: {display:'none'}}>{errors?.cidade?.message}</span>
                    <span className="message_error" style={errors?.uf?.message !== "" ? {display:'initial'}: {display:'none'}}>{errors?.uf?.message}</span>
                </main>

                <button type="submit" style={{display:'none'}} ref={button} >ENVIAR</button>
            </form>

            <div className="container_pagamento">
                <header>
                    <strong>
                        <div className="img_pin">
                            <CurrencyDollar size={22} />
                        </div> 
                        Pagamento
                    </strong>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </header>
                <main>
                    <button onClick={() => {setPagamento('Cartão de Crédito')}} 
                    style={pagamento == 'Cartão de Crédito' ? {backgroundColor: "#EBE5F9", border: '1px solid #8047F8'} : {}}>
                        <CreditCard size={16} />
                        <p>CARTÃO DE CRÉDITO</p>
                    </button>
                    <button onClick={() => {setPagamento('Cartão de Débito')}}
                    style={pagamento == 'Cartão de Débito' ? {backgroundColor: "#EBE5F9", border: '1px solid #8047F8'} : {}}>
                        <Bank       size={16} />
                        <p>CARTÃO DE DÉBITO</p>
                    </button>
                    <button onClick={() => {setPagamento('Dinheiro')}}
                    style={pagamento == 'Dinheiro' ? {backgroundColor: "#EBE5F9", border: '1px solid #8047F8'} : {}}>
                        <Money      size={16} />
                        <p>DINHEIRO</p>
                    </button>
                </main>

                {pagamentoError !== "" && (
                    <p style={{fontSize:'0.75rem', color:'red', marginTop:'0.5rem'}}>{pagamentoError}</p>
                )}
            </div>
        </>
    )
}
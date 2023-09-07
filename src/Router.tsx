import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Carrinho } from "./pages/Carrinho/Carrinho";
import { CompraSucesso } from "./pages/CompraSucesso";



export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/carrinho" element={<Carrinho />}></Route>
                <Route path="/compra-sucesso" element={<CompraSucesso />}></Route>
            </Route>
        </Routes>
    )
}
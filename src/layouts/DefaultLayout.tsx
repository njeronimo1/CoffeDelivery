import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { ContainerDefaultLayout } from "./style";

export function DefaultLayout(){
    return(
        <>
            <ContainerDefaultLayout>
                <Header />
                <Outlet />
            </ContainerDefaultLayout>
        </>
    )
}
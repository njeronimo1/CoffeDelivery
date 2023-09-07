import { ContainerCard, ContainerGridCoffes } from "./styled";
import { GridCard } from "../../../../components/GridCard/GridCard";
import { coffees } from "../../../../data/coffees";

export function GridCoffes(){



    return(
        <>
            <ContainerGridCoffes >
                <div className="container">
                    <h1 className="title"> Nossos cafés </h1>

                    <ContainerCard>
                        {coffees.map((cof) => {
                            return(
                                <GridCard key={cof.id} coffee={cof} />
                            )
                        })}
                        
                    </ContainerCard>
                </div>
            </ContainerGridCoffes>
        </>
    )
}
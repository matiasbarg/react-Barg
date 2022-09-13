import Card from "./Card"
import Mini1 from "../mini1.jpg";
import Mini2 from "../mini2.jpg";
import Mini3 from "../mini3.jpg";

function ItemListContainer() {
    return (
    <div className="itemListContainer"> 
    <Card 
        title="Heroe 1" 
        description="Pícaro Humano" 
        price={800} 
        img={Mini1} />
    <Card 
        title="Heroe 2" 
        description="Guerrero Enano" 
        price={700} 
        img={Mini2} />
    <Card 
        title="Heroe 3" 
        description="Bárbaro Semi-Orco" 
        price={900} 
        img={Mini3} />
    </div>
    );
}

export default ItemListContainer;
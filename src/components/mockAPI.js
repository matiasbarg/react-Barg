/*const data = [
    {
        id:1,
        title: "Pícaro Humano",
        price: 800,
        stock: 5,
        category: "heroes",
        detail: "Miniatura en resina, base de 30mm",
        img: "/mini1.jpg",
        initial: 1,
    },
    {
        id:2,
        title: "Enano Guerrero",
        price: 800,
        stock: 5,
        category: "heroes",
        detail: "Miniatura en resina, base de 30mm",
        img: "/mini2.jpg",
        initial: 1,
    },
    {
        id:3,
        title: "Bárbaro Semi-Orco",
        price: 800,
        stock: 5,
        category: "heroes",
        detail: "Miniatura en resina, base de 30mm",
        img: "/mini3.jpg",
        initial: 1,
    },
    {
        id:4,
        title: "Guerrero Dracónico",
        price: 800,
        stock: 5,
        category: "heroes",
        detail: "Miniatura en resina, base de 30mm",
        img: "/mini4.jpg",
        initial: 1,
    },
    {
        id:5,
        title: "Humano Hechicero",
        price: 800,
        stock: 5,
        category: "heroes",
        detail: "Miniatura en resina, base de 30mm",
        img: "/mini5.jpg",
        initial: 1,
    },
    {
        id:6,
        title: "Pícaro Elfo",
        price: 800,
        stock: 5,
        category: "heroes",
        detail: "Miniatura en resina, base de 30mm",
        img: "/mini6.jpg",
        initial: 1,
    },
    {
        id:7,
        title: "Ettin",
        price: 1200,
        stock: 5,
        category: "enemigos",
        detail: "Miniatura en resina, base de 50mm",
        img: "/mini7.jpg",
        initial: 1,
    },
    {
        id:8,
        title: "Quimera",
        price: 1200,
        stock: 5,
        category: "enemigos",
        detail: "Miniatura en resina, base de 50mm",
        img: "/mini8.jpg",
        initial: 1,
    },
    {
        id:9,
        title: "Gárgola",
        price: 1000,
        stock: 5,
        category: "enemigos",
        detail: "Miniatura en resina, base de 40mm",
        img: "/mini9.jpg",
        initial: 1,
    },
    {
        id:10,
        title: "Wargo",
        price: 800,
        stock: 5,
        category: "enemigos",
        detail: "Miniatura en resina, base de 30mm",
        img: "/mini10.jpg",
        initial: 1,
    },
    {
        id:11,
        title: "Cofre",
        price: 700,
        stock: 5,
        category: "terreno",
        detail: "Miniatura en resina",
        img: "/mini11.jpg",
        initial: 1,
    },
    {
        id:12,
        title: "Escritorio de mago",
        price: 800,
        stock: 5,
        category: "terreno",
        detail: "Miniatura en resina",
        img: "/mini12.jpg",
        initial: 1,
    },
    {
        id:13,
        title: "Caldero",
        price: 700,
        stock: 5,
        category: "terreno",
        detail: "Miniatura en resina",
        img: "/mini13.jpg",
        initial: 1,
    },
    {
        id:14,
        title: "Pack de Heroes",
        price: 3000,
        stock: 5,
        category: "promociones",
        detail: "4 Miniaturas en resina, base de 30mm",
        img: "/mini14.jpg",
        initial: 1,
    },
]


/*
export default function getItems(){
    return new Promise(  (resolve, reject) =>{
        setTimeout( () =>{
            resolve(data)
        }, 1000 )
    })
}


export function getItemsByCategory(cat){
    return new Promise((resolve, reject) => {

        let itemFind = data.filter((item) => {
            return item.category === cat;
        });
        setTimeout( () =>{
        console.log("encontramos:", itemFind)
        if (itemFind) resolve(itemFind);
        else reject(new Error("item no encontrado"));
        }, 1000 )
    });
}


export function getSingleItem(idItem){
    return new Promise(  (resolve, reject) =>{
        setTimeout( () =>{
            let itemFind = data.find((item) => {
                return item.id === Number(idItem)
            });
            if (itemFind) resolve(itemFind);
            else reject(new Error("item no encontrado"));
            }, 1000 );
    });
}
*/
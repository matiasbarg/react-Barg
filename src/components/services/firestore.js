
import { initializeApp } from "firebase/app";
import {
    getFirestore, 
    collection, 
    getDocs, doc, 
    getDoc, 
    query, 
    where,
    addDoc
} from "firebase/firestore"


const firebaseConfig = {
apiKey: "AIzaSyC79zDyfiya8DfLumV7abyKLJ1KJYlNYpU",
authDomain: "reactbarg.firebaseapp.com",
projectId: "reactbarg",
storageBucket: "reactbarg.appspot.com",
messagingSenderId: "962789872883",
appId: "1:962789872883:web:32a861c037e5197dd69386"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems(){
    const miCollection = collection(firestore, "miniaturas");
    let respuesta =  await getDocs(miCollection);

    let dataDocs = respuesta.docs.map((documento)  => {
        let docFormateado = { ...documento.data(), id: documento.id}
        return docFormateado;
    });
    return dataDocs;
}



export async function getSingleItem(idParams){
    try{
    const docRef = doc(firestore, "miniaturas", idParams);
    const docSnapshot = await getDoc(docRef);
    return {...docSnapshot.data(), id: docSnapshot.id};
} catch(error){
    console.log(error);
    return(
        <div className="loadError">Error Cargando los datos</div>
    )

}
}

export async function getItemsByCategory(catParams){
    const collectionRef = collection(firestore, "miniaturas");
    const queryCategory = query(
        collectionRef, 
        where("category", "==", catParams));

    const respuesta = await getDocs(queryCategory);


    let dataDocs = respuesta.docs.map((documento)  => {
        let docFormateado = { ...documento.data(), id: documento.id}
        return docFormateado;
});

return dataDocs;
}


export async function createBuyOrder(orderData){
    const miCollection = collection(firestore, "orders");
    let respuesta = await addDoc(miCollection, orderData);
    return respuesta.id;
}


export async function exportDataToFirestore(){
    const data = [
        {
            title: "Pícaro Humano",
            price: 800,
            stock: 5,
            category: "heroes",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini1.jpg",
            initial: 1,
        },
        {
            title: "Enano Guerrero",
            price: 800,
            stock: 5,
            category: "heroes",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini2.jpg",
            initial: 1,
            offer: true
        },
        {
            title: "Bárbaro Semi-Orco",
            price: 800,
            stock: 5,
            category: "heroes",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini3.jpg",
            initial: 1,
        },
        {
            title: "Guerrero Dracónico",
            price: 800,
            stock: 5,
            category: "heroes",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini4.jpg",
            initial: 1,
        },
        {
            title: "Humano Hechicero",
            price: 800,
            stock: 5,
            category: "heroes",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini5.jpg",
            initial: 1,
        },
        {
            title: "Pícaro Elfo",
            price: 800,
            stock: 5,
            category: "heroes",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini6.jpg",
            initial: 1,
        },
        {
            title: "Ettin",
            price: 1200,
            stock: 5,
            category: "enemigos",
            detail: "Miniatura en resina, base de 50mm",
            img: "/mini7.jpg",
            initial: 1,
        },
        {
            title: "Quimera",
            price: 1200,
            stock: 5,
            category: "enemigos",
            detail: "Miniatura en resina, base de 50mm",
            img: "/mini8.jpg",
            initial: 1,
        },
        {
            title: "Gárgola",
            price: 1000,
            stock: 5,
            category: "enemigos",
            detail: "Miniatura en resina, base de 40mm",
            img: "/mini9.jpg",
            initial: 1,
        },
        {
            title: "lobo",
            price: 800,
            stock: 5,
            category: "enemigos",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini10.jpg",
            initial: 1,
        },
        {
            title: "Cofre",
            price: 700,
            stock: 5,
            category: "terreno",
            detail: "Miniatura en resina",
            img: "/mini11.jpg",
            initial: 1,
        },
        {
            title: "Escritorio de mago",
            price: 800,
            stock: 5,
            category: "terreno",
            detail: "Miniatura en resina",
            img: "/mini12.jpg",
            initial: 1,
        },
        {
            title: "Caldero",
            price: 700,
            stock: 5,
            category: "terreno",
            detail: "Miniatura en resina",
            img: "/mini13.jpg",
            initial: 1,
        },
        {
            title: "Pack de Heroes",
            price: 3000,
            stock: 5,
            category: "promociones",
            detail: "4 Miniaturas en resina, base de 30mm",
            img: "/mini14.jpg",
            initial: 1,
            offer: true
        },
        {
            title: "Araña Gigante",
            price: 2000,
            stock: 5,
            category: "enemigos",
            detail: "Miniatura en resina, base de 60mm",
            img: "/mini15.jpg",
            initial: 1,
        },
        {
            title: "Arquero Goblin",
            price: 800,
            stock: 5,
            category: "enemigos",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini16.jpg",
            initial: 1,
        },
        {
            title: "Soldado Goblin",
            price: 800,
            stock: 5,
            category: "enemigos",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini17.jpg",
            initial: 1,
        },
        {
            title: "Lancero Goblin",
            price: 800,
            stock: 5,
            category: "enemigos",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini18.jpg",
            initial: 1,
        },
        {
            title: "Jinete Goblin",
            price: 1000,
            stock: 5,
            category: "enemigos",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini19.jpg",
            initial: 1,
        },
        {
            title: "Cazador de Vampiros",
            price: 800,
            stock: 5,
            category: "heroes",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini20.jpg",
            initial: 1,
        },
        {
            title: "Conde Vampiro",
            price: 900,
            stock: 5,
            category: "enemigos",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini21.jpg",
            initial: 1,
        },
        {
            title: "Espectro",
            price: 800,
            stock: 5,
            category: "enemigos",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini22.jpg",
            initial: 1,
        },
        {
            title: "Golem de Piedra",
            price: 1000,
            stock: 5,
            category: "enemigos",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini23.jpg",
            initial: 1,
        },
        {
            title: "Mago Loco",
            price: 1000,
            stock: 5,
            category: "enemigos",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini24.jpg",
            initial: 1,
        },
        {
            title: "Hechicera Elfa",
            price: 900,
            stock: 5,
            category: "heroes",
            detail: "Miniatura en resina, base de 30mm",
            img: "/mini25.jpg",
            initial: 1,
        },
        {
            title: "Pack de Goblins",
            price: 3000,
            stock: 5,
            category: "promociones",
            detail: "Miniaturas en resina, base de 30mm",
            img: "/mini26.jpg",
            initial: 1,
        },
        {
            title: "Mausoleo",
            price: 3000,
            stock: 5,
            category: "terreno",
            detail: "Miniatura en resina",
            img: "/mini27.jpg",
            initial: 1,
        },
        {
            title: "Columnas",
            price: 2000,
            stock: 5,
            category: "terreno",
            detail: "Miniatura en resina",
            img: "/mini28.jpg",
            initial: 1,
        },
    ];
    const miCollection = collection(firestore, "miniaturas");


    for(let item of data){
        await addDoc(miCollection, item);
    }
}


export default firestore;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyC79zDyfiya8DfLumV7abyKLJ1KJYlNYpU",
authDomain: "reactbarg.firebaseapp.com",
projectId: "reactbarg",
storageBucket: "reactbarg.appspot.com",
messagingSenderId: "962789872883",
appId: "1:962789872883:web:32a861c037e5197dd69386"
};

// Initialize Firebase
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
export default firestore;
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getFirestore ,collection ,getDocs ,doc , getDoc , query ,where} from "firebase/firestore"
const firebaseConfig = { 
  apiKey: "AIzaSyBMmpFz_8-1FapcgNimoRsXP8rixnmzcII",
  authDomain: "reactecomerse-2d301.firebaseapp.com",
  projectId: "reactecomerse-2d301",
  storageBucket: "reactecomerse-2d301.appspot.com",
  messagingSenderId: "869377549441",
  appId: "1:869377549441:web:13535d0443ddd7b030d980",
  measurementId: "G-15R4LEMMF8"
}; //este header es el que identifica a nuestra base de datos

const app = initializeApp(firebaseConfig); // inicializamos firebase
const get = getFirestore(app) //inicializamos nuestra base de datos de  firebase
export async function getItems() {
  const coleccionProdRef = collection(get, "products"); //hacemos referecia(identificamos una coleccion completa)
 /*  const queryCat = query(coleccionProdRef, where("categoria", "==", categoria));
  if(queryCat) {
    const documentSnap = await getDoc(queryCat);
    const documentData = documentSnap.docs.map((docs) => {
      return {
        ...docs.data(), // aca lo que hace es meter todo lo de docs.data(que el spreed no lo mete como objeto,deja las propiedades sueltas) y como es un map es por cada,por lo que se ira repitiendo
        id: docs.id, // aca crea una nueva propiedad llamda "id", todo esto se retorna en un nuevo objeto
      };
    });
    return documentData;
  }else { */
    const documentSnap = await getDocs(coleccionProdRef); //obtenemos todos los documentos de esa coleccion(snap == obetener)
    const documentsData = documentSnap.docs.map((docs) => {
      return {
        ...docs.data(),
        id: docs.id,
      };
    });
    return documentsData;
 /*  } */
}
export async function capturarID(id){
  const documentRef = doc(get, "productos",id) // hacemos referencia al documento, le pasamos como parametro la base de datos, el nombre dela coleccion y el id(propio de la funcion)
  const documentSnap = await getDoc(documentRef) //leo el documento
  return{
    ...documentSnap.data(),
    id:documentSnap.id
  } // retornamos el resolve
}
export async function CapturarCategoria(categoria){
  const collectionRef = collection(get,"products")
  const queryCat = query(collectionRef , where("categoria" ,"==", categoria))
  const documentSnap = await getDoc(queryCat);
    const documentData = documentSnap.docs.map((docs) => {
      return {
        ...docs.data(), // aca lo que hace es meter todo lo de docs.data(que el spreed no lo mete como objeto,deja las propiedades sueltas) y como es un map es por cada,por lo que se ira repitiendo
        id: docs.id, // aca crea una nueva propiedad llamda "id", todo esto se retorna en un nuevo objeto
      };
    });
    return documentData;
}
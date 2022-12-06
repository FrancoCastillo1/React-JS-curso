import { initializeApp } from "firebase/app";
import { getFirestore ,collection ,getDocs ,doc , getDoc , query ,where, addDoc, } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDuoSjiCyW4_zhFAMj5RQW-cX_yafBaDOI",
  authDomain: "reactecomerse-d0f59.firebaseapp.com",
  projectId: "reactecomerse-d0f59",
  storageBucket: "reactecomerse-d0f59.appspot.com",
  messagingSenderId: "957738109252",
  appId: "1:957738109252:web:f957463eeaa1e9bf24ef11",
  measurementId: "G-5XEB7DXFFZ"
};
const app = initializeApp(firebaseConfig); 
const get = getFirestore(app) 
export async function getItems(categoria){
  const coleccionProdRef = collection(get, "products"); //hacemos referecia(identificamos una coleccion completa)
  const queryCat = query(coleccionProdRef, where("categoria", "==", categoria));
  if(queryCat == true) {
    const documentSnap = await getDocs(queryCat);
    const documentData = documentSnap.docs.map((docs) => {
      return {
        ...docs.data(),
        id: docs.id,
      };
    });
    return documentData;
  }else {
    const documentSnap = await getDocs(coleccionProdRef); 
    const documentsData = documentSnap.docs.map((docs) => {
      return {
        ...docs.data(),
        id: docs.id,
      };
    });
    return documentsData;
  }
}
export async function capturarID(id){
  const documentRef = doc(get, "products",id) 
  const documentSnap = await getDoc(documentRef) 
  return{
    ...documentSnap.data(),
    id:documentSnap.id
  }
}
export async function createOrder(idOrder){
  const coleccionOrder = collection(get , "order")
  const docOrder = await addDoc(coleccionOrder,idOrder)
  await addDoc(coleccionOrder,{orderId : docOrder.id})
  return docOrder.id
}
export  async function ordenExistente(id){
  const coleccionOrder = collection(get , "order")
  const queryID = query(coleccionOrder, where("orderID", "==", id));
  if(queryID){
    const leerDoc = await getDoc(queryID)
    return{
      ...leerDoc.data(),
    }
  }
}
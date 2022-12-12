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
export async function getItems(){
  const coleccionProdRef = collection(get, "products");
  const documentSnap = await getDocs(coleccionProdRef);
  const documentsData = documentSnap.docs.map((docs) => {
      return {
        ...docs.data(),
        id: docs.id,
      };
    });
    return documentsData;
}
export async function capturarCategoria(categoria){
  const coleccionProdRef = collection(get, "products");
  const queryCat = query(coleccionProdRef, where("categoria", "==", categoria));
  const documentSnap = await getDocs(queryCat);
  const documentsData = documentSnap.docs.map((docs) => {
    return {
      ...docs.data(),
      id: docs.id,
    };
  });
  return documentsData;
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
  return docOrder.id
}
export  async function ordenExistente(){
  const coleccionOrder = collection(get , "order")
  const documentSnap = await  getDocs(coleccionOrder)
  const documentData = documentSnap.docs.map((docs) => {
    return {
      ...docs.data(),
      id: docs.id,
    };
  });
  return documentData
}
export async function mandarUser(user){
  const coleccionUser =collection(get,"Users")
  const leerDato = await getDocs(coleccionUser)
  const averiguar = leerDato.docs.some((dato)=> dato.data().email == user.email)
  if(averiguar){
    return false
  }else{
    await addDoc(coleccionUser,user)
    return true
  }
}
import './App.css';
import Header from './components/header/Header';
import Main from './components/mainGeneral/Main';
import ItemListContainer from './components/mainGeneral/ItemListContainer';
import Footer from './components/Footer/Footer';
import ErrorURL from './components/mainGeneral/Error404';
import ItemDetailContainer from './components/mainGeneral/SectionProductos/ItemDetailContainer';
import ItemCategory from "./components/mainGeneral/SectionProductos/ItemCategory"
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { CartContext } from './context/cartContext';
import CartView from "./components/header/CartView"
import Gracias from './components/mainGeneral/gracias/Gracias';
import { UserContext } from './context/userContext';
import FormContainer from './components/mainGeneral/Form/FormContainer';
import { RutaProtegida } from './components/ProtectedRoute/RutaProtegida';
const App = () => {
  return (
    <div className="app">
      <UserContext>
      <CartContext>
        <BrowserRouter>
        <Header/>
          <Routes>
          <Route path='/' element={<FormContainer/>}/>  
          <Route element={<RutaProtegida/>}> 
            <Route path="/home" element={<Main />}/>
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="*" element={<ErrorURL img="https://robohash.org/16" error="Error 404" causa="Tal vez la página no exista, asegurate de a ver indroducido bien la URL"/>} />
            <Route path="/products/detalles/:id" element={<ItemDetailContainer />}/>
            <Route
              path="/products/categoria/:categoria"
              element={<ItemCategory />}
             />
          <Route path="/cart" element={<CartView/>} />
          </Route>
          <Route path='/gracias/:id'element={<Gracias/>}/>
          </Routes>
         <Footer/>
        </BrowserRouter>
      </CartContext>
      </UserContext>
    </div>
  );
}
export default App;

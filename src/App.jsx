/* import logo from './logo.svg'; */
import './App.css';
import Header from './components/header/Header';
import Main from './components/mainGeneral/Main';
import ItemListContainer from './components/mainGeneral/ItemListContainer';
import Footer from './components/footer/footer';
import ErrorURL from './components/mainGeneral/Error404';
import ItemDetailContainer from './components/mainGeneral/SectionProductos/ItemDetailContainer';
import ItemCategory from "./components/mainGeneral/SectionProductos/ItemCategory"
import { BrowserRouter,Routes,Route} from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
     <div className='app'>
     <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/products' element={<ItemListContainer/>}/>
        <Route path="*" element={<ErrorURL/>}/>
        <Route path='/products/detalles/:id' element={<ItemDetailContainer/>}/>
     {/*    <Route path="/products/category/:Celular" element={<ItemCelular/>}/>  esto es totalemente inncesario de usar,ya que si quiero filtrar por categoria le pasaria"celular" como parámetro y no como una ruta propia.Más abajo aparece que todos los elementos que puedne ir vatriando con :*/}
        <Route path="/products/categoria/:categoria" element={<ItemCategory/>}/>
       </Routes>
      <Footer/>
     </div>
    </BrowserRouter>
  );
}
export default App;

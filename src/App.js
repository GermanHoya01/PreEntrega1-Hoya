import Footer from "./componentes/footer";
import NavBar from "./componentes/NavBar";
import Main from "./componentes/main";
import ItemListContainer from "./componentes/ItemListContainer";  

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola, ¡bienvenido a mi tienda en línea!" />
      <Main/>
      <Footer />
    </>
  )
}

export default App;
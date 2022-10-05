import logo from './logo.svg';
import './App.css';
import ItemCount from './Components/ItemCount';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <>
      {/* <ItemCount /> */}
      <Navbar />
      <ItemListContainer title="Nuestros productos" />
    </>
  );
}

export default App;

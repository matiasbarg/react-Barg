import './App.css';
import NavBar from './components/navbar/NavBar';
//import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <div className="App">    
            <header>
            <NavBar/>
            </header>
            {/*<ItemListContainer/>*/}
            <ItemDetailContainer/>
    </div>
  );
}

export default App;



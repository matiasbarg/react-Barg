import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">    
            <header>
              <NavBar/>
            </header>
            <ItemListContainer/>
    </div>
  );
}




export default App;



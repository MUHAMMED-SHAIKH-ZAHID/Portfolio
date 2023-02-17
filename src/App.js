import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';


function App() {
  return (
    <div className="App">
     <Header />
     <main className='main' >
      <Home />
     </main>
    </div>
  );
}

export default App;

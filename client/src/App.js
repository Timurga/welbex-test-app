import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

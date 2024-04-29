import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCanvas from './components/navbar/Navbar';

//react-router
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavbarCanvas />
                <Pages />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

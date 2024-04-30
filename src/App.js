import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCanvas from './components/navbar/Navbar';

//react-router
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import Footer from './components/footer/Footer';
import { useState } from 'react';

function App() {
    const [price, setPrice] = useState(0);
    const [places, setPlaces] = useState([]);

    return (
        <div className="App">
            <BrowserRouter>
                <NavbarCanvas />
                <Pages
                    price={price}
                    setPrice={setPrice}
                    places={places}
                    setPlaces={setPlaces}
                />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

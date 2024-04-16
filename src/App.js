import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCanvas from './components/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <NavbarCanvas />
            <Home />
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;

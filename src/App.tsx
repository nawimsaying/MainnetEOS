import AboutUs from './components/AboutUs';
import AboutEOS from './components/AboutEOS';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';

function App() {
    return (
        <>
            <img src='./abouteos_bg.png' style={{ position: 'fixed', zIndex: '-5', width: '100%', height: '100%', objectFit: 'cover' }} />

            <Header/>
            <Main/>
            <AboutUs/>
            <AboutEOS/>
            <WhyUs/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App;

import './App.css';
import Banner from './components/banner/Banner';
import Contact from './components/contact/Contact';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footer/FooterBottom';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Project';
import Resume from "./components/resume/Resume";

export default function App() {
    return (
        <div className="w-full h-auto bg-bodyColor text-lightText">
            <div className='max-w-screen-2xl mx-auto px-16'>
                <Navbar />
                <Banner />
                <Features />
                <Projects />
                <Resume />
                <Contact />
                <Footer />
                <FooterBottom />
            </div>
        </div>
    )
}
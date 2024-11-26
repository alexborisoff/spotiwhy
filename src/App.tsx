import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';
import './styles/App.scss';

export const App = () => {
    return (
        <div className="page_container">
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
};

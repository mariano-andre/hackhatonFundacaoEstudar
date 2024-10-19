import { Header } from './landingPage/Header/Header';
import Banner from './landingPage/Banner/Banner';
import Container from './landingPage/Container/Container';
import './App.css';
import { primaryBanner, secondaryBanner } from './landingPage/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Banner 
          title="RETRATAÇÃO DA FOME"
          img={primaryBanner}
          />
      </Container>
    </div>
  );
}

export default App;

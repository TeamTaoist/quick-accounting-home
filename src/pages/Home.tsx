import Contact from "../components/Contact";
import Benefits from "../components/home/Benefits";
import HomeHeader from "../components/home/HomeHeader";
import KeyFeatures from "../components/home/KeyFeatures";
import Services from "../components/home/Services";
import { Container } from "../style/global.style";

const Home = () => {
  return (
    <Container>
      <HomeHeader />
      <Services />
      <KeyFeatures />
      <Benefits />
      <Contact />
    </Container>
  );
};

export default Home;

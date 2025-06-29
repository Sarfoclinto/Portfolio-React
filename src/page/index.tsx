import Background from "../components/background";
import Container from "../components/Container";
import Certificate from "../components/sections/certificates";
import Contact from "../components/sections/contact";
import Experience from "../components/sections/experience";
import Header from "../components/sections/header";
import Hero from "../components/sections/hero";
import Overview from "../components/sections/overview";
import TechStack from "../components/sections/Stack";

const Page = () => {
  return (
    <main className="relative h-dvh w-dvw overflow-auto no-scrollbar">
      <Background />
      <Header />
      <Container>
        <Hero />
        <Overview />
        <TechStack />
        <Experience />
        <Certificate />
        <Contact />
      </Container>
    </main>
  );
};
export default Page;

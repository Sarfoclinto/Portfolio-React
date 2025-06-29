import Background from "../components/background";
import Container from "../components/Container";
import Header from "../components/sections/header";
import Hero from "../components/sections/hero";
import Overview from "../components/sections/overview";

const Page = () => {
  return (
    <main className="relative h-dvh w-dvw overflow-auto no-scrollbar">
      <Background />
      <Header />
      <Container>
        <Hero />
        <Overview />
      </Container>
    </main>
  );
};
export default Page;

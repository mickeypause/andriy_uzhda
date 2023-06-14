import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/Projects";
import MyForm from "./components/MyForm";
import Education from "./components/Education";

function App() {
  return (
   <ChakraProvider>
        <main>
        <Header />
        <AboutMe />
        <ProjectsSection />
        <Education/>
        <MyForm />
        </main>
    </ChakraProvider>
  );
}

export default App;

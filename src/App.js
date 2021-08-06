import Title from './components/Title'
import Background from './components/Background.js'
import Projects from './components/Projects.js'
import Skills from './components/SkillSet.js'
import MyMotos from "./components/MyMotos";
import Connect from "./components/Connect";
import Aos from 'aos';
import 'aos/dist/aos.css'
import {useEffect} from "react";

function App() {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  return (
    <div>
      <Title />
      <div data-aos='fade-up'>
        <Background />
      </div>
      <div data-aos='fade-up'>
        <Projects />
      </div>
      <div data-aos='fade-up'>
        <Skills />
      </div>
        <div data-aos='fade-up'>
            <MyMotos />
        </div>
        <div data-aos='fade-up'>
            <Connect />
        </div>
    </div>
  );
}

export default App;

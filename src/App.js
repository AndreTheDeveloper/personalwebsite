import Title from './components/Title'
import Background from './components/Background.js'
import Projects from './components/Projects.js'
import Skills from './components/SkillSet.js'
import Aos from 'aos';
import 'aos/dist/aos.css'
import {useEffect} from "react";

function App() {
  useEffect(() => {
    Aos.init({duration: 2000});
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
    </div>
  );
}

export default App;

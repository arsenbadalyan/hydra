
import './App.css'
import ContactInfoBar from './components/ContactInfoBar/ContactInfoBar.js';
import Header from './components/Header/Header.js'
import InfoSection from './components/InfoSection/InfoSection.js';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer.js';

function App() {
  return (
    <>
      <Header />
      <InfoSection />
      <ContactInfoBar />
      <QuestionAnswer
          answer="Build with Hydra to unlock the captivating power of virtual reality. Elevate your website into an immersive journey that mesmerizes your audience. With Hydra, you're not just creating a website – you're crafting a unique adventure that engages, astonishes, and leaves a lasting impact. Choose Hydra and redefine what's possible in the digital realm."
          questionTop="WHY BUILD"
          questionBottom="WITH HYDRA" />
    </>
  )
}

export default App;
import { useState } from 'react'
import Slide from './components/Slide'
import './App.css'

const slideContent = [
  "Slide d'accueil",
  "Slide interne",
  "Slide conclusion"
];
const App = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = () => {
    setCurrentSlide(currentSlide + 1);
  };
  const handlePrevious = () => {
    setCurrentSlide(currentSlide - 1);
  };
  return (
    <>
<section>
<div className='presentation'>
        <div
          className='presentation-background'>
        </div>
        <div className='presentation-content'>
        {slideContent.map((content,index) => (
          <Slide key={index} 
          index = {index}
          currentSlide = {currentSlide} 
          content = {content} />
        ))}
        </div >
      </div>
</section>

      <div className='buttons'>
        <button onClick={handlePrevious} disabled={currentSlide === 0} className='btnP'>Previous</button>
        <button onClick={handleNext} disabled={currentSlide === slideContent.length-1} className='btnN'>Next</button>
        </div>
        
      </>
    
  )
}

export default App;

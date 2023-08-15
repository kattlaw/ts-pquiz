import { useState } from 'react';
import './App.css';
import Question from './Question.js';
import taylor from './img/white-logo.png';
import erasPics from './img/eras-pics.png';
import nineTeen from './img/1989-logo.png';
import redLogo from './img/red-album.png';
import folklore from './img/folklore.png';
import evermore from './img/evermore.png';
import lover from './img/lover-pink.png';
import reputation from './img/replogo.png';
import midnights from './img/midnights.png';
import speaknow from './img/speaknow.png';
import fearless from './img/fearless .png';

function App() {

  const [showStart, setShowStart] = useState(false);

  function handleStartClick() {
    setShowStart(!showStart);
  }

  return (
    <div className="App">
      <div className="name-image -rotate-12 -mb-14 mb-5 w-[250px] ml-4">
        <img src={taylor} className="mt-10 mb-6" alt="taylor swift album logo"></img>
      </div>
      <div className="flex justify-center">
      <img src={reputation} className="w-[200px] mt-[-7rem] mb-10" alt="reputation album logo"></img>
     </div>
      <div className="relative">
      <img src={nineTeen} className="w-[150px] absolute top-0 right-0 mt-[-8rem] mr-5" alt="1989 album print"></img>
     </div>
     <header className="title text-8xl font-bold py-2 font-['Bodoni_Moda'] font-semibold uppercase">
      The Eras Tour
     </header>
     <h1 className="text-4xl font-bold py-2 font-['Bodoni_Moda'] font-semibold uppercase">Personality Test</h1>
    <div className="">
    </div>
    <div className="relative">
      <img src={speaknow} className="w-[200px] absolute top-0 left-0 ml-5 mt-5" alt="fearless album print"></img>
     </div>
    <div className="relative">
      <img src={fearless} className="w-[200px] absolute top-0 right-0 mr-5 mt-5" alt="speaknow album print"></img>
     </div>
      <button className="p-16 text-xl font-['Bodoni_Moda'] font-semibold underline decoration-solid" onClick={handleStartClick}>
          {showStart ? '' : ''}
        Are You Ready For It...?
     </button>
     {showStart && <Question />}
     <div className="relative">
      <img src={evermore} className="absolute inset-y-0 left-0 w-[200px] ml-4 mt-[6rem]" alt="evermore album logo"></img>
     </div>
     <div className="relative">
      <img src={lover} className="absolute inset-y-0 right-0 w-[200px] mr-4 mt-[6rem]" alt="lover album logo"></img>
     </div>
     <div className="flex justify-center p-5">
      <img src={erasPics} className="w-[600px] object-cover rounded" alt="eras tour poster cover"></img>
     </div>
     <div className="relative">
      <img src={redLogo} className="absolute bottom-0 left-0 w-[130px] ml-4 mb-4" alt="red album logo"></img>
     </div>
     <div className="relative">
      <img src={folklore} className="absolute bottom-0 right-0 w-[170px] mr-4 mb-4" alt="folklore album logo"></img>
     </div>
     <div className="flex justify-center">
      <img src={midnights} className="w-[230px] mb-4 mt-4" alt="midnights album logo"></img>
     </div>

    </div>
  );
}

export default App;


import { Routes, Route } from 'react-router-dom';
import './Main.css';
import Question from './components/Question.js';
import Main from './components/Main.js';


function App() {

  
  //for clicked links to scroll to top position of each page component on load
  

  return (
    <div>
    
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/Questions" element={<Question />} />
      </Routes>
    
    </div>
  );
}

 {/*} const [showStart, setShowStart] = useState(false);


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
     <header className="title text-6xl font-bold py-2 font-['Bodoni_Moda'] font-semibold uppercase">
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
    <Link to='/questions'></Link>
     
      <button className="p-16 text-3xl font-['IM_Fell_DW_Pica'] " onClick={handleStartClick}> 
          {showStart ? '' : '(start)' } 
  
     </button>
     {showStart && <Question /> }
  
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
  */}
  
export default App;

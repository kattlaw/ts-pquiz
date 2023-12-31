import { Link } from 'react-router-dom';
import '../index.css';
import taylor from '../img/white-logo.png';
import erasPics from '../img/eras-pics.png';
import nineTeen from '../img/1989-logo.png';
import redLogo from '../img/red-album.png';
import folklore from '../img/folklore.png';
import evermore from '../img/evermore.png';
import lover from '../img/lover-pink.png';
import reputation from '../img/replogo.png';
import midnights from '../img/midnights.png';
import speaknow from '../img/speaknow.png';
import fearless from '../img/fearless .png';
import ready from '../img/readyforit.png';

const Main = () => {

   // const [showStart, setShowStart] = useState(false);
  
  
  //  function handleStartClick() {
     // setShowStart(!showStart);
  //  }
  
  
    return (
      
      <div className="Main">
        <div className="name-image -rotate-12 -mb-14 mb-5 w-[250px] ml-4">
          <img src={taylor} className="mt-10 mb-6" alt="taylor swift album logo"></img>
        </div>
        <div className="flex justify-center">
        <img src={reputation} className="w-[180px] -mt-[6rem] mb-10" alt="reputation album logo"></img>
       </div>
        <div className="relative">
        <img src={nineTeen} className="w-[150px] absolute top-0 right-0 mt-[-8rem] mr-5" alt="1989 album print"></img>
       </div>
       <header className="title text-6xl font-bold -mt-8 font-['Bodoni_Moda'] font-semibold uppercase">
        The Eras Tour
       </header>
       <h1 className="text-4xl font-bold py-2 font-['Bodoni_Moda'] font-semibold uppercase">Personality Test</h1>
       <div className="flex justify-center">
        <img src={ready} className="w-[350px] mt-[5rem]"></img>
       </div>
     
      <div className="relative">
        <img src={speaknow} className="w-[200px] absolute left-[7rem] ml-5 -mt-[6rem]" alt="speaknow album print"></img>
       </div>
      <div className="relative">
        <img src={fearless} className="w-[200px] absolute right-0 mr-[7rem] -mt-[5rem]" alt="fearless album print"></img>
       </div>

 
       
       <div className="p-16 text-2xl font-['IM_Fell_DW_Pica'] -mt-[4rem]">
     
      <Link to='/Questions'>(start)</Link>
      </div>
       
       {/*} <button className="p-16 text-3xl font-['IM_Fell_DW_Pica'] " onClick={handleStartClick}> 
            {showStart ? '' : '(start)' } 
    
       </button>
       {showStart && <Question /> }
    */}
       <div className="relative">
        <img src={evermore} className="absolute inset-y-0 left-[5rem] w-[200px] ml-4 mt-[6rem]" alt="evermore album logo"></img>
       </div>
       <div className="relative">
        <img src={lover} className="absolute inset-y-0 right-0 w-[200px] mr-[5rem] mt-[5rem]" alt="lover album logo"></img>
       </div>
       <div className="flex justify-center">
        <img src={erasPics} className="w-[600px] object-cover rounded" alt="eras tour poster cover"></img>
       </div>
       <div className="relative">
        <img src={redLogo} className="absolute bottom-0 left-4 w-[130px] ml-4 mb-4" alt="red album logo"></img>
       </div>
       <div className="relative">
        <img src={folklore} className="absolute bottom-0 right-0 w-[170px] mr-8 mb-4" alt="folklore album logo"></img>
       </div>
       <div className="flex justify-center">
        <img src={midnights} className="w-[230px] mb-4 mt-4" alt="midnights album logo"></img>
       </div>
      </div>
  
    );
  }

  export default Main;
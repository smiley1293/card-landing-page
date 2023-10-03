import { useEffect, useState } from 'react';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';
import Content from './components/Content/Content';


function App() {
  const [windowSize, setWindowSize] = useState(
    {
      width:undefined,
      height:undefined,
    }
  );

  const [isMobile, setMobile] = useState(false);
  useEffect(() =>{
    const handleSize = () =>{
      setWindowSize({
        width:window.innerWidth,
        height:window.innerHeight
      })
    };
    window.addEventListener('resize', handleSize)
    handleSize();
    return ()=>{
      window.removeEventListener('resize', handleSize)
    }
  },[]);

  useEffect(() =>{
    windowSize.width < 600 ? setMobile(true) : setMobile(false)
  },[windowSize])

  return (
    <div className="font-[Sora] overflow-y-auto overflow-x-hidden text-[13px] h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900  dark:to-purple-700 from-white to-pink-500 dark:text-white text-black !mobile:px-20">
      <NavBar isMobile = {isMobile} />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;

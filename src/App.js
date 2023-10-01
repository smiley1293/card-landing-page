
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';
import Content from './components/Content/Content';


function App() {
  return (
    <div className="font-[Sora] overflow-y-auto overflow-x-hidden text-[13px] h-screen px-4 py-8 bg-gradient-to-b from-purple-900  to-purple-700 text-white">
      <NavBar />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;

// import './App.css';
import Lottie from 'lottie-react';
import some_lottie from './animation_lkstr2k4.json'

function App() {
  return (
    <div className="flex justify-center items-center bg-blue-500 h-screen m-0">
      <Lottie animationData={some_lottie} loop={true} style={{ width: '40%' }} />
    </div>
  );
}

export default App;

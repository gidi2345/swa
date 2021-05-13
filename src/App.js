import logo from './logo.svg';
import './App.css';
import CountUp from 'react-countup';

function App() {
  return (
    <div>
      <div style={{display:'flex',position:'fixed', alignItems:'center',height:'10vh' ,width:'100%', background:'black'}}>
        <div style={{fontSize:'1.5rem', color: 'white', marginLeft:'3%'}}>
          #StandWithUs
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', height: '90vh', width:'100%',background: '#a30b18'}}>
        <div style={{fontSize:'2.3rem', color:'white', display:'flex', justifyContent:'center', alignItems:'center'}}>Missiles on Israel in the last 72 hours</div>
      <CountUp style={{fontSize: '10rem', color:'white'}} end={1300} />
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', height: '90vh', width:'100%',background: '#a30b18'}}>
        <div style={{fontSize:'2.3rem', color:'white', display:'flex', justifyContent:'center', alignItems:'center'}}>Missiles on America and Europe in the last 25 fucking years</div>
      <CountUp style={{fontSize: '10rem', color:'white'}} end={0} />
      </div>
    </div>
  );
}

export default App;

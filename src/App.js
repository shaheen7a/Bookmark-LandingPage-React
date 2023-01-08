import './App.css';
import Header from './components/Header/Header.jsx';
import SectionOne from './components/SectionOne/SectionOne.jsx';
import SectionTwo from './components/SectionTwo/SectionTwo.jsx';
import SectionThree from './components/SectionThree/SectionThree.jsx';
import SectionFour from './components/SectionFour/SectionFour.jsx';
import SectionFive from './components/SectionFive/SectionFive.jsx';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        
        <SectionOne />

        <SectionTwo />

        <SectionThree />

        <SectionFour />

        <SectionFive />


      </div>
    </div>
  );
}

export default App;

import '../App.css';
import Nav from '../components/Nav';
import User from '../components/User';
import Skills from "../components/Skills";
import FormExp from '../components/FormExp';

function Home() {
  return (
    <div className="App">
         <Nav/>
      <div className='container'>
        <div className='sidebar'>
          <User />
          <Skills />
        </div>
        <div className='main'>
          <FormExp />
        </div>
      </div>
    </div>
  );
}

export default Home;

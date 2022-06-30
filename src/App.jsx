import 'flowbite';
import SideBar from './components/Sidebar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-full h-full bg-transparent'>
    <SideBar></SideBar>
    <div className='mx-24 mt-12 flex flex-col gap-52'>

    <Home ></Home>
    <Services ></Services>
    <Contact></Contact>
    </div>
    <Footer></Footer>
    </div>

  );
}

export default App;

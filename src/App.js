import './App.scss';
import{Routes , Route} from 'react-router-dom';
import Layout from './components/Layouts'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/contact';
function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element = {<Layout/>}>
      <Route index element = {<Home/>}/>
      <Route path ="about" element = {<About/>}></Route>
      <Route path ="contact" element = {<Contact/>}></Route>
      </Route>
      </Routes>
    </>
  )
}

export default App;

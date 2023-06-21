import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    <Nav name="Word Counter"/>

    <div className='container'>
    <h1 className='mt-5'>Word Counter using React</h1>
    <TextForm label="Enter the text"/>
    </div>
    </>
  );
}

export default App;

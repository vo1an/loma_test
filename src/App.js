import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { EmailForm } from './EmailForm';

function App() {

    return ( <
        div className = "App" >
        <
        EmailForm / >
        <
        /div>

    );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Components/index.jsx'
import Gameover from './Components/Gameover.jsx';
import Gamewin from './Components/Gamewin.jsx'
import { Provider } from 'react-redux';
import store from './Redux/store';
import './styles.css';




const App = () => {
 
    return (
    <div> 
        <div className="container has-text-centered has-background-grey-light">
            <h1 className="title">Welcome to Minesweeper</h1>
            <Index />
        </div>
        <Gameover />
        <Gamewin />
    </div>
    )
    }


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('minesweeper') )


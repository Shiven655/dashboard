import ReactDOM from 'react-dom';
import App from './component/App';
import './stylesheet/style.css';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
//import '../node_modules/font-awesome/css/font-awesome.min.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);

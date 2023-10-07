import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter basename="/rent-cars-app"> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

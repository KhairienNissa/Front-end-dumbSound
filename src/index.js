
import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";
import './Style.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContextProvider } from './context/userContext';



import Favicon from "./assets/logoD.png";
const favicon = document.getElementById("idFavicon");
favicon.setAttribute("href", Favicon);

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={client}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <UserContextProvider>
//     <QueryClientProvider client={client}>
//       <Router>
//         <App />
//       </Router>
//     </QueryClientProvider>
//     </UserContextProvider>
//   </React.StrictMode>
  // document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
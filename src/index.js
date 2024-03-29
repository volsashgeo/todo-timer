import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// import ReactDOM from "react-dom";
import App from './components/app';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);

// createRoot(<App />, document.getElementById("root"));

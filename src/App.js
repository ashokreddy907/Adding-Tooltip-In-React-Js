import logo from './logo.svg';
import './App.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function App() {
  return (
    <div>
      <button className="top-right">Top Right</button>
      <button className="top-left">Top Left</button>
      <Tippy content="Hii,This Is Ashok">
      <button className="center">Center</button>
      </Tippy>
      <button className="bottom-right">Bottom Right</button>
      <button className="bottom-left">Bottom Left</button>
    </div>
  );
}

export default App;

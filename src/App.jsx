import './App.css';
import React from 'react';
import gsap from 'gsap';

function App() {
  const el = React.useRef();
  const q = gsap.utils.selector(el);

  return (
    <div className='App' ref={el}>
      <img src='/background.svg' alt='background' className='svg background' />
      <img src='/disk.svg' alt='disk' className='svg disk' />
      <img src='/bar.svg' alt='bar' className='svg bar' />
    </div>
  );
}

export default App;

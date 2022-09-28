import './App.css';
import React from 'react';
import gsap from 'gsap';

function App() {
  const el = React.useRef();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const q = gsap.utils.selector(el);
  const tlPlay = React.useRef();
  const tlPause = React.useRef();

  const handleClick = () => {
    if (!isPlaying) {
      tlPause.current.pause();
      tlPlay.current.restart();
      setIsPlaying(true);
    } else {
      tlPlay.current.pause();
      tlPause.current.restart();
      setIsPlaying(false);
    }
  };

  React.useEffect(() => {
    gsap.set(q('.disk'), { transformOrigin: '409px 497px', x: 40 });
    gsap.set(q('.bar'), { transformOrigin: '834px 182px', y: 110, x: -120 });

    tlPlay.current = gsap
      .timeline()
      .to(q('.bar'), { duration: 1, rotation: 30 })
      .to(q('.disk'), {
        duration: 2,
        rotation: 360,
        repeat: -1,
        ease: 'linear',
      })
      .pause();

    tlPause.current = gsap
      .timeline()
      .to(q('.bar'), { duration: 1, rotation: 0 })
      .pause();
  }, []);

  return (
    <div className='App' ref={el}>
      <img src='/background.svg' alt='background' className='svg background' />
      <img src='/disk.svg' alt='disk' className='svg disk' />
      <img src='/bar.svg' alt='bar' className='svg bar' />
      <button onClick={handleClick} className='btn'>
        Play
      </button>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function Voice() {
  const [listening, setListening] = useState(false);
  const [text, setText] = useState('');

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';

  recognition.onstart = () => {
    setListening(true);
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setText(transcript);
  };

  recognition.onend = () => {
    setListening(false);
  };

  const handleListen = () => {
    if (listening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  return (
    <div>
      <button onClick={handleListen}>{listening ? 'Stop Listening' : 'Start Listening'}</button>
      <p className='bg-white text-red-600 font-bold text-[22px]'>{text}</p>
    </div>
  );
}

export default Voice;

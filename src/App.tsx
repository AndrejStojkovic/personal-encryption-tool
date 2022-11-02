import React, { useEffect, useState } from 'react';
import Cipher from './Cipher';

function App() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, [])

  return (
    <div className='App w-full'>
      <div className='flex flex-col items-center gap-4 max-w-screen-sm mx-auto container'>
        <div className='text-2xl font-semibold p-2'>Personal Encryption Tool</div>

        <Cipher />

        <div className='mt-2'>
          <button className='text-black bg-gray-200 hover:bg-gray-300 focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2'>How-To and Help</button>
        </div>
      </div>

      <div id="footer" className="fixed bottom-0 w-full p-4 text-center mt-4 border-t-2">
        Copyright &copy; <span id="year">{year}</span> - <a href="https://github.com/AndrejStojkovic" className="hover:text-neutral-700 underline">Andrej Stojkovikj</a>
      </div>
    </div>
  );
}

export default App;

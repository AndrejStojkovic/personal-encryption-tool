import React, { useState } from 'react';

const Cipher = () => {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [result, setResult] = useState('');

  const cipher = async (type: number) => {
    setResult('');
    let temp: string[] = [...message];
    let res: string = '';
    console.log(temp);

    let sum = 0;

    for(let i = 0; i < key.length; i++) {
      const letter = key[i].toLowerCase();
      if(letter < 'a' || letter > 'z') { continue; }
      sum += letter.charCodeAt(0) - 96;
    }

    console.log(sum);

    for(let i = 0; i < temp.length; i++) {
      const letter = temp[i].toLowerCase();
      const isUpperCase = temp[i] === temp[i].toUpperCase() ? true : false;
      if(letter < 'a' || letter > 'z') { continue; }

      let char = type === 0 ? String.fromCharCode(temp[i].charCodeAt(0) + sum) : String.fromCharCode(temp[i].charCodeAt(0) - sum);

      if(char > 'z') {
        const dif = char.charCodeAt(0) - 'z'.charCodeAt(0) - 1;
        char = String.fromCharCode('a'.charCodeAt(0) + dif);
      } else if(char < 'a') {
        const dif = char.charCodeAt(0) - 'a'.charCodeAt(0) - 1;
        char = String.fromCharCode('z'.charCodeAt(0) + dif);
      }

      if(isUpperCase) char = char.toUpperCase();

      res += char;
      console.log(res, message);
    }

    setResult(res);
    return;
  }

  return (
    <>
      <div className='w-full px-16'>
        <label htmlFor='key' className='block mb-1 text-sm font-medium text-gray-900'>Key</label>
        <input id='key' onChange={(e) => setKey(e.target.value)} className='block p-1 w-64 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500' placeholder='Enter your key here...' />
      </div>

      <div className='w-full px-16'>
        <label htmlFor='message' className='block mb-1 text-sm font-medium text-gray-900'>Your message</label>
        <textarea id='message' rows={5} onChange={(e) => setMessage(e.target.value)} className='block p-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500' placeholder='Enter your message here...'></textarea>
      </div>

      <div className='flex gap-2'>
        <button onClick={() => cipher(0)} className='text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'>
          Encrypt
        </button>
        <button onClick={() => cipher(1)} className='text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'>
          Decrypt
        </button>
      </div>

      <div className='w-full px-16'>
        <label htmlFor='res' className='block mb-1 text-sm font-medium text-gray-900'>Your message</label>
        <textarea id='res' rows={5} className='block p-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500' defaultValue={result}></textarea>
      </div>
    </>
  )
}

export default Cipher;
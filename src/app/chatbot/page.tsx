'use client';

import { useChat } from 'ai/react';
import { SendHorizontal } from 'lucide-react';


export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto ">
      {messages.map(m => (
        <div key={m.id} className={`whitespace-pre-wrap p-5 border-solid shadow-md my-2 ${m.role == 'user' ? 'bg-gray-200' : 'bg-gray-100'}`}>
          <span className='font-semibold'>{m.role === 'user' ? 'User: ' : 'AI: '}</span>
          {m.content}
        </div>
      ))}

      <form className="fixed bottom-0 w-full max-w-md mb-8">
        <div className="relative flex items-center">
            <input
                className="w-full p-2 pr-10 border border-gray-300 rounded shadow-xl"
                value={input}
                placeholder="Say something..."
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit} className="absolute right-3">
              <SendHorizontal />
            </button>
        </div>
      </form>

    </div>
  );
}

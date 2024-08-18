'use client';

import { useChat } from 'ai/react';
import { SendHorizontal } from 'lucide-react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <section className="p-8 pb-24">
      <div className="flex flex-col w-full max-w-md mx-auto">
        <div className="flex flex-col flex-grow">
          {messages.map(m => (
            <div
              key={m.id}
              className={`whitespace-pre-wrap p-5 border-solid shadow-md my-2 ${m.role == 'user' ? 'bg-gray-200' : 'bg-gray-100'}`}
            >
              <span className='font-semibold'>{m.role === 'user' ? 'User: ' : 'AI: '}</span>
              {m.content}
            </div>
          ))}
        </div>
        <form className="relative mt-4">
          <div className="flex items-center">
            <input
              className="w-full p-2 pr-10 border border-gray-300 rounded shadow-xl"
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="absolute right-3"
              aria-label="Send message"
            >
              <SendHorizontal />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

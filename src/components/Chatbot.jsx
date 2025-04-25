import React, { useEffect, useState } from 'react';

import "../css/Chatbot.css";

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.async = true;
  //   script.src = 'https://s.cliengo.com/weboptimizer/67dd5d847a021e483e931a5c/67dd893bca328a3dc23775e9.js?platform=onboarding_modular';

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script); // Limpia el script al desmontar el componente
  //   };
  // }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className='font-atos'>
      {/* Botón de abrir/cerrar chat */}
      <button className='chatbot-closed'
        onClick={toggleChat}
      >
        🤖
      </button>

      {/* Chatbot: se muestra cuando isChatOpen es true */}
      {isChatOpen && (
        <div className='chatbot-open'>
          <div className='message-bot'>
            {/* Aquí irían los mensajes del chat */}
            <div>
              <strong>Bot:</strong> ¡Hola! ¿En qué puedo ayudarte?
            </div>
          </div>

          {/* Campo de texto para enviar mensajes */}
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            className='message-input'
          />
        </div>
      )}
    </div>
  );
};

export default Chatbot;

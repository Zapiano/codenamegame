import '../index.css'
import React, { useState } from 'react';

function NewGameForm(props) {
    const [gameName, setGameName] = useState("");
    //props.gameName 

    const handleChange = (event) => {
        setGameName(event.target.value);
    }

    const handleSubmit = (event) => {
        props.onNewGameClick(gameName)
        event.preventDefault();
    }

    return (
      <div className="w-full">
        <div className="w-full flex flex-row justify-center mt-60">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col">
              <div className="w-full  mb-5 flex justify-center">
                <label className="text-4xl text-yellow-400 hover:text-purple-300 uppercase">
                  Nome da sala
                </label>
              </div>

              <div className="w-full flex justify-center">
                <input
                  className="w-80 h-16 pl-5 text-2xl text-purple-900 uppercase"
                  type="text"
                  value={gameName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full flex justify-center mt-12">
              <input
                className="py-5 w-80 rounded-lg bg-yellow-400 hover:bg-yellow-600 hover:text-purple-400 text-2xl text-purple-800 text-bold uppercase"
                spellCheck="false"
                type="submit"
                value="Criar sala"
              />
            </div>
          </form>
        </div>
      </div>
    );
}

export default NewGameForm;
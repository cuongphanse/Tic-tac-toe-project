import { useState } from "react"

export default function Player({initiaName, symbol, isActive, onChangeName}){

  const [changeName, setChangeName] = useState(initiaName);
  const [isEditing, setIsEditing] = useState(false);
  
  function handleChangeName(event){
    setChangeName(event.target.value);
  }

  function handleEditName(){
    setIsEditing((isEditing) => !isEditing);
    if(isEditing){
      onChangeName(symbol, changeName);
    }
  }
  console.log(isEditing);
  let editablePlayerName = <span className="player-name">{changeName}</span>;

  if(isEditing){
    editablePlayerName = <input type="text" required value={changeName} onChange={handleChangeName}/>
  }
    return (      
        <li className={isActive ? 'active' :undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditName}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    );
}
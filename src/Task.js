import Checkbox from "./Checkbox";
import {useState} from "react";

export default function Task({name, done, onToggle, onTrash, onRename, onShare}) {
 const [editMode,setEditMode] = useState(false);
  return (
    <div className={'task ' + (done?'done':'')}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      {!editMode && (
        <div className="task-name" onClick={() => setEditMode(prev => !prev)}>
          <span>{name}</span>
        </div>
      )}
      {editMode && (
        <form onSubmit={e => {e.preventDefault();setEditMode(false);}}>
          <input type="text" value={name}
                 onChange={e => onRename(e.target.value)} />
        </form>
      )}
      <button className="trash" onClick={onTrash}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
      </button>
      <button className="share" onClick={onShare}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M395.72,0c-48.204,0-87.281,39.078-87.281,87.281c0,2.036,0.164,4.03,0.309,6.029l-161.233,75.674
		c-15.668-14.971-36.852-24.215-60.231-24.215c-48.204,0.001-87.282,39.079-87.282,87.282c0,48.204,39.078,87.281,87.281,87.281
		c15.206,0,29.501-3.907,41.948-10.741l69.789,58.806c-3.056,8.896-4.789,18.396-4.789,28.322c0,48.204,39.078,87.281,87.281,87.281
		c48.205,0,87.281-39.078,87.281-87.281s-39.077-87.281-87.281-87.281c-15.205,0-29.5,3.908-41.949,10.74l-69.788-58.805
		c3.057-8.891,4.789-18.396,4.789-28.322c0-2.035-0.164-4.024-0.308-6.029l161.232-75.674c15.668,14.971,36.852,24.215,60.23,24.215
		c48.203,0,87.281-39.078,87.281-87.281C482.999,39.079,443.923,0,395.72,0z"/></svg>
      </button>
      
     
    </div>
  );
}
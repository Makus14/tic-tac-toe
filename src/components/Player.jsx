import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {
    let [isEditing, setIsEditing] = useState(false);
    let [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing(editing => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editingPlayerName = () => {
        if (isEditing === false) {
            return (
                <span className="player-name">{playerName}</span>
            )
        } else {
            return (
                <input type="text" required value={playerName} onChange={handleChange} />
            )
        }  
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editingPlayerName()}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}
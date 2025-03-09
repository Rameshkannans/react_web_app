import React from "react";
import "../styles/Note.css"

function Note({ note, onDelete, onUpdate }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <>
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <button className="btn btn-warning" onClick={() => onUpdate(note.id)}>
                Edit
            </button>
            <button className="btn btn-danger" onClick={() => onDelete(note.id)}>
                Delete
            </button>
        </>
    );
}

export default Note
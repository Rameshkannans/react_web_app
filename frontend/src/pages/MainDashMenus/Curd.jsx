
import { useState, useEffect } from "react";
import api from "../../api";
// import "../styles/Home.css";
import '../../styles/Home.css'
import { Link } from "react-router-dom";

const Curd = () => {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [editId, setEditId] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getNotes();
        getUser();
    }, []);

    const getUser = () => {
        api
            .get("/api/user/info/")
            .then((res) => setUser(res.data.username))
            .catch((err) => console.error("Failed to fetch user info", err));
    };

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => setNotes(res.data))
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const editNote = (id) => {
        const noteToEdit = notes.find((note) => note.id === id);
        setEditId(id);
        setTitle(noteToEdit.title);
        setContent(noteToEdit.content);
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { title, content })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to create note.");
                resetForm();
                getNotes();
            })
            .catch((err) => alert(err));
    };

    const updateNote = (e) => {
        e.preventDefault();
        if (!editId) return;

        api
            .put(`/api/notes/update/${editId}/`, { title, content })
            .then((res) => {
                if (res.status === 200) alert("Note updated!");
                else alert("Failed to update note.");
                resetForm();
                getNotes();
            })
            .catch((err) => alert(err));
    };

    const resetForm = () => {
        setEditId(null);
        setTitle("");
        setContent("");
    };

    return (
        <>  
            <div>
                <div className="my-5">
                    {user && <h3>Welcome, {user}!</h3>}  {/* Display logged-in user */}
                </div>
                <div>
                    <h2>Notes</h2>
                    <div className="note-container">
                        {notes.map((note) => (
                            <div key={note.id}>
                                <p className="note-title">{note.title}</p>
                                <p className="note-content">{note.content}</p>
                                <p className="note-date">{new Date(note.created_at).toLocaleDateString()}</p> {/* Fixed undefined 'formattedDate' */}
                                <button className="btn btn-warning" onClick={() => editNote(note.id)}>
                                    Edit
                                </button>
                                <button className="btn btn-danger" onClick={() => deleteNote(note.id)}>
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>{editId ? "Update Note" : "Create a Note"}</h2>
                <form onSubmit={editId ? updateNote : createNote}>
                    <label htmlFor="title">Title:</label>
                    <br />
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <br />
                    <label htmlFor="content">Content:</label>
                    <br />
                    <textarea
                        id="content"
                        name="content"
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                    <br />
                    <input type="submit" value={editId ? "Update" : "Submit"} />
                    {editId && (
                        <button type="button" className="btn btn-secondary" onClick={resetForm}>
                            Cancel Update
                        </button>
                    )}
                </form>
            </div>

            {/* <Link to="/logout" className="btn btn-danger">Logout</Link> */}
        </>
    );
}

export default Curd
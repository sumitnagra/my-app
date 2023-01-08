import React, { useContext, useState } from 'react'
import Notecontext from './context/Notecontext';

const AddNote = (props) => {
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const a = useContext(Notecontext);
    const { addNote } = a;
    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote(note)
        props.showAlert("Note added successully","success")

    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
        {localStorage.getItem('auth-token') ? <div className="mb-3 container" style={{ marginTop: "55px" }}>
            <h3>Enter the Notes Here</h3>
            <form>
                <label htmlFor="title" className="form-label">Title:</label>
                <input type="text" className="form-control" id="title" name='title' onChange={onChange} />
                <label htmlFor="description" id="description" name="description" className="form-label">Description:</label>
                <textarea className="form-control" id="description" name="description" rows="3" onChange={onChange}></textarea>
                <label htmlFor="tag" className="form-label">Tag:</label>
                <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} />
                <button type="submit" className="btn btn-warning my-2" onClick={handleClick}>Add Note</button>
            </form>
        </div> :<div className='container' ><h1> Please Login to add notes</h1></div>}
</>
    )
}

export default AddNote;
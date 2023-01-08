import React, { useContext } from 'react'
import  Notecontext  from './context/Notecontext.js'


const NoteItem = (props) => {
    const a = useContext(Notecontext);
    const { deleteNote } = a;
const  {showAlert}=props;
    return (
        <>
            <div className="card  col-md-4 mx-2 my-2" style={{ width: "20rem" }}>
                <div className="card-body">
                    <h2 className="card-text">{props.tag}</h2>
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.description}</h6>

                    <button type="submit" className="btn" onClick={()=>{props.update(props.note)}}><i className="fa-solid fa-pen-to-square mx-2">
                    </i>
                    </button>
                    <button type="submit" className="btn" onClick={()=>{deleteNote(props.id)}}><i className="fa-solid fa-trash" ></i></button>
                </div>
            </div>
        </>
    )
}

export default NoteItem;
import React from "react";

import Note from "./Note";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Left(){
    
    const [newnote,setnewnote] = React.useState({
        title:"",
        message:""
    });
    
    function updateNote(event){
        const {name,value} = event.target;
        
        setnewnote(previousvalue => {
            return {
                ...previousvalue,
                [name]: value
            };
            
        })
    }
    
    const [noteslist,updatenotelist] = React.useState([]);
    
    function updateList(event){
        updatenotelist(prev=>{
            return(
                [...prev, newnote]
            );
        })
    
        event.preventDefault();
        setnewnote({
            title:"",
            message:""
        })
    }

    function deleteNote(id){
        updatenotelist(prevNotes=>{
            return prevNotes.filter((note, index)=>{
                return index !== id;
            });
        });
    }
    
    const [shownote, setshownote] = React.useState(false);

    function expandnote(){
        setshownote(true);
    }

    return(
        <div className="left">

            <form className="TakeNote">
                <input onClick={expandnote} name = "title" value={newnote.title} onChange={updateNote} placeholder="Title..." autoComplete="off" />
                {shownote && <textarea name="message" value={newnote.message} onChange={updateNote} placeholder="Note Details..." rows="3" autoComplete="off" />}
                <Zoom in={shownote}>
                    <Fab color="primary" onClick={updateList}>
                        <AddIcon />
                    </Fab>
                </Zoom>
                
            </form>

            <div className="Notecollection">
                {noteslist.map((note,index)=>{
                    return(
                        <Note
                        key = {index}
                        id = {index}
                        title = {note.title}
                        message = {note.message}
                        onDelete = {deleteNote}
                        />
                    )
                })}
            </div>    
    
        </div>
    );
}

export default Left;
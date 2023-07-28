import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isNote, setIsNote]=useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    setIsNote(false);
  }

  function handleIsNote(){
    setIsNote(true);
  }

  return (
    <div>
      <form className="create-note">
        {
          isNote && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> 
        }
        <textarea onClick={handleIsNote}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= {isNote ? 3 : 1}
        />
        <Zoom in={isNote}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [titleClick, updateClick] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
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
  }
  function titleClicked() {
    updateClick(true);
  }

  return (
    <div>
      <form className="create-note">
        {titleClick ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onClick={titleClicked}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note"
          rows={titleClick ? "3" : "1"}
        />

        {titleClick ? (
          <Zoom in={true}>
            <Fab onClick={submitNote}>
              <AddBoxIcon />
            </Fab>
          </Zoom>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;

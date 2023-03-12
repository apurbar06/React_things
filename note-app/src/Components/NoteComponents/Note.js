import React from "react";
import "../css/Note.css";
import trash from "../img/trash.svg";

function Note({ id, text, deleteNote }) {
  return (
    <div className="note">
      <div className="note__body">{text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <img
          src={trash}
          className="note__delete"
          alt="trash"
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
}
export default Note;

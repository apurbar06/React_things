import React from "react";
import "../css/Note.css";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import trash from '../img/trash.svg';

function Note() {
  return (
    <div className="note">
      
      <div className="note__body"></div>
      <div className="note__footer">
        {/* <DeleteForeverOutlinedIcon
          className="note__delete"
          aria-hidden="true"
        ></DeleteForeverOutlinedIcon> */}
        <img src={trash} className="note__delete" alt="trash" />
      </div>
      
    </div>
  );
}
export default Note;

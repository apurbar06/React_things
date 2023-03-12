import { React } from "react";

function CreateNote() {
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="10"
        rows="5"
        placeholder="Type here...."
        maxLength="120"
      ></textarea>
      <div className="note__footer">
        <span className="label"> left</span>
        <button className="note__save">Save</button>
      </div>
    </div>
  );
}

export default CreateNote;

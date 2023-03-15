import { React } from "react";

function CreateNote({ textHandler, saveHandler, inputText }) {
  //character limit
  const charLimit = 120;
  const charLeft = charLimit - inputText.length;

  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type here...."
        onChange={textHandler}
        maxLength="120"
      ></textarea>
      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateNote;

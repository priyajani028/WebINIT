import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function CreateEntry(entryTerm) {
  return (
    <Entry
      key={entryTerm.id}
      emoji={entryTerm.emoji}
      name={entryTerm.name}
      meaning={entryTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateEntry)}</dl>
    </div>
  );
}

export default App;

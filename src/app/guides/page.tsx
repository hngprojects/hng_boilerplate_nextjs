"use client";

import React, { useState } from "react";
import CharacterLimitTextarea from "../../components/common/CharacterLimitTextarea";


export default function Home() {
  // create state to handle text
  const [text, setText] = useState("");

  // create function to handleChange
  const handleTextChange = (newValue: string) => {
    setText(newValue);
  };

  return (
    <main>
      <div className="p-4">
        <CharacterLimitTextarea
          maxLength={25}
          value={text}
          label="Bio"
          id="message"
          name="message"
          onChange={handleTextChange}
        />
      </div>
    </main>
  );
}

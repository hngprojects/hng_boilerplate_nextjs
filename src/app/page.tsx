"use client";  // Add this if you're using the App Router and this is a client component


// Necessary imports
import React, { useState } from "react";
import CharacterLimitTextarea from "../components/CharacterLimitTextarea";

export default function Home() {

  // create state to handle text 
  const [text, setText] = useState("");

  // create function to handle
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

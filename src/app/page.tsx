'use client'

import CharacterLimitTextarea from "../components/CharacterLimitTextarea";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [text, setText] = useState("");

  const handleTextChange = (newValue: string) => {
    setText(newValue);
  };

  return (
    <div>
      <div className="p-4">

        <CharacterLimitTextarea
          maxLength={64}
          value={text}
          label="Bio"
          id="messaqge"
          name="messaqge"
          onChange={handleTextChange}
        />
      </div>
    </div>
  );
}

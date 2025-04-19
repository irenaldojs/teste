"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const localText = localStorage.getItem("text_app");
    setText(localText ?? "");
    setCount(0);
  }, []);

  useEffect(() => {
    setCount(count + 1);

    if (count > 5) {
      localStorage.setItem("text_app", text);
      console.log("salvou");
      setCount(0);
    }
  }, [text]);

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      Texto Teste
      <textarea
        name="teste"
        className="w-[300px] h-[300px] bg-white text-gray-900"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
}

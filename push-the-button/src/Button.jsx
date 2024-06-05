import React from "react";

const Button = () => {
  const moveButton = () => {
    const btn = document.getElementById("btn");
    console.log("ur over me");
    const num = randomNum(2);
    console.log(num);

    // left 0 to 100
    // top 0 to 50

    // decide if its top or left
    if (num == 0) {
      // if it is top
      btn.style.top = `${randomNum(50)}rem`;
    } else {
      // if it is left
      btn.style.left = `${randomNum(100)}rem`;
    }
  };

  const randomNum = (num) => {
    return Math.floor(Math.random() * num);
  };

  const clicked = () => {
    console.log("ouch");
    document.getElementById("btn").style.opacity = 0;
    document.getElementById("win").style.opacity = 1;
  };
  return (
    <div>
      <h1
        id="win"
        className="items-center bg-slate-400 p-4 text-center font-mono text-4xl opacity-0">
        Wow you actually clicked me 😜
      </h1>
      <button
        id="btn"
        onClick={clicked}
        onMouseOver={moveButton}
        className="relative w-36 rounded-lg border-2 border-black bg-green-400 px-4 py-2 font-serif text-2xl hover:bg-green-600">
        Push me 😂
      </button>
    </div>
  );
};

export default Button;

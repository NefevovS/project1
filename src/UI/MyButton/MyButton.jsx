import React from "react";
import s from "./MyButton.module.css";

const MyButton = ({ children, remove, post }) => {
  return (
    <div>
      <button className={s.btn} onClick={() => remove(post)}>
        {children}
      </button>
    </div>
  );
};

export default MyButton;

import React, { memo } from "react";

interface Props {
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
}

function Button({ children, onClick }: Props) {
  return (
    <button onClick={onClick}>
      {children}
      {Math.random() * 10}
    </button>
  );
}

export default memo(Button);

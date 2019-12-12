import React, { useState } from "react";

export function Auth(props) {
  const [checked, setChecked] = useState(false);
  const [allowed, setAllowed] = useState(false);

  if (!checked) {
    return (
      <>
        <p>Are you definitely a dev?</p>
        <button
          onClick={() => {
            setChecked(true);
            setAllowed(true);
          }}
        >
          yes
        </button>
        <button
          onClick={() => {
            setChecked(true);
            setAllowed(false);
          }}
        >
          no
        </button>
      </>
    );
  } else {
    if (allowed) {
      return props.children;
    } else {
      return <p>I'm sorry, Dave, I'm afraid I can't do that.</p>;
    }
  }
}

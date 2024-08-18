"use client";

import { Fragment, useState } from "react";

const Log = () => {
  const [isLog, setIsLog] = useState(false);

  return (
    <Fragment>
      <button onClick={() => setIsLog(!isLog)}>Click Me</button>
      <div style={{ display: isLog ? "block" : "none" }}>Log</div>
    </Fragment>
  );
};

export default Log;

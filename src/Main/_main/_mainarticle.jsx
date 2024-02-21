import "./_mainarticle.css";

import _header from "./_mainarticle/_header";
import _sections from "./_mainarticle/_sections";

function _mainarticle() {
  return (
    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>
      <_header></_header>
      <_sections></_sections>
    </article>
  );
}

export default _mainarticle;

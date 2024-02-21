import _mainnav from "./_main/_mainnav";
import _mainarticle from "./_main/_mainarticle";

function MainSection() {
  return (
    <>
      <main className="email-view">
        <_mainnav></_mainnav>
        <_mainarticle></_mainarticle>
      </main>
    </>
  );
}

export default MainSection;

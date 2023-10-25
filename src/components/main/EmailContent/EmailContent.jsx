import Title from "./Title";
import Header from "./Header";
import Body from "./Body";
import Actions from "./Actions";

function EmailContent() {
  return (
    <article className="email-content">
      <Title></Title>
      <Header></Header>
      <Body></Body>
      <Actions></Actions>
    </article>
  );
}

export default EmailContent;

import flaticonWelcomeImage from "./assets/images/flaticon-welcome-image.png";
import WriteEmailImage from "./assets/images/write-email-component.png";
import ArticleHeader from "./ArticleHeader";

function Article() {
  return (
    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>
      <ArticleHeader />
      <section className="email-body">
        <div className="content">
          <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
        </div>
      </section>
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
      <section className="write-email">
        <img
          src={WriteEmailImage}
          alt="Write Email"
          style={{ width: "1000px", height: "300px" }}
        />
      </section>
    </article>
  );
}
export default Article;

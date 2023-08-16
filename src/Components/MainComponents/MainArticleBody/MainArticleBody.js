import flaticonWelcomeImage from '../MainImages/flaticon-welcome-image.png'

function MainArticleBody (){
  return <><section className="email-body">
    <div className="content">
      <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
    </div>
  </section><section className="email-actions">
      <button>Reply</button>
      <button>Forward</button>
    </section></>
}
export default MainArticleBody
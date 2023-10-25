import "./style.css";

// components
import MainNavigation from "../MainNavigation";
import MainArticle from "../MainArticle";

const Main = () => {
    return (
        <main className="email-view">
            <MainNavigation />
            <MainArticle />
        </main>
    );
};

export default Main;

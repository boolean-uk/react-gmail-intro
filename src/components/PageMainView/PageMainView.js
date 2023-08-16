import ToolBar from './Toolbar/ToolBar';
import Content from './Content/Content';

function PageMainView() {
    return (
        <main className="email-view">
            <ToolBar />
            <Content />
        </main>
    );
}

export default PageMainView
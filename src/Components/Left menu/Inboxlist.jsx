import ActiveItem from "./Items/Active";
import StarredItems from "./Items/Starred";
import ToggledItems from "./Items/Toggle";

function Inboxlist() {
    return (
        <ul className="inbox-list">
            <ActiveItem/>
            <StarredItems/>
            <ToggledItems/>
        </ul>
    )
}

export default Inboxlist
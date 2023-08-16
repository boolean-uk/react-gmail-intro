import ActiveItem from "./ActiveItem";
import RegularItem from "./RegularItem";
import ToggleItem from "./ToggleItem";

function InboxList() {
    return (
        <ul className="inbox-list">
            <ActiveItem />
            <RegularItem />
            <ToggleItem />
        </ul>
    );
}

export default InboxList;

import ActiveItemLabel from "./ActiveItem/ActiveItemLabel";
import ActiveItemCount from "./ActiveItem/ActiveItemCount";
import IdleItemLabel from "./IdleItem/IdleItemLabel";
import IdleItemCount from "./IdleItem/IdleItemCount";
import ToggleItemLabel from "./ToggleItem/ToggleItemLabel";
import ToggleItemBox from "./ToggleItem/ToggleItemBox";

function InboxList() {
    return (
        <ul className="inbox-list">
            <li className="item active">
                <ActiveItemLabel />
                <ActiveItemCount />
            </li>
            <li className="item">
                <IdleItemLabel />
                <IdleItemCount />
            </li>
            <li className="item toggle">
                <ToggleItemLabel />
                <ToggleItemBox />
            </li>
        </ul>
    );
}

export default InboxList
import ActiveMailbox from "./ActiveMailbox/ActiveMailbox";
import "./LeftMenu.css";
import Mailbox from "./Mailbox/Mailbox";
import MailboxToggle from "./MailboxOption/MailboxToggle";

export default function LeftMenu() {
	return (
		<nav className="left-menu">
			<ul className="inbox-list">
				<ActiveMailbox />

				<Mailbox />

				<MailboxToggle />
			</ul>
		</nav>
	);
}

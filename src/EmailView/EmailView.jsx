import EmailToolbar from "./EmailToolbar/EmailToolbar";
import EmailContent from "./EmailContent/EmailContent";

export default function EmailView() {
	return (
		<main className="email-view">
			<EmailToolbar />
			<EmailContent />
		</main>
	);
}

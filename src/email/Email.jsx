import { EmailMain } from "./emailMain" 
import { EmailNav } from "./EmailNav"
import './email.css'
export function Email(){
    return(
        <main className="email-view">
            <EmailNav/>
            <EmailMain/>
        </main>
    )
}
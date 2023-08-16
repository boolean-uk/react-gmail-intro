import Hide from "./LeftMenuActionsComponents/Hide"
import InboxLeft from "./LeftMenuActionsComponents/InboxLeft"
import Starred from "./LeftMenuActionsComponents/Starred"


function LeftMenuActions (){
  return  <ul className="inbox-list">
  <InboxLeft />
  <Starred />
  <Hide />
</ul>
}

export default LeftMenuActions
import sendbtn from '../assets/images/sendbtn.PNG'
import './styles.css'

function EmailAnswear() {
  return (
    <><textarea
          placeholder="Compose your email..." />
          <img src={sendbtn} alt="" />
    </>

  )
}

export default EmailAnswear
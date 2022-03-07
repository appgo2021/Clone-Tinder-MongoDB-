import whitelogo from '../images/white_logo.png'
import colorlogo from '../images/color_logo.png'

const Nav = ({authToken, minimal, setShowModal, showModal, setIsSignUp}) => {

  const handleClick = () => {
    setShowModal(true)
    setIsSignUp(false)
  }

  return (
    <nav>
    <div className="logo-container">
        <img className="logo" src={minimal ? colorlogo : whitelogo} alt="tinder_logo"/>
    </div>

    {!authToken && !minimal && <button className="nav-button" onClick={handleClick} disabled={showModal}>Log in</button>}

    </nav>
  )
}

export default Nav


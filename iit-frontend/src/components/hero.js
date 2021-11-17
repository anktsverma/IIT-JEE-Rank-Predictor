import Logo from '../assets/logo.svg'
const Hero=()=>{
    return(
       <div className="hero">
          <div className="navbar">
            <div className="logo"><img src={Logo}/></div>
            <div className="links">
              <button>Join for Free</button>
              <button>View Plans</button>
              <button>Login</button>
            </div>
          </div>
          <div className="hero-disc">
          <div className="heading"><h1>Practice Beats Talent<br/>when Talent doesn't Practice</h1></div>
          <div className="para"><p>The SpeEdLabs platform cross references <br/>
          efforts of each student with concepts and <br/>gives personalized analysis and suggestions. <br/>Practice at your own pace and improve <br/>results at school & competition level.</p></div>
          </div>
          <div className="btn" ><button>Join for Free</button></div>
       </div>
    )
}

export default Hero;
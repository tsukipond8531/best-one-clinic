import { useState } from "react";
import { useNavigate } from 'react-router-dom';

// importing styled components
import { 
    PageWrapper,
    FormsWrapper,
    Forms,
    Form,
    // SocialIcon,
    PanelsWrapper,
    Panel,
} from "../../assets/Styled-Components/Login.Styled.js";

// importing react-icons
import { FaUser, FaEnvelope} from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { PiPasswordFill } from "react-icons/pi";

// importing SVGs
import SigninSVG from "../../../public/Images/signinAFTER-01.svg";
import SignupSVG from "../../../public/Images/signupAFTER-01.svg";


function Login() {
    const [mode, setMode] = useState('signin');
    const changeMode = () => {
        setMode((prevMode) => (prevMode === 'signin' ? 'signup'  : 'signin'));
        
    }
    const HandleRoute = (routeName)=> {
        if(routeName === 'register'){
            changeMode()
            navigate('/register')
        }else{
            changeMode()
            navigate('/login')
        }
    }
    const navigate = useNavigate();



    const [see , setSee] = useState(false)
    const handleSeePassword = (e)=>{
        e.preventDefault()
        setSee(! see)
    }

    return (
        <PageWrapper $mode ={mode}>
        <FormsWrapper>
            <Forms $mode={mode}>
                {/* Start Sign In */}
                <Form $formType='signin' $mode={mode}
                    method="post"
                    
                >
                    <h2 className="form-title">Sign in</h2>
                    <div className="input-field">
                        <i><FaUser /></i>
                        <input 
                            type='email'
                            placeholder='Email'
                            name="email"
                            // value={loginData.email}
                            // onChange={handleLoginChange}
                            required
                            />
                    </div>
                    
                    <div className="input-field d-flex" style={{justifyContent :"space-between"}}>
                        <div className="passStyle" style={{width : "80%" , margin: "0 auto"}}>
                            <i><PiPasswordFill /></i>
                            <input
                                type={see ? "text" : "password"} 
                                placeholder='Password'
                                className="pass"
                                name="password"
                                // value={loginData.password}
                                // onChange={handleLoginChange}
                                style={{marginLeft : "17px "}}
                                required
                                />
                        </div>
                        <button onClick={handleSeePassword} 
                            className="btn-See"
                        >
                            {see ? <FaRegEye/> :<FaRegEyeSlash/> }
                        </button>
                    </div>
                    <input className="submit-btn" type='submit' value='Sign in' />
                    
                </Form>
                    {/* End Sign In */}

                    {/* Start Sign Up */}
                <Form $formType='signup' $mode={mode} 
                    method="post"
                    
                >
                    <h2 className="form-title">Sign Up</h2>
                    <div className="input-field" style={{ display: 'flex', gap: '10px' }}>
                        <i style={{marginLeft :"17px"}}><FaUser /></i>
                        <input 
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            // value={formData.firstName}
                            // onChange={handleRegisterChange}
                            required 
                            style={{ flex: 1 , width :"50%"  }} 
                            
                            />
                        <i style={{marginLeft :"17px"}}><FaUser /></i>
                        <input 
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            // value={formData.lastName}
                            // onChange={handleRegisterChange}
                            required
                            style={{ flex: 1 ,width :"50%"}} 
                            
                            />
                    </div>
                    
                    <div className="input-field">
                        <i><FaEnvelope /></i>
                        <input 
                            type='email' 
                            placeholder='Email'
                            name="email"
                            // value={formData.email}
                            // onChange={handleRegisterChange}
                            required
                            />
                    </div>
                    <div className="input-field d-flex" style={{justifyContent :"space-between"}}>
                        <div className="passStyle" style={{width : "80%" , margin: "0 auto"}}>
                        <i><PiPasswordFill /></i>
                        <input
                            type={see ? "text" : "password"} 
                            placeholder='Password'
                            name="password"
                            // value={formData.password}
                            // onChange={handleRegisterChange}
                            style={{marginLeft : "17px "}}
                            required
                            />
                        </div>
                        <button onClick={handleSeePassword} 
                            className="btn-See"
                        >
                            {see ? <FaRegEye/> :<FaRegEyeSlash/> }
                        </button>
                    </div>
                    
                    <input className="submit-btn" type='submit' value='Sign Up'  />
                    
                </Form>
                    {/* End Sign Up */}

            </Forms>
        </FormsWrapper>

        <PanelsWrapper>
            <Panel $placement='left' $mode={mode}>
                <div className="panel-content">
                    <h3>New in our store?</h3>
                    <p>Register and enjoy the best deals ever on our collection of laptops.</p>
                    <button className="panel-btn" onClick={()=>{ HandleRoute('register')}}>Sign Up</button>
                </div >
                <img className="panel-img" src={SignupSVG} alt='signup' />
            </Panel>
            
            <Panel $placement='right' $mode={mode}>
                <div className="panel-content">
                    <h3>One of us?</h3>
                    <p>If you already have an account, just sign in. We missed you!</p>
                    <button className="panel-btn" onClick={()=>HandleRoute('login')}>Sign In</button>
                </div>
                <img className="panel-img" src={SigninSVG} alt='signin' />
            </Panel>
        </PanelsWrapper>
    </PageWrapper>
    )
}

export default Login
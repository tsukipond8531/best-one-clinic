import { useEffect, useState } from "react";
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
import { FaUser, FaEnvelope } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { PiPasswordFill } from "react-icons/pi";

// importing SVGs
import SigninSVG from "../../../public/Images/signinAFTER-01.svg";
import SignupSVG from "../../../public/Images/signupAFTER-01.svg";
import { ErrorNotification, successNotification } from "../../Components/Notifications.jsx";

// Import Api Files
import Api from '../../Config/api.js'
import { useDispatch } from "react-redux";
import { fetchUserData } from '../../Redux/Reducers/user'


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserData())
    }, [])


    const [mode, setMode] = useState('signin');
    const changeMode = () => {
        setMode((prevMode) => (prevMode === 'signin' ? 'signup' : 'signin'));
    }
    const HandleRoute = (routeName) => {
        if (routeName === 'register') {
            changeMode()
            navigate('/register')
        } else {
            changeMode()
            navigate('/login')
        }
    }
    const [see, setSee] = useState(false)
    const handleSeePassword = (e) => {
        e.preventDefault()
        setSee(!see)
    }

    // ************************************  Start Handle Logic Register  ************************************************ // 
    const [registerInputs, setRegisterInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const handleRegisterChange = (e) => {
        setRegisterInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault()
        try {
            // console.log(registerInputs);
            await Api.post('/auth/signup', registerInputs)
                .then((res) => {
                    console.log(res.data);
                    successNotification("Account Created ! ❤️")
                    HandleRoute('/login')
                })
                .catch((e) => {
                    const errMsg = e?.response?.data?.message || e?.response?.data?.error
                    // console.log(errMsg);
                    ErrorNotification(errMsg || "Email Must Be Correct And Password Must Be Complex")
                })
        } catch (error) {
            // const errMsg = e?.response?.data?.message || e?.response?.data?.error
            ErrorNotification(error)
            //     console.log(errMsg);
        }
    }

    // ************************************ End Handle Logic Register  ************************************************ // 

    // ************************************ Start Handle Logic Login  ************************************************ // 
    const [loginInputs, setLoginInputs] = useState({
        email: "",
        password: "",
    })

    const handleLoginChange = (e) => {
        setLoginInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        // console.log(loginInputs);
        try {
            Api.post('/auth/login', loginInputs)
                .then((res) => {
                    localStorage.clear()
                    console.log(res.data.data.user._id);
                    // console.log(res.data);
                    let userId = res.data.data.user._id
                    console.log(userId);
                    localStorage.setItem('_id' , res.data.data.user._id)
                    successNotification("Login Successfully..!")
                    navigate(`/home`)
                }).catch((e) => {
                    const errMsg = e?.response?.data?.message || e?.response?.data?.error
                    console.log(errMsg);
                    ErrorNotification(errMsg || "Invalid Email Or Password !")

                })
        } catch (error) {
            ErrorNotification(e.message)
        }
    }
    // ************************************ End Handle Logic Login  ************************************************ // 



    return (
        <PageWrapper $mode={mode}>
            <FormsWrapper>
                <Forms $mode={mode}>
                    {/* Start Sign In */}
                    <Form $formType='signin' $mode={mode}
                        method="post"
                        onSubmit={handleLoginSubmit}
                    >
                        <h2 className="form-title">Sign in</h2>
                        <div className="input-field">
                            <i><FaUser /></i>
                            <input
                                type='email'
                                placeholder='Email'
                                name="email"
                                value={loginInputs.email}
                                onChange={handleLoginChange}
                                required
                            />
                        </div>

                        <div className="input-field d-flex" style={{ justifyContent: "space-between" }}>
                            <div className="passStyle" style={{ width: "80%", margin: "0 auto" }}>
                                <i><PiPasswordFill /></i>
                                <input
                                    type={see ? "text" : "password"}
                                    placeholder='Password'
                                    className="pass"
                                    name="password"
                                    value={loginInputs.password}
                                    onChange={handleLoginChange}
                                    style={{ marginLeft: "17px " }}
                                    required
                                />
                            </div>
                            <button onClick={handleSeePassword}
                                className="btn-See"
                            >
                                {see ? <FaRegEye /> : <FaRegEyeSlash />}
                            </button>
                        </div>
                        <input className="submit-btn" type='submit' value='Sign in' />

                    </Form>
                    {/* End Sign In */}

                    {/* Start Sign Up */}
                    <Form $formType='signup' $mode={mode}
                        method="post"
                        onSubmit={handleRegisterSubmit}
                    >
                        <h2 className="form-title">Sign Up</h2>
                        <div className="input-field" style={{ display: 'flex', gap: '10px' }}>
                            <i style={{ marginLeft: "17px" }}><FaUser /></i>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={registerInputs.firstName}
                                onChange={handleRegisterChange}
                                required
                                style={{ flex: 1, width: "50%" }}

                            />
                            <i style={{ marginLeft: "17px" }}><FaUser /></i>
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={registerInputs.lastName}
                                onChange={handleRegisterChange}
                                required
                                style={{ flex: 1, width: "50%" }}

                            />
                        </div>

                        <div className="input-field">
                            <i><FaEnvelope /></i>
                            <input
                                type='email'
                                placeholder='Email'
                                name="email"
                                value={registerInputs.email}
                                onChange={handleRegisterChange}
                                required
                            />
                        </div>
                        <div className="input-field d-flex" style={{ justifyContent: "space-between" }}>
                            <div className="passStyle" style={{ width: "80%", margin: "0 auto" }}>
                                <i><PiPasswordFill /></i>
                                <input
                                    type={see ? "text" : "password"}
                                    placeholder='Password'
                                    name="password"
                                    value={registerInputs.password}
                                    onChange={handleRegisterChange}
                                    style={{ marginLeft: "17px " }}
                                    required
                                />
                            </div>
                            <button onClick={handleSeePassword}
                                className="btn-See"
                            >
                                {see ? <FaRegEye /> : <FaRegEyeSlash />}
                            </button>
                        </div>

                        <input className="submit-btn" type='submit' value='Sign Up' />

                    </Form>
                    {/* End Sign Up */}

                </Forms>
            </FormsWrapper>

            <PanelsWrapper>
                <Panel $placement='left' $mode={mode}>
                    <div className="panel-content">
                        <h3>New in our store?</h3>
                        <p>Register and enjoy the best deals ever on our collection of laptops.</p>
                        <button className="panel-btn" onClick={() => { HandleRoute('register') }}>Sign Up</button>
                    </div >
                    <img className="panel-img" src={SignupSVG} alt='signup' />
                </Panel>

                <Panel $placement='right' $mode={mode}>
                    <div className="panel-content">
                        <h3>One of us?</h3>
                        <p>If you already have an account, just sign in. We missed you!</p>
                        <button className="panel-btn" onClick={() => HandleRoute('login')}>Sign In</button>
                    </div>
                    <img className="panel-img" src={SigninSVG} alt='signin' />
                </Panel>
            </PanelsWrapper>
        </PageWrapper>
    )
}

export default Login
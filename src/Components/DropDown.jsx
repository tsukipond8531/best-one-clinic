import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';

// import iconProfile from '../assets/Images/account_circle_40dp.svg'
import '../Pages/Header/Header.css'


function Dropdownlist() {
    const PhoneStyle = window.screen.availWidth < 768
    // const navigate = useNavigate()
    // // User Data
    // const Login = useSelector((state) => state.user.isLogin)
    // console.log(Login);
    // const dispatch = useDispatch()
    // const handleLogout = (e) => {
    //     e.preventDefault()
    //     navigate('/')
    //     dispatch(Userlogout())
    // }
    return (
        <Dropdown >
            <Dropdown.Toggle
                variant={PhoneStyle ? "" : ""}
                id="dropdown-basic"
                className='w-100 d-flex justify-content-around align-items-center dropTitle'
                style={{ outline: 'none', border: 'none' }}
            >
                {/* <Avatar alt="Remy Sharp" src={iconProfile} style={{ display: "inline-block" }} /> */}
                Contact Us
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropmenu'>
                        <Dropdown.Item >
                            <Link to='/profile' className='dropLink'>Profile</Link>
                        </Dropdown.Item>
                        <Dropdown.Item >
                            <Link
                                className='dropLink'
                                // onClick={handleLogout}
                            >Logout</Link>
                        </Dropdown.Item>


                        <Dropdown.Item >
                            <Link to='/login' className='dropLink'>Login</Link>
                        </Dropdown.Item>
                        <Dropdown.Item >
                            <Link to='/register' className='dropLink'>Register</Link>
                        </Dropdown.Item>


            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Dropdownlist
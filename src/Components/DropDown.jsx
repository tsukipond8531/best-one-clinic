import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';

import '../Pages/Header/Header.css'
import { useTranslation } from 'react-i18next';


function Dropdownlist() {
    const PhoneStyle = window.screen.availWidth < 768

    const { t } = useTranslation()




    return (
        <Dropdown >
            <Dropdown.Toggle
                variant={PhoneStyle ? "" : ""}
                id="dropdown-basic"
                className='w-100 d-flex justify-content-around align-items-center dropTitle'
                style={{ outline: 'none', border: 'none' }}
            >
                {t('Contact')}
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropmenu'>
                <Dropdown.Item >
                    <Link
                        to='/contact'
                        className='dropLink'
                    >
                        {t('Contact')}
                    </Link>
                </Dropdown.Item>

                <Dropdown.Item >
                    <Link
                        className='dropLink'
                        to='complaints'
                    >
                        {t("Complaints")}
                    </Link>
                </Dropdown.Item>


                <Dropdown.Item >
                    <Link
                        to='/login'
                        className='dropLink'
                    >
                        {t('afterBefore')}
                    </Link>
                </Dropdown.Item>

                {/* <Dropdown.Item >
                            <Link to='/register' className='dropLink'>Register</Link>
                        </Dropdown.Item> */}


            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Dropdownlist
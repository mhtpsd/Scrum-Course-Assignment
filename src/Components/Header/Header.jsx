import './header.css';
import logo from '../../materials/Logo.svg';

function Header(){
    return(
        <>
        <div className='header'>
            <div className='logo'>                             {/* this is logo div */}
                <img
                    src={logo}
                    alt='logo'
                />
            </div>
            <div className='options'>                          {/* this is Section div */}
                <h6>HOME</h6>
                <h6>ABOUT</h6>
                <h6>COURSE</h6>
                <h6>BLOGS</h6>
            </div>
            <div className='login'>                            {/* this is login/signup div */}
                <h5>LOGIN</h5>
                <h5 className='signup'>SIGN UP</h5>
            </div>
        </div>
        </>
    );
}

export default Header;
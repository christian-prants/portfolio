import IconGithub  from '../assets/icon/github.svg?react';
import IconLinkedIn from '../assets/icon/linkedin.svg?react';


const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-icon --1'>
                <IconGithub className="icon --adjust" />
            </div>
            <div className='footer-icon --2'>
                <IconLinkedIn className="icon" />
            </div>
            <div className="footer-bar">
            </div>
        </div>
    )
}

export default Footer;
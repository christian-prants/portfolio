import IconGithub  from '../assets/icon/github.svg?react';
import IconLinkedIn from '../assets/icon/linkedin.svg?react';


const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-icon --1'>
                <a
                    href="https://github.com/christian-prants"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconGithub className="icon --adjust" />
                </a>
            </div>
            <div className='footer-icon --2'>
                <a
                    href="https://www.linkedin.com/in/christian-prants/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconLinkedIn className="icon" />
                </a>
            </div>
            <div className="footer-bar">
            </div>
        </div>
    )
}

export default Footer;
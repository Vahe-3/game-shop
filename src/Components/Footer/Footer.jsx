import React from 'react'

const Footer = () => {
    return (
        <div className='Footer'>
            <footer className="page-footer grey darken-3">
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()}

                    </div>
                </div>
            </footer>
        </div>
    )
};

export default Footer;
import Image from "next/image"
import facebook from "@/assets/socials/facebook.svg"
import twitter from "@/assets/socials/twitter.svg"
// import instagram from "@/assets/socials/instagram.svg"
import telegram from "@/assets/socials/telegram.svg"
import Logo from "./Logo"

function Footer({nunito}) {
    let getCurrentYear=()=>{
    let currentDate = new Date()
    return currentDate.getFullYear()
  }
  return (
    <footer className={`${nunito.className}`}>
        <div className="section__inner">
            <div className="footer-grid">
            <div>
            <h5>Company</h5>
            <ul className="footer-links">
                <li><a href="#"><i className="bi bi-map"></i>About Us</a></li>
                <li><a href="#"><i className="bi bi-arrows-move"></i>Culture</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Careers</a></li>
                <li><a href="#"><i className="bi bi-arrows-move"></i>Benefits</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Blog</a></li>
                <li><a href="#"><i className="bi bi-arrows-move"></i>News and Media</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Leadership</a></li>
                <li><a href="#contact"><i className="bi bi-chat-square"></i>Contact</a></li>
            </ul>
        </div>
        <div>
            <h5>Help</h5>
            <ul className="footer-links">
                <li><a href="#"><i className="bi bi-map"></i>Customer Help</a></li>
                <li><a href="#"><i className="bi bi-arrows-move"></i>System and Status</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Community</a></li>
                <li><a href="#"><i className="bi bi-arrows-move"></i>Developers API</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Site Map</a></li>
            </ul>
        </div>
        <div>
            <h5>Security</h5>
            <ul className="footer-links">
                <li><a href="#"><i className="bi bi-arrows-move"></i>Security</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>About Fraud and Scams</a></li>
            </ul>
                
        </div>
        <div>
            <h5>Legal</h5>
            <ul className="footer-links">
            <li><a href="#"><i className="bi bi-map"></i>Terms</a></li>
                <li><a href="#"><i className="bi bi-arrows-move"></i>Privacy</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Community</a></li>
                <li><a href="#"><i className="bi bi-arrows-move"></i>Cookies</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Licenses</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Contact</a></li>
            </ul>
                
        </div>
        <div>
            <h5>Contact Us</h5>
            <ul className="footer-links">
                <li><a href="#"><i className="bi bi-map"></i>support@travelwise.com</a></li>
            </ul>
            <ul className="footer-links social-list">
                <li><a href="#"><Image src={facebook} alt="Facebook link"/></a></li>
                <li><a href="#"><Image src={twitter} alt="Twitter link"/></a></li>
                {/* <li><a href="#"><Image src={instagram} alt="Instagram link"/></a></li> */}
                <li><a href="#"><Image src={telegram} alt="Telegram link"/></a></li>
            </ul>

        </div>
        <div>
            <h5>Built with {`<3`}</h5>
            <ul className="footer-links">
                <li><a href="https://icons8.com/">Icons8</a></li>
                <li><a href="https://nextjs.org/learn/foundations/about-nextjs">Next.js</a></li>
                <li><a href="https://twitter.com/oshie_20/status/1642808605740089345">{`Oshioke's UI`}</a></li>
            </ul>
        </div>
        </div>
        <div className="logo-wrapper">
            <Logo />
            <p>&copy; 2023 - {getCurrentYear()}. All rights reserved</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer
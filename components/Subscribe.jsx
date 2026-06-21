import style from "@/components/Subscribe.module.css"
import Image from "next/image"
import emailMktImg from "@/assets/email_marketing.png"
function Subscribe() {
  return (
    <section className={`section ${style.section__subscribe}`}>
      <div className={`section__inner ${style.section__inner}`}>
      <div className={`${style.media}`}>
        <Image 
        src={emailMktImg}
        alt="A marketing illustration showing a laptop a rocket and e-mail icons"/>
      </div>
        <div className="content">
            <h3>Subscribe to our newsletter to get exclusive updates from Us</h3>
            <p>Receive latest news, update, and many other things every week</p>
            <form>
                <input type="text" aria-label="Email input" required/>
                <button className="btn btn-primary" aria-label="Subscribe button">Subscribe</button>
            </form>
        </div>
      </div>
        
    </section>
  )
}

export default Subscribe
import style from "@/components/Intro.module.css"
import Image from "next/image";
import travelPhoto1 from "@/assets/travel1.png";
import travelPhoto2 from "@/assets/travel2.png";
import travelPhoto3 from "@/assets/travel3.png";
import { Calendar, GeoAlt, Search } from "react-bootstrap-icons";
function Intro() {
  return (
    <>
        <section className={`section ${style.section__intro}`}>
            <div className={`section__inner ${style.section__inner}`}>
            <div className={`${style.content}`}>
                <h1>The world is waiting for you to explore it</h1>
                <p>There are many packages more than you need just to make sure that you get enough options to avail the best one</p>
                <form className={`${style.search__form}`}>
                    <div className={`${style.where}`}>
                        <div className={`${style.icon}`}>
                            <GeoAlt size={32} />
                        </div>
                        <div className={`${style.text}`}>
                            <p className={`${style.title}`}>Where to</p>
                            <input type="text" placeholder="Search any location" aria-label="Search any location" required/>
                        </div>
                    </div>
                    <div className={`${style.slash}`}></div>
                    <div className={`${style.date}`}>
                        <div className={`${style.icon}`}>
                            <Calendar size={32}/>
                        </div>
                        
                        <div className={`${style.text}`}>
                            <p className={`${style.title}`}>Date</p>
                            <input type="date" placeholder="Select a date" aria-label="Choose date" required/>
                        </div>
                        
                    </div>
                    <button className={`${style.search__btn}`} aria-label="Search button">
                        <div className="icon">
                            <Search size={24}/>
                        </div>
                        <p className={`${style.btn__text}`}>
                            Search
                        </p>
                    </button>
                </form>

                <div className={`${style.social__proof}`}>
                    <div className={`${style.proof}`}>
                        <h2 className={`${style.proof__title}`}>12K+</h2>
                        <p>Success Journey</p>
                    </div>
                    <div className={`${style.proof}`}>
                        <h2 className={`${style.proof__title}`}>16+</h2>
                        <p>Awards Winning</p>
                    </div>
                    <div className={`${style.proof}`}>
                        <h2 className={`${style.proof__title}`}>20+</h2>
                        <p>Years Of Experience</p>
                    </div>
                </div>
            </div>
            <div className={`${style.media}`}>
                <div className={`${style.media__item} ${style.media__1}`}>
                    <Image 
                    src={travelPhoto1} alt="Woman holding her hat looking at the colosseum in Rome"/>
                </div>
                <div className={`${style.media__item} ${style.media__2}`}>
                <Image 
                    src={travelPhoto2} alt="Man rowing his boat through a peaceful river"/>
                </div>
                <div className={`${style.media__item} ${style.media__3}`}>
                <Image 
                    src={travelPhoto3} alt="Woman sitting close to a cliff enjoying the view"/>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Intro
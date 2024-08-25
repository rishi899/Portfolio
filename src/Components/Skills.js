import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>With a diverse skill set spanning both frontend and backend technologies, I bring a dynamic approach to web development. Proficient in C coding, Python, and Django, I specialize in crafting robust and scalable solutions that meet the unique needs of each project. On the frontend, I excel in HTML, CSS, and JavaScript, transforming designs into intuitive and engaging user interfaces. My expertise extends to ReactJS, where I leverage this powerful JavaScript framework to build dynamic and responsive web applications. Committed to prompt engineering, I prioritize efficiency and quality in every project, ensuring timely delivery and client satisfaction.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Frontend(HTML, CSS, JavaScript)</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Bash Script</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>JS Framework(ReactJS)</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>NodeJS</h5>
                            </div>
                            
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>JQuery</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>TailwindCSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>AWS CLOUD</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>DSA in JAVA</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
};
export default Skills;

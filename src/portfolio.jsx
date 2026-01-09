
 import { useState, useEffect } from "react"
 import react from "./icons/react.png"
 import html from "./icons/html.png"
 import css from "./icons/css.png"
 import javascript from "./icons/javascript.png"
 import nodejs from "./icons/nodejs.png"
 import expressjs from "./icons/expressjs.png"
 import mongodb from "./icons/mongodb.png"
 import git from "./icons/git.png"
 import github from "./icons/github.png"
 import vscode from "./icons/vscode.png"
 import postman from "./icons/postman.png"
 import figma from "./icons/figma.png"
 import picture from "./picture.jpg"
 import ProjectCard from "./projectcard"
 import EducationCard from "./educationcard"
 import ecommerce from "../src/projects/ecommerce.png"
 import ageCalculator from "../src/projects/age-calculator.png"
 import astroGym from "../src/projects/astrogym-landing-page.png"
 import socialMedia from "../src/projects/social-media-dashboard.png"
 import ui from "../src/icons/ui.png"
 import TargetCursor from './cursor';
 import RippleGrid from './background';
import useScrollAnimation from "./scroll"
import whatsapp from "./icons/whatsapp.png"
import x from "./icons/x.png"
import facebook from "./icons/facebook.png"

const Portfolio = () => {

  useScrollAnimation();
  const phrases = ["Full Stack Developer", "Programmer", "Problem Solver"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      setText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length); 
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 768);
  
  handleResize();
  
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  const projects = [
  {
    image: ecommerce,
    imagename: "ecommerceimage",
    projectname: "E-commerce Website",
    languages: ["React", "Express JS", "MongoDB"],
    description: "A full stack e-commerce website to carry out shopping",
    githubdirectory: "https://github.com/Rahman504/Ecommerce-frontend",
    projectdirectory: "https://city-shop-ecommerce.vercel.app",
  },
  {
    image: astroGym,
    imagename: "astrogymimage",
    projectname: "Astrogym Landing Page",
    languages: ["React"],
    description: "AstroGym is a futuristic VR fitness landing page with scroll-triggered animations, neon gradients, and interactive feature and pricing sections.",
    githubdirectory: "https://github.com/Rahman504/Astrogym-landing-page",
    projectdirectory: "https://astrogym-landing-page.vercel.app/",
  },
  {
    image: socialMedia,
    imagename: "socialimage",
    projectname: "Social Media Dashboard",
    languages: ["HTML", "CSS", "Javascript"],
    description: "A responsive, multi-platform social media analytics dashboard featuring a custom-built Dark/Light mode toggle. Built with a focus on CSS Grid and Flexbox to provide a seamless viewing experience across all devices.",
    githubdirectory: "https://github.com/Rahman504/SOCIAL-MEDIA-DASHBOARD-WITH-THEME-SWITCHER",
    projectdirectory: "https://social-media-dashboard-with-theme-s-mauve.vercel.app/",
  },
  {
    image: ageCalculator,
    imagename: "agecalculatorimage",
    projectname: "Age Calculator Website",
    languages: ["HTML", "CSS", "Javascript"],
    description: "A frontend website to calculate one's age",
    githubdirectory: "https://github.com/Rahman504/AGE-CALCULATOR-APP",
    projectdirectory: "https://age-calculator-app-dusky-nu.vercel.app/",
  }
];

  console.log("Projects:", projects);
console.log("isMobile:", isMobile);





const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const API_URL = process.env.REACT_APP_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
  setLoading(true);
  setStatus("");

    try {
      const res = await fetch(`${API_URL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
  setStatus("Email sent successfully!");
  setFormData({ name: "", email: "", message: "" });

  setPopup({ message: "Your message has been sent", type: "success" });

  setTimeout(() => setPopup({ message: "", type: "" }), 3000);
} else {
  setStatus("Failed to send email.");

  setPopup({ message: "Failed to send message", type: "error" });

  setTimeout(() => setPopup({ message: "", type: "" }), 3000);
}
    } finally {
    setLoading(false);
  }
  };
const [popup, setPopup] = useState({ message: "", type: "" });




 


    return(
        <>
            {!isMobile && (
            <TargetCursor 
                spinDuration={2}
                hideDefaultCursor={true}
                outerColor="#38BDF8"
                innerColor="#F042FF"
                glow={true} 
            />
            )}
            <section>
                <header className="header">
                    <h1>Abdulrahman</h1>
                    <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                    <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                        <div>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                            <a href="#education">Education</a>
                            <a href="#contact">Contact</a> 
                        </div>
                        <a href="https://github.com/Rahman504"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github"
                        >Github Profile</a>
                    </div>

                </header>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <div className="ripple" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0,
                        pointerEvents: 'none' 
                    }}>
                        <RippleGrid
                            enableRainbow={false}
                            gridColor="#38BDF8"
                            rippleIntensity={0.12}
                            glowIntensity={1.5}
                            gridSize={10}
                            gridThickness={12}
                            mouseInteraction={true}
                            mouseInteractionRadius={1.5}
                            opacity={0.95}
                        />
                    </div>
                    <div id="about" className="about section">
                        <article>
                            <h1>Hi, I am Azeez Abdulrahman</h1>
                            <p className="first">
                                I am a <span className="typing-text">{text}</span>
                                <span className="cursor">|</span>
                            </p>
                            <p>I am an enthusiastic and adaptable person, constantly seeking
                                opportunities to grow and tackle new challenges. Driven by a strong
                                desire to learn, I am committed to producing excellent outcomes.
                                With an optimistic outlook and a mindset focused on continuous
                                improvement, I am prepared to contribute meaningfully and accomplish
                                remarkable goals.</p>
                            <article>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Check Resume
                                </a>
                            </article>
                            
                        </article>
                        <article className="img">
                            <img src={picture} alt="profilepicture" className="pic" />
                        </article>
                    </div>
                </div>

                <div id="skills" className="section">
                    <h1>Skills</h1>
                    <p>Here are some of my skills on which I have been working on for the past 1 year.</p>
                    <div>
                        <div>
                            <h2>Frontend</h2>
                            <div>
                                <article>
                                    <img src={html} alt="htmlicon" />
                                    <p>HTML</p>
                                </article>
                                <article>
                                    <img src={css} alt="cssicon" />
                                    <p>CSS</p>
                                </article>
                                <article>
                                    <img src={javascript} alt="javascripticon" />
                                    <p>Javascript</p>
                                </article>
                                <article>
                                    <img src={react} alt="reacticon" />
                                    <p>React Js</p>
                                </article>
                            </div>
                        </div>
                        <div>
                            <h2>Backend</h2>
                            <div>
                                <article>
                                    <img src={nodejs} alt="nodejsicon" />
                                    <p>Node Js</p>
                                </article>
                                <article>
                                    <img src={expressjs} alt="expressjsicon" />
                                    <p>Express Js</p>
                                </article>
                                <article>
                                    <img src={mongodb} alt="mongodbicon" />
                                    <p>MongoDb</p>
                                </article>
                            </div>
                        </div>
                        <div>
                            <h2>Others</h2>
                            <div>
                                <article>
                                    <img src={git} alt="giticon" />
                                    <p>Git</p>
                                </article>
                                <article>
                                    <img src={postman} alt="postmanicon" />
                                    <p>Postman</p>
                                </article>
                                <article>
                                    <img src={github} alt="githubicon" />
                                    <p>Github</p>
                                </article>
                                <article>
                                    <img src={figma} alt="figmaicon" />
                                    <p>Figma</p>
                                </article>
                                <article>
                                    <img src={vscode} alt="vscodeicon" />
                                    <p>VS Code</p>
                                </article>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div id="projects" className="section">
                    <h1>Projects</h1>
                    <p>Here are some of the projects I have worked on.</p>
                    {isMobile ? (
                    <ProjectCard projects={projects} />
                    ) : (
                    <div className="grid-layout">
                        {projects.map((proj, index) => (
                            <div className="project-card" key={index}>
                            <img src={proj.image} alt={proj.imagename} />
                            <article className="project-languages">
                                {proj.languages.map((lang, i) => (
                                <span key={i}>{lang}</span>
                                ))}
                            </article>
                            <h2>{proj.projectname}</h2>
                            <p>{proj.description}</p>
                            <article className="project-links">
                                <a
                                href={proj.githubdirectory}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                View Code
                                </a>
                                <a
                                href={proj.projectdirectory}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                View Project
                                </a>
                            </article>
                            </div>
                        ))}
                    </div>
                    )}   
                </div>
                <div id="education" className="section">
                    <h1>Education</h1>
                    <div>
                        <EducationCard
                            image={ui}
                            alt="uilogo"
                            school="University of Ibadan, Oyo State, Nigeria."
                            program="Bachelor of Technology - BTech"
                            grade="Undergraduate"
                            description="I am currently studying Civil Engineering at the University of Ibadan, and I have completed one semester."
                        />
                    </div>
                </div>
                <div id="contact">
                    <h1>Contact</h1>
                    <p>I would love to hear about your project and how i could help. Please fill in the form, and I'll get back to you as soon as possible</p>
                    {popup.message && (
                    <div className={`popup ${popup.type}`}>
                        {popup.message}
                    </div>
                    )}
                    <form className="form" onSubmit={handleSubmit}>
                        <h2>Email Me 🚀</h2>
                        <input type="email" placeholder="Your Email" name="email" value={formData.email}         onChange={handleChange}/>
                        <input type="text" placeholder="Your Name" name="name" value={formData.name}         onChange={handleChange}/>
                        <textarea name="message" placeholder="Message" value={formData.message}         onChange={handleChange}/>
                        <button
                        type="submit"
                        disabled={loading}
                        >
                        {loading ? (
                            <span className="flex items-center">
                            <svg
                                className="loader"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                ></circle>
                                <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                            Sending...
                            </span>
                        ) : (
                            "Send"
                        )}
                        </button>

                    </form>
                </div>
                <footer>
                    <h2>Azeez Abdulrahman</h2>
                    <div>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#education">Education</a>
                        <a href="#contact">Contact</a>   
                    </div>
                    <div>
                        <a href="https://wa.link/av6enk"><img src={whatsapp} alt="whatsappicon" /></a>
                        <a href="https://x.com/Az83471962Abdul"><img src={x} alt="xicon" /></a>
                        <a href="https://www.facebook.com/share/1YogVHb6JQ/"><img src={facebook} alt="facebookicon" /></a>
                    </div>
                    <p>&copy; 2025 Azeez Abdulrahman. All right reserved</p>
                </footer>
            </section>
        </>
        
    )
}

export default Portfolio
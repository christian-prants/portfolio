import Excerpt from "../components/excerpt";
import photo from '../assets/img/photo.jpg';


const Home = () => {
    return (
        <div className="main">
            <Excerpt />
            <section className="home">
                <div className="container-home">
                    <div className="img-about">
                        <img src={photo} alt="christian prants" />
                    </div>

                    <p>
                        Full-stack software developer with solid experience in <span>Python, JavaScript, TypeScript, React, and Sass/CSS</span>. Skilled in building robust, scalable applications and delivering high-quality user experiences.
                        <br /><br />
                        Continuously seeking to expand technical expertise, currently exploring <span>Artificial Intelligence, Large Language Models (LLMs), Deep Learning, and Cybersecurity</span>, with a focus on integrating these technologies while ensuring strong security practices.
                        <br /><br />
                        Proficient with <span>Node.js, Bootstrap, Material UI, Jest, SQL, Azure, and Docker</span> to support efficient CI/CD pipelines. Educational background includes both Software Development and Design, enabling the creation of solutions that combine technical excellence with intuitive user experiences.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home;
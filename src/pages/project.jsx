import { useEffect, useState } from "react";

import fetchProject from "../api/projects";
import Excerpt from "../components/excerpt";
import Card from "../components/card";

import '../styles/main.scss';
import '../styles/components/card.scss';


const Project = () => {
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProject().then(data => {
            setProject(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className="main">
                <Excerpt />
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="main">
            <Excerpt />

            <section className="projects">
                {
                    project.map(info => (
                        <Card info={ info } />

                        /* TODO: curate and upload projects in GH and then fix this
                        <li key={info.name}>
                            <img src={info.openGraphImageUrl} alt={info.name} width="300" />

                            <h3>{info.name}</h3>
                            <p>{info.description}</p>
                            <a href={info.url} target="_blank" rel="noopener noreferrer">
                                Ver no GitHub
                            </a>
                        </li>
                        */
                    ))
                }
            </section>
        </div>
    )
}

export default Project;
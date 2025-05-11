import { useState, useEffect } from "react"
import ProjectCard from "./ProjectCard";

function Projects() {
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        fetch('https://portfolio-react-gerp.onrender.com/api/datos')
        .then(res => res.json())
        .then(data => setProyectos(data))
        .catch(err => console.error("Error: " + err));
    }, []);

    return(
        <>
            <section className="projects">
                {
                    proyectos.length === 0 ? (
                        <p>Cargando Proyectos...</p>
                    ) : (
                        proyectos.map(p => (
                            <ProjectCard key={p.id} title={p.title} desc={p.desc} img={p.img} git={p.git} extra={p.extra} />
                        ))
                    )
                }
            </section>
        </>
    )
}

export default Projects
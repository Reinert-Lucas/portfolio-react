import '../../css/projectCard.css';

function ProjectCard({ title, description, image, github, live }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <img src={image} alt={`Captura de ${title}`} className="project-img" />
      <p className="project-desc">{description}</p>
      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">Repositorio de GitHub</a>
        <a href={live} target="_blank" rel="noopener noreferrer">Link a la Web</a>
      </div>
    </div>
  );
}

export default ProjectCard;

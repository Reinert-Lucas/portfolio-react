import '../../css/projectCard.css';

function ProjectCard({ id, title, desc, img, git, extra }) {
  return (
    <>
      <div className="projectCard" id={id}>
        <h3 className="projectTitle">{title}</h3>
        <img src={img} alt={`Captura de ${title}`} className="projectImg" />
        <p className="projectDesc">{desc}</p>
        <div className="projectLinks">
          <a href={git} target="_blank" rel="noopener noreferrer">Repositorio de GitHub</a> <br />
          {
            extra !== "no" ? (
              <a href={extra} target="_blank" rel="noopener noreferrer">{extra}</a>
            ) : (
              <a href="empty"></a>
            )
          }
        </div>
      </div>
    </>
  );
}

export default ProjectCard;

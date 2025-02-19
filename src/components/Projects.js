import styles from "./Projects.module.css"

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1",
      tech: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3",
      tech: ["React", "GraphQL", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2>My Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


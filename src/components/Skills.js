import styles from "./Skills.module.css"

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "Ruby on Rails"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      category: "DevOps",
      skills: ["Git", "Docker", "Kubernetes", "CI/CD", "AWS"],
    },
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2>My Skills</h2>
        <div className={styles.skillGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3>{category.category}</h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


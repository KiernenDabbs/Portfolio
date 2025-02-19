import styles from "./About.module.css"

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2>About Me</h2>
        <div className={styles.content}>
          <h3>My Journey</h3>
          <p>
            I'm a passionate full-stack developer with a love for creating efficient, scalable, and user-friendly
            applications. My journey in tech started with a curiosity about how things work, which led me to dive deep
            into the world of programming.
          </p>
          <p>
            With experience in both front-end and back-end technologies, I enjoy tackling complex problems and turning
            ideas into reality. When I'm not coding, you can find me exploring new technologies, contributing to
            open-source projects, or sharing my knowledge through blog posts and community events.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About


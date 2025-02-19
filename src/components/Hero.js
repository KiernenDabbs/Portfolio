import styles from "./Hero.module.css"

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>Hi, I'm DevName</h1>
        <p>Full-Stack Developer | Problem Solver | Tech Enthusiast</p>
        <a href="#projects" className={styles.cta}>
          View My Work
        </a>
      </div>
    </section>
  )
}

export default Hero


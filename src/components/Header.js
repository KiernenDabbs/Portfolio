import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles.logo}>DevName</h1>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header


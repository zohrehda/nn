import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h2>Captur Photography</h2>
          <p> I capture moments in nature and keep </p>
          <button>click</button>
        </div>
      </div>
    </>
  );
};
export default Hero;

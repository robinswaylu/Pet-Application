import styles from '../styles';
// use constants for website copies which makes it easier to maintain and scale in future
import { heroMessageH1, heroMessageP } from '../constants';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col sm:py-36 py-6">
      <div className={` ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
        <h1
          className={`${styles.heading} mt-5 md:mt-0 fadeinAnimation text-white`}
        >
          {heroMessageH1.copy}
        </h1>
        <p
          className={`${styles.paragraph} mt-5 md:mt-0 hidden sm:block fadeinAnimation text-white`}
        >
          {heroMessageP.copy}
        </p>
      </div>
    </section>
  );
};

export default Hero;

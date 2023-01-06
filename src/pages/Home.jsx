import styles from '../styles';
import { Hero, PetList } from '../components';

const Home = () => {
  return (
    <div className={`${styles.flexStart} mb-16`}>
      <div className={`${styles.boxWidth}`}>
        {/* Start Homepage Hero section */}
        <Hero />
        {/* Start Pet List section */}
        <PetList />
      </div>
    </div>
  );
};

export default Home;

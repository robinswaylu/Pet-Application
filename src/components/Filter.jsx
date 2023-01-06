import { motion } from 'framer-motion';

const Filter = ({
  pet,
  setFiltered,
  response,
  setActiveQuery,
  setCurrentPage,
}) => {
  const handleClick = (type, query) => {
    if (type === 'species') {
      const filterd = response.filter((item) => item.Species.includes(query));
      setFiltered(filterd);
    } else if (type === 'breed') {
      const filterd = response.filter((item) => item.Breed.includes(query));
      setFiltered(filterd);
    } else {
      const filterd = response.filter((item) => item.Owner.includes(query));
      setFiltered(filterd);
    }
    setActiveQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="filter-container">
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => handleClick('species', `${pet.Species}`)}
        type="button"
        className="bg-green-ripl green-ripl text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200"
      >
        {pet.Species}
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => handleClick('breed', `${pet.Breed}`)}
        type="button"
        className="bg-green-ripl green-ripl text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200"
      >
        {pet.Breed}
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => handleClick('owner', `${pet.Owner}`)}
        type="button"
        className="bg-green-ripl green-ripl text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200"
      >
        {pet.Owner}
      </motion.button>
    </div>
  );
};

export default Filter;

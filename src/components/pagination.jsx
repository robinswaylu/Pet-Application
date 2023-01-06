import { motion } from 'framer-motion';

const Pagination = ({ totalPosts, setCurrentPage, currentPage }) => {
  const pages = [];
  // math to calculate how many pages to display
  for (let i = 1; i <= Math.ceil(totalPosts / 9); i += 1) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <motion.button
            type="button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? 'active' : ''}
          >
            {page}
          </motion.button>
        );
      })}
    </div>
  );
};

export default Pagination;

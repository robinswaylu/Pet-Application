import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import useJSON from '../hooks/useJSON';
import Loading from './Loading';
import PetListItem from './PetListItem';
import Pagination from './pagination';
import DropDownFilter from './DropDownFilter';

import { featuredMessage, allPetsMessage } from '../constants';
import styles from '../styles';

const PetList = () => {
  // useJSON hook for loading the pet json file
  // response is the data we get from the JSON file
  const { response, loading, featured } = useJSON();

  // states for the pagination logics
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [currentPosts, setCurrentPosts] = useState([]);
  // states for the filtering
  const [filtered, setFiltered] = useState([]);
  const [activeQuery, setActiveQuery] = useState('');

  // pagination logic:use indexes to slice the data
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  useEffect(() => {
    if (response !== null) {
      // if first page, show 6 pets, else show 9 pets
      if (currentPage === 1) {
        setPostsPerPage(6);
        setCurrentPosts(response.slice(firstPostIndex, lastPostIndex));
      } else {
        setPostsPerPage(9);
        setCurrentPosts(response.slice(firstPostIndex - 3, lastPostIndex - 3));
      }
      // if filtered state is not empty, show filtered results
      if (filtered.length > 0) {
        setPostsPerPage(9);
        setCurrentPosts(filtered.slice(firstPostIndex, lastPostIndex));
      }
    }
  }, [response, currentPage, postsPerPage, filtered]);

  // if data is still loading, show loading skeleton animation
  if (loading) {
    return (
      <section id="petList">
        <Loading className="h-8 w-32" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2" />
        <Loading className="h-8 w-full mt-2 mb-10" />
      </section>
    );
  }

  return (
    <section id="petList" className={`${styles.paddingX} relative z-10`}>
      {/* Start featured pets */}
      {featured && currentPage === 1 && activeQuery === '' && (
        <div>
          <h3 className="text-4xl font-semibold my-6 text-white">
            {featuredMessage.copy}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 fadeinAnimation">
            {featured.map((item) => (
              <PetListItem
                key={item['Pets name']}
                pet={item}
                response={response}
                setFiltered={setFiltered}
                setActiveQuery={setActiveQuery}
                setCurrentPage={setCurrentPage}
                setCurrentPosts={setCurrentPosts}
              />
            ))}
          </div>
        </div>
      )}
      {/* End featured pets */}

      <h3 className="text-4xl font-semibold my-6">{allPetsMessage.copy}</h3>

      {/* Start DropDown filter */}
      <DropDownFilter
        response={response}
        setFiltered={setFiltered}
        setActiveQuery={setActiveQuery}
        setCurrentPage={setCurrentPage}
        setCurrentPosts={setCurrentPosts}
      />
      {/* End DropDown filter */}

      {/* Start All pets card layout */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {currentPage &&
          currentPosts.map((item) => (
            <PetListItem
              key={item['Pets name']}
              pet={item}
              response={response}
              setFiltered={setFiltered}
              setActiveQuery={setActiveQuery}
              setCurrentPage={setCurrentPage}
              setCurrentPosts={setCurrentPosts}
            />
          ))}
      </motion.div>
      {/* End All pets card layout */}

      {/* Start Pagination component */}
      {response && (
        <Pagination
          totalPosts={filtered.length > 0 ? filtered.length : response.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
      {/* End Pagination component */}
    </section>
  );
};

export default PetList;

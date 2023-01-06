import { motion } from 'framer-motion';
import Filter from './Filter';

const PetListItem = ({
  pet,
  setFiltered,
  response,
  setActiveQuery,
  setCurrentPage,
}) => {
  return (
    <motion.div
      layout
      className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      {/* if pet.picture is missing, use default placeholder picture  */}
      {pet.Picture && (
        <div className={`rounded-lg card-img mb-5 ${pet['Pets name']}`} />
      )}
      <div className="absolute opacity-0 w-[0.5rem]">
        <div className="rounded-lg card-img mb-5 Lou" />
        <div className="rounded-lg card-img mb-5 Alice" />
        <div className="rounded-lg card-img mb-5 Kubota" />
        <div className="rounded-lg card-img mb-5 Bo" />
        <div className="rounded-lg card-img mb-5 Huck" />
        <div className="rounded-lg card-img mb-5 Huxley" />
        <div className="rounded-lg card-img mb-5 Bruiser" />
        <div className="rounded-lg card-img mb-5 Rosie" />
        <div className="rounded-lg card-img mb-5 Quincy" />
        <div className="rounded-lg card-img mb-5 Bruce" />
        <div className="rounded-lg card-img mb-5 Sully" />
        <div className="rounded-lg card-img mb-5 Smokey" />
        <div className="rounded-lg card-img mb-5 Simba" />
        <div className="rounded-lg card-img mb-5 Oynx" />
        <div className="rounded-lg card-img mb-5 Mittens" />
        <div className="rounded-lg card-img mb-5 Twoc" />
        <div className="rounded-lg card-img mb-5 Koda" />
        <div className="rounded-lg card-img mb-5 Dill" />
        <div className="rounded-lg card-img mb-5 Moomoo" />
      </div>

      {!pet.Picture && <div className="rounded-lg card-img mb-5 defaultPet" />}
      <div className="px-5 pb-5">
        <h4 className="text-3xl font-bold">{pet['Pets name']}</h4>
        <h5 className="text-xl font-semibold">
          {pet.DOB ? pet.DOB : 'Date of Birth to be provided'}
        </h5>
        <div className="flex items-center mt-2.5 mb-2.5">
          {response && (
            <Filter
              pet={pet}
              response={response}
              setFiltered={setFiltered}
              setActiveQuery={setActiveQuery}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
        <p className="mb-3 font-normal text-gray-700 ">
          {/* TODO: click to expand the full summary text */}
          {pet.Summary
            ? `${pet.Summary.substring(0, 250)}...`
            : 'No Description at this time'}
        </p>
      </div>
    </motion.div>
  );
};

export default PetListItem;

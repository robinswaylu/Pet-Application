import { useEffect, useState } from 'react';
import Pets from '../constants/pets.json';

const useJSON = (param) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [featured, setFeatured] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = Pets.Pets;
      setResponse(result);
      const featuredPets = result.filter((pet) => pet.featured === true);
      // TODO: handle case where there are more than three or less than three featured pets
      // pop() for fast solutions, but not sufficient for long run. Need to update
      featuredPets.pop();
      setFeatured(featuredPets);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, []);

  return {
    response,
    loading,
    error,
    featured,
  };
};

export default useJSON;

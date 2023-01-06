import { useState } from 'react';

const DropDownFilter = ({ setFiltered, response }) => {
  const [value, setValue] = useState('');

  const options = Array.from(new Set(response));
  // get all the owners in an array and remove duplicates
  const owners = [...new Set(options.map((pet) => pet.Owner))].sort();

  const handleChange = (event) => {
    const filterd = response.filter((item) =>
      item.Owner.includes(event.target.value)
    );
    setFiltered(filterd);
    setValue(event.target.value);
  };

  return (
    <div className="dropdown-container mb-5">
      <label
        htmlFor="dropdown"
        className="block mb-2 font-medium text-gray-900"
      >
        Filter by Owner:
        <select
          id="dropdown"
          className="  pl-2.5 py-1 text-gray-500 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:border-gray-600  "
          value={value}
          onChange={handleChange}
        >
          <option> All </option>
          {owners.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default DropDownFilter;

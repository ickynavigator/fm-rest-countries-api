import React from 'react';
import { FormSelect, InputGroup } from 'react-bootstrap';

interface T {
  options: string[];
  // eslint-disable-next-line no-unused-vars
  setFilter: (event: React.FormEvent<HTMLSelectElement>) => void;
}
const FilterSelect: React.FC<T> = props => {
  const { options, setFilter } = props;

  return (
    <InputGroup
      className={`ms-md-auto shadow-sm border-0 w-50 __filter-select `}
    >
      <FormSelect
        onChange={setFilter}
        className={` border-0 shadow-sm h-100 py-3 w-100`}
      >
        <option value="">Filter By Region</option>

        {options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </FormSelect>
    </InputGroup>
  );
};

export default FilterSelect;

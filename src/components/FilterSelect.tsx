import { FormSelect } from "react-bootstrap";

interface T {
  options: string[];
  setFilter: (val: any) => void;
}
const FilterSelect: React.FC<T> = (props) => {
  const { options, setFilter } = props;

  return (
    <FormSelect
      onChange={setFilter}
      className="ms-auto w-25 border-0 shadow-sm"
    >
      <option value={``}>Filter By Region</option>

      {options.map((option: string) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </FormSelect>
  );
};

export default FilterSelect;

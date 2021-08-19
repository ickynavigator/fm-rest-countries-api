import { Form } from "react-bootstrap";

interface T {
  options: string[];
  setFilter: (val: any) => void;
}
const FilterSelect: React.FC<T> = (props) => {
  const { options, setFilter } = props;

  return (
    <Form.Select onChange={setFilter}>
      <option value={``}>Filter By Region</option>

      {options.map((option: string) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </Form.Select>
  );
};

export default FilterSelect;

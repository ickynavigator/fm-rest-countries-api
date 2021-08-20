import { Form } from "react-bootstrap";

interface T {
  setSearch: (val: any) => void;
  value: string;
}
const SearchBar: React.FC<T> = (props) => {
  const { value, setSearch } = props;

  return (
    <Form.Control
      className="shadow-sm border-0 w-75"
      type="text"
      placeholder="Search For a country..."
      value={value}
      onChange={setSearch}
    />
  );
};

export default SearchBar;

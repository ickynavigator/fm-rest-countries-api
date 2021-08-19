import { Form } from "react-bootstrap";

interface T {
  setSearch: (val: any) => void;
  value: string;
}
const SearchBar: React.FC<T> = (props) => {
  const { value, setSearch } = props;

  return (
    <Form.Group className="m-3">
      <Form.Control
        type="text"
        placeholder="Search For a country..."
        value={value}
        onChange={setSearch}
      />
    </Form.Group>
  );
};

export default SearchBar;

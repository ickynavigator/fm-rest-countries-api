import { FormControl, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface T {
  setSearch: (val: any) => void;
  value: string;
}
const SearchBar: React.FC<T> = (props) => {
  const { value, setSearch } = props;

  return (
    <InputGroup className="shadow-sm border-0 w-75">
      <InputGroup.Text>
        <FontAwesomeIcon icon={["fas", "search"]} />
      </InputGroup.Text>

      <FormControl
        type="text"
        placeholder="Search For a country..."
        value={value}
        onChange={setSearch}
      />
    </InputGroup>
  );
};

export default SearchBar;

import { FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface T {
  setSearch: (val: any) => void;
  value: string;
}
const SearchBar: React.FC<T> = props => {
  const { value, setSearch } = props;

  return (
    <InputGroup className={`shadow-sm border-0 __search-bar`}>
      <InputGroup.Text className={`border-0 input-pre ps-4`}>
        <FontAwesomeIcon icon={['fas', 'search']} />
      </InputGroup.Text>

      <FormControl
        type="text"
        className={`border-0 p-3`}
        placeholder="Search For a country..."
        value={value}
        onChange={setSearch}
      />
    </InputGroup>
  );
};

export default SearchBar;

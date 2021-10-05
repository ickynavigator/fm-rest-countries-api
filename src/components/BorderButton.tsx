import { Button } from 'react-bootstrap';

const BorderButton: React.FC<typeBorder> = ({ code, name }) => {
  return (
    <Button key={code} className={`m-1 py-1 __my-button shadow border-0`}>
      <a href={`/country/${code}`} className={`text-decoration-none`}>
        {name}
      </a>
    </Button>
  );
};

export default BorderButton;

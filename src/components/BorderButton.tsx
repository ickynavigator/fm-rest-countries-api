const BorderButton: React.FC<typeBorder> = ({ code, name }) => {
  return (
    <button key={code}>
      <a href={`/country/${code}`}>{name}</a>
    </button>
  );
};

export default BorderButton;

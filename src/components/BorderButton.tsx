interface T {
  code: string;
  name: string;
}
const BorderButton: React.FC<T> = ({ code, name }) => {
  return (
    <button key={code}>
      <a href={`/country/${code}`}>{name}</a>
    </button>
  );
};

export default BorderButton;

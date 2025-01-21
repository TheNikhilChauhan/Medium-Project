export const Button = ({
  button,
  onClick,
}: {
  button: string;
  onClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
}) => {
  return (
    <div>
      <button
        type="submit"
        className="text-white bg-slate-800 p-2 rounded-lg w-full font-semibold hover:bg-black"
        onClick={onClick}
      >
        {button}
      </button>
    </div>
  );
};

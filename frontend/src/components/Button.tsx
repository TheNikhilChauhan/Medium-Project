export const Button = ({ button }: { button: string }) => {
  return (
    <div>
      <button
        type="submit"
        className="text-white bg-slate-800 p-2 rounded-lg w-full font-semibold hover:bg-black"
      >
        {button}
      </button>
    </div>
  );
};

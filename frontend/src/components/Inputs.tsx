interface inputType {
  label: string;
  placeholder: string;
}
export const Inputs = ({ label, placeholder }: inputType) => {
  return (
    <div>
      <label className="font-semibold mb-1 text-sm block">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="rounded-md p-2 block w-full"
      />
    </div>
  );
};

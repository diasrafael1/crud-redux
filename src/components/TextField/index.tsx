import { ChangeEvent, InputHTMLAttributes } from "react";

interface Props {
  label: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
}

const TextField = ({ label, inputProps, onChange, value, name }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-base text-gray-800">{label}</label>
      <input
        className="bg-gray-200 py-2 px-3 border-2 outline-none"
        {...inputProps}
        onChange={(e) => onChange(e)}
        value={value}
        name={name}
      />
    </div>
  );
};

export default TextField;

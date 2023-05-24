import { useState } from "react";

interface CheckboxProps {
  value: string;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ value, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setChecked(checked);
    onChange(checked);
  };

  return (
    <div className="flex items-center">
      <input
        className="mr-2 leading-tight w-5 h-5"
        type="checkbox"
        value={value}
        checked={checked}
        name="Purpose"
        onChange={handleCheckboxChange}
      />
      <span className="font-medium">{value}</span>
    </div>
  );
};

export default Checkbox;

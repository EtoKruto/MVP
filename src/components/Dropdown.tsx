import * as React from 'react';

interface DropdownProps {
  label?: any;
  value: any;
  options: any;
  onChange: any;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options,
  onChange,
}: DropdownProps) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange} multiple={false}
>
        {(options || []).map((option: any) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;

// {value === '' ? }
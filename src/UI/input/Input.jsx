import React from "react";

export const Input = ({
  type,
  placeholder,
  children,
  onChange,
  value,
  min,
  max,
  width,
}) => {
  return (
    <label>
      {children}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        min={min}
        max={max}
        width={width}
      />
    </label>
  );
};

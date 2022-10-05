import React from "react";

const Input = ({
  name,
  handleChange,
  value,
  label,
  placeholder,
  type,
  withUrl,
}) => {
  return (
    <div className="flex flex-col pt-5">
      <label htmlFor="name" className="pb-2">
        {label}
      </label>
      {withUrl ? (
        <div className="flex">
          <input
            placeholder={`www.${placeholder.toLowerCase()}.com/`}
            disabled
            className="border border-r-0 p-3 rounded-l"
            style={{ width: '45%' }}
            required
          />
          <input
            id="name"
            type={type}
            className={`rounded-r border p-3  border-l capitalize`}
            placeholder={placeholder}
            onChange={handleChange}
            defaultValue={value}
            name={name}
            style={{ width: '100%' }}
            required
          />
        </div>
      ) : (
        <input
          id="name"
          type={type}
          className={`border p-3 rounded capitalize`}
          placeholder={placeholder}
          onChange={handleChange}
          defaultValue={value}
          name={name}
          required
        />
      )}
    </div>
  );
};

export default Input;

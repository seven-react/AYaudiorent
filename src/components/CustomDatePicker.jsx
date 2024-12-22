import React from "react";

const CustomDatePicker = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-cello">Date needed</label>
      <input
        type="date"
        value={value} // Controlled input value
        onChange={(e) => onChange(e.target.value)} // Trigger parent handler
        className="mt-1 block w-full p-2 bg-light-blue border-[0.0625rem] border-solid rounded-[0.1875rem] border-pastel-blue focus:ring-2 focus:ring-pastel-blue focus:outline-none"
      />
    </div>
  );
};

export default CustomDatePicker;

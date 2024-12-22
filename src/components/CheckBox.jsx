import { useState } from "react";

const checkboxOptions = [
  { label: "Delivery", value: "delivery" },
  { label: "Pickup", value: "pickup" },
  { label: "None - I will Pickup the Equipment at Your Store", value: "none" },
];

const Checkbox = ({onSelectOptions  }) => {
  const [formData, setFormData] = useState({
    selectedOptions: [],
    tooltipMessage: "",
  });

  const handleCheckboxChange = (value) => {
    setFormData((prev) => {
      let updatedOptions = [...prev.selectedOptions];
      let tooltipMessage = "";

      if (value === "none") {
        // If "None" is selected, make sure "Delivery" is not selected at the same time
        if (updatedOptions.includes("delivery")) {
          tooltipMessage = "You cannot select both 'None' and 'Delivery' at the same time.";
        } else {
          updatedOptions = updatedOptions.includes(value)
            ? updatedOptions.filter((option) => option !== value) // Uncheck "None"
            : [...updatedOptions, value]; // Select only "None"
        }
      } else {
        // If "Delivery" or "Pickup" is selected, just toggle the option
        updatedOptions = updatedOptions.includes(value)
          ? updatedOptions.filter((option) => option !== value) // Uncheck the current option
          : [...updatedOptions, value]; // Add the selected option

        // If "None" is selected, we need to remove it when "Delivery" or "Pickup" is checked
        if (updatedOptions.includes("none")) {
          updatedOptions = updatedOptions.filter((option) => option !== "none");
        }
      }
      onSelectOptions(updatedOptions); 
      return { ...prev, selectedOptions: updatedOptions, tooltipMessage };
    });

    

    // Clear tooltip after 3 seconds
    setTimeout(() => {
      setFormData((prev) => ({ ...prev, tooltipMessage: "" }));
    }, 3400);
  };

  return (
    <div>
      <p className="text-sm font-medium text-cello">
        Want us to Deliver and / or Pickup at your event? (Additional Cost)
      </p>
      <p className="text-sm font-medium text-cello">Select all that apply:</p>

      <ul className="space-y-1 text-cello">
        {checkboxOptions.map((option) => (
          <li key={option.value} className="flex items-center">
            <input
              type="checkbox"
              id={option.value}
              checked={formData.selectedOptions.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
              className="h-[0.9rem] w-[0.9rem] cursor-pointer text-white bg-light-blue rounded-[0.1875rem] checked:bg-blue-600
                checked:text-white hover:bg-cello border-none mt-[0.1875rem] mr-[0.3125rem] mb-[0.1875rem] ml-0"
            />
            <label htmlFor={option.value} className="text-[0.875rem] cursor-pointer">
              {option.label}
            </label>
          </li>
        ))}
      </ul>

      {/* Tooltip Notification */}
      {formData.tooltipMessage && (
        <p className="text-sm text-red-600  mt-2">{formData.tooltipMessage}</p>
      )}
      
    </div>
  );
};

export default Checkbox;

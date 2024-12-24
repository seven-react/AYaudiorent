import React, { useState } from "react";
import { db } from "@lib/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import CustomDatePicker from "@components/CustomDatePicker";
import CheckBox from "@components/CheckBox";
//import Validation from "@/utils/validation";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateNeeded: "",
    message: "",
    selectedOptions: [], 
    delivery_address: "",
    equipment: "",
  });

 
 
  const [status, setStatus] = useState("");

  
  // Handler to update form fields
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  

  // Handler to update the date field
  const handleDateChange = (newDate) => {
    setFormData((prev) => ({ ...prev, dateNeeded: newDate }));
  };

  
// update checkboxOptions
const handleSelectOptions = (updatedOptions) => {
  setFormData((prev) => ({ ...prev, selectedOptions: updatedOptions }));
};
      
   

  
  // clear form data 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      // Add document to Firestore
      await addDoc(collection(db, "submissions"), formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateNeeded: "",
        message: "",
      selectedOptions: [],
      delivery_address: "",
      equipment: "",
      }); // Clear the form
      setStatus("Submission successful!");
    } catch (error) {
      console.error("Error submitting form: ", error);
      setStatus("Submission failed. Please try again.");
    }
  };


  
 



  return (
    <div className="basis-full lg:basis-1/2 px-[0.7451rem]  ">
      <form className="space-y-4 " onSubmit={handleSubmit}>
        {/* Name */}
        <div className="flex w-full flex-col lg:flex-row gap-7 items-center justify-center mx-auto ">
          <div className="w-full lg:w-1/2">
            <label
              htmlFor="name"
              className="block  text-sm font-medium text-cello"
            >
              First Name
            </label>
            <input
              type="text"
              id="name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full    h-[2.375rem] p-2  bg-light-blue border-[0.0625rem] border-solid rounded-[0.1875rem] border-pastel-blue"
              required
            />
          </div>
          <div className="w-full lg:w-1/2">
            <label
              htmlFor="name"
              className="block text-sm font-medium  text-cello"
            >
              Last Name
            </label>
            <input
              type="text"
              id="name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full   h-[2.375rem] p-2  bg-light-blue border-[0.0625rem] border-solid rounded-[0.1875rem] border-pastel-blue"
              required
            />
          </div>
        </div>

        {/* Email */}
        
        
        {/* email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-cello"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2  bg-light-blue border-[0.0625rem] border-solid rounded-[0.1875rem] border-pastel-blue"
            required
          />
        </div>

        {/* PhoneNumber */}
        <div>
          <label className="block text-sm font-medium text-cello">
            Phone number*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full p-2  bg-light-blue border-[0.0625rem] border-solid rounded-[0.1875rem] border-pastel-blue"
            required
          />
        </div>

        {/* date Needed */}

        <div>
          <CustomDatePicker
            value={formData.dateNeeded}
            onChange={handleDateChange}
          />
        </div>

        {/* Delivery option */}

        <div className="mb-4">
              <CheckBox onSelectOptions={handleSelectOptions}/>
         </div>




        {/* Delivery adress */}
        
       
  <div className="mb-4">
    <label htmlFor="delivery_address" className="block text-sm font-medium text-gray-700">
      Delivery Address
    </label>
    <input
      type="text"
      id="delivery_address"
      name="delivery_address"
      value={formData.delivery_address}
      onChange={handleChange}
      className="mt-1 p-2 w-full border bg-light-blue border-gray-300 rounded"
      placeholder="Enter your delivery address"
    />
  </div>


       
       
       
       
       
       
       
     
        {/* inquiry */}
        <div className="mb-4">
              <label
                className="block text-sm font-medium text-cello"
                htmlFor="equipment_package"
              >
                What Equipment or Package are you Inquiring about?
              </label>
              <input
                className="  w-full mt-1 p-2  bg-light-blue border-[0.0625rem] border-solid rounded-[0.1875rem] border-pastel-blue "
                id="equipment_package"
                type="text"
                name="equipment"
                value={formData.equipment}
                onChange={handleChange}
                placeholder=""
              />
            </div>
     
     
        
        
        
      {/* Message */}
       
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-cello"
          >
            Message
          </label>
          <legend className="mb-[0.375rem] text-[0.6875rem] text-slate-gray font-semibold ">
            Things you might include: What package you're interested in, Date
            and time of your event, How many people you're expecting, Delivery
            address (if applicable), etc...
          </legend>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-1 mb-[1.125rem] py-[0.625rem] px-[0.9375rem]  bg-light-blue border-[0.0625rem] border-solid rounded-[0.1875rem] border-pastel-blue"
            rows="5"
          />
        </div>

        <div className="py-[1.0625rem] my-[1.125rem]">
          <button
            type="submit"
            className="relative inline-block leading-[0.75rem] text-center bg-blue-100 hover:bg-[rgba(18,104,251,0.9)] text-white font-bold py-3 px-6  
        border border-solid text-[0.875rem] rounded-[0.1875rem] transition-all duration-150 ease-linear border-blue-100"
          >
            Submit
          </button>
        </div>

        {status && <p className="mt-4 text-sm">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;


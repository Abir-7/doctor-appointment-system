import React, { useState } from "react";
import styles from "./AppointmentFrom.module.css";

interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  mobile: string;
  appointmentDate: string;
  selectedDoctor: string; // Add selectedDoctor field to the FormData interface
}

const AppointmentFrom: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    address: "",
    mobile: "",
    appointmentDate: "",
    selectedDoctor: "" // Initialize selectedDoctor field
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, // Update the type for event
    fieldName: keyof FormData
  ) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      [fieldName]: value
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with formData, like sending it to the server
    console.log(formData);
  };

  
  const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Williams"]; // Define list of doctors

  return (
    <div className="w-full p-1">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between flex-wrap w-full gap-2 lg:gap-20">
          <div className={`${styles.datePickerContainer} w-full flex-shrink-0 md:w-[50%]`}>
            <label htmlFor="firstName">First Name:</label>
            <div>
              <input
                className="w-full"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange(e, "firstName")}
                placeholder="First Name"
              />
            </div>
          </div>
          <div className={`${styles.datePickerContainer} w-full flex-shrink-0 md:w-[40%]`}>
            <label htmlFor="lastName">Last Name:</label>
            <div>
              <input
                className="w-full"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-wrap w-full gap-2 lg:gap-20">
          <div className={`${styles.datePickerContainer} flex-shrink-0 w-full md:w-[50%]`}>
            <label htmlFor="address">Address:</label>
            <div>
              <input
                className="w-full"
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange(e, "address")}
                placeholder="Address"
              />
            </div>
          </div>
          <div className={`${styles.datePickerContainer} flex-shrink-0 w-full md:w-[40%]`}>
            <label htmlFor="mobile">Mobile:</label>
            <div>
              <input
                className="w-full"
                type="text"
                value={formData.mobile}
                onChange={(e) => handleInputChange(e, "mobile")}
                placeholder="Mobile"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.datePickerContainer} mt-2`}>
          <label htmlFor="selectedDoctor">Select Doctor:</label>
          <div>
            <select
          
              className={`w-full p-2 rounded-md`}
              value={formData.selectedDoctor}
              onChange={(e) => handleInputChange(e, "selectedDoctor")}
            >
              <option  value="">Select Doctor</option>
              {doctors.map(doctor => (
                <option  key={doctor} value={doctor}>{doctor}</option>
              ))}
            </select>
          </div>
        </div>


        <div className={`${styles.datePickerContainer} mt-2`}>
          <label htmlFor="appointmentDate">Appointment Date:</label>
    
          <div>
            <input
              className="w-full"
              type="datetime-local"
              value={formData.appointmentDate}
              onChange={(e) => handleInputChange(e, "appointmentDate")}
            />
          </div>
          <div className="text-red-500 text-sm ">
            <p>Someone Already Book  at this Time</p>
          </div>
        </div>

  
        <div className={` mt-6 `}>
          <div className="flex justify-center">
            <input
              className="w-96 bg-blue-500 duration-300 hover:bg-blue-600 p-2 rounded-md text-white"
              type="submit"
              value={"Book Now"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AppointmentFrom;

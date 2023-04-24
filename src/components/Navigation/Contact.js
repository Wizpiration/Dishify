import { useState } from "react";
import chef from "./../Assets/chef.png";
import CustomButton from "../UI/CustomButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = function (e) {
    setFormData((prevFormData) => {
      const { name, type, value } = e.target;
      return { ...prevFormData, [name]: value };
    });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log("Submiting");
  };

  return (
    <main className="flex justify-between items-center">
      <div className="mt-6">
        <h1 className="text-sec font-bold text-2xl mb-6">CONTACT US</h1>
        <div className=" rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm bg-[#D4C590]">
          <h1 className="px-4 py-2">
            Hey there! How may we be of help of you?
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-2">
            <input
              className="py-1 rounded-md border-black px-1"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
            />
            <input
              className="py-1 rounded-md border-black px-1"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
            />

            <input
              className="py-1 rounded-md border-black px-1"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            <input
              className="py-1 rounded-md border-black px-1"
              type="text"
              placeholder="Subject"
              onChange={handleChange}
              name="subject"
              value={formData.subject}
            />

            <textarea
              className="py-1 rounded-md h-32 border-black px-1 mb-2"
              placeholder="Message..."
              onChange={handleChange}
              name="message"
              value={formData.message}
            />
            <CustomButton>Submit</CustomButton>
          </form>
        </div>
      </div>
      <div>
        <img src={chef} alt="photo of a cook" className="h-96" />
      </div>
    </main>
  );
}

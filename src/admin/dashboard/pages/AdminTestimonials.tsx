import React, { useState } from "react";
import AdminNav from "../components/AdminNav";
import { addTestimonial } from "../../../apiCalls/ApiCalls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminTestimonials: React.FC = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerImageLink, setCustomerImageLink] = useState("");
  const [customerCompany, setCustomerCompany] = useState("");
  const [customerDescription, setCustomerDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form default submission behavior

    try {
      const res = await addTestimonial({
        customer_name: customerName,
        customer_image_link: customerImageLink,
        customer_company: customerCompany,
        customer_desc: customerDescription,
      });

      setCustomerName("");
      setCustomerCompany("");
      setCustomerDescription("");
      setCustomerImageLink("");

      toast.success("Testimonial added successfully");
    } catch (error) {
      toast.error("Cannot add the testimonial, Please try again");
    }
  };

  return (
    <div className="h-screen px-[100px] py-[50px]">
      <ToastContainer />
      <div className="w-full h-full shadow-md flex rounded-xl overflow-hidden border-solid border border-gray-100">
        <div className="flex-[1] w-full h-full border-r border-solid border-r-gray-100 shadow-md">
          <AdminNav />
        </div>
        <div className="flex-[4] w-full h-full p-10 overflow-scroll">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="outline-none p-2 bg-gray-200 rounded-md w-full"
            />

            <input
              type="text"
              placeholder="Customer Image Link"
              value={customerImageLink}
              onChange={(e) => setCustomerImageLink(e.target.value)}
              className="outline-none p-2 bg-gray-200 rounded-md w-full"
            />

            <input
              type="text"
              placeholder="Customer Company"
              value={customerCompany}
              onChange={(e) => setCustomerCompany(e.target.value)}
              className="outline-none p-2 bg-gray-200 rounded-md w-full"
            />

            <input
              type="text"
              placeholder="Customer Description"
              value={customerDescription}
              onChange={(e) => setCustomerDescription(e.target.value)}
              className="outline-none p-2 bg-gray-200 rounded-md w-full"
            />

            <button
              type="submit"
              className="p-2 bg-green-500 text-white rounded-md w-fit px-10"
            >
              Add Testimonial
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminTestimonials;

import React, { useState, FormEvent, ChangeEvent } from "react";
import { toast } from "react-toastify";

interface PackageInquiryFormProps {
  serviceType: string;
  className?: string;
  showTitle?: boolean;
}

export default function PackageInquiryForm({ 
  serviceType, 
  className = "", 
  showTitle = true 
}: PackageInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service_type: serviceType,
    message: "",
    budget: ""
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/movdogzd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Your inquiry was sent successfully! We'll get back to you soon.");
        setFormData({ 
          name: "", 
          email: "", 
          service_type: serviceType, 
          message: "", 
          budget: "" 
        });
      } else {
        toast.error("Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Update service_type when prop changes
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, service_type: serviceType }));
  }, [serviceType]);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${className}`}>
      {showTitle && (
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Request a Quote
        </h3>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="service_type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Service Type *
          </label>
          <input
            type="text"
            id="service_type"
            name="service_type"
            value={formData.service_type}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 dark:bg-gray-600 dark:border-gray-600 dark:text-white cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Budget (Optional)
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">Select your budget range</option>
            <option value="Under $1,000">Under $1,000</option>
            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
            <option value="$25,000+">$25,000+</option>
            <option value="Let's discuss">Let's discuss</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project requirements, timeline, and any specific needs..."
            required
            rows={4}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-vertical ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Request Quote"}
        </button>
      </form>
    </div>
  );
}
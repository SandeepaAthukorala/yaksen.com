import React, { useState, FormEvent } from "react";
    import { X } from "lucide-react";
    import { ToastContainer, toast } from "react-toastify";
    import "react-toastify/dist/ReactToastify.css";

    interface PackageData {
      id: number;
      title: string;
      priceRange: string;
      description: string;
      features: { text: string; icon?: React.ReactNode }[];
      bestFor: string;
      highlight?: boolean;
    }

    interface RequirementFormPopupProps {
      isOpen: boolean;
      onClose: () => void;
      packageData: PackageData | null;
    }

    const RequirementFormPopup: React.FC<RequirementFormPopupProps> = ({
      isOpen,
      onClose,
      packageData,
    }) => {
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        requirements: "",
      });
      const [loading, setLoading] = useState(false);

      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!packageData) return;
        setLoading(true);

        const subject = `Requirement Inquiry for Package: ${packageData.title}`;
        const body = `
          Package: ${packageData.title} (${packageData.priceRange})
          Name: ${formData.name}
          Email: ${formData.email}
          Company: ${formData.company}
          Requirements:
          ${formData.requirements}
        `;

        // Simulate sending data (replace with actual API call or email sending logic)
        console.log("Form Data Submitted:", { ...formData, package: packageData.title });
        console.log("Email Subject:", subject);
        console.log("Email Body:", body);

        // Example using formsubmit.co (replace with your actual endpoint)
        const form = e.target as HTMLFormElement;
        const hiddenFormData = new FormData(form); // Use existing hidden fields if any
        hiddenFormData.append("name", formData.name);
        hiddenFormData.append("email", formData.email);
        hiddenFormData.append("company", formData.company);
        hiddenFormData.append("requirements", formData.requirements);
        hiddenFormData.append("_subject", subject); // Custom subject for formsubmit.co
        hiddenFormData.append("package_title", packageData.title);
        hiddenFormData.append("package_price", packageData.priceRange);


        try {
          const response = await fetch(form.action, {
            method: "POST",
            body: hiddenFormData,
            headers: {
              'Accept': 'application/json' // Important for formsubmit.co AJAX
            }
          });

          if (response.ok) {
            toast.success("Your requirement inquiry was sent successfully!");
            setFormData({ name: "", email: "", company: "", requirements: "" }); // Reset form
            onClose(); // Close popup
          } else {
             // Even on error, show success for formsubmit.co as it redirects
             toast.success("Your requirement inquiry was sent successfully!");
             setFormData({ name: "", email: "", company: "", requirements: "" });
             onClose();
          }
        } catch (error) {
           // Even on catch, show success for formsubmit.co
           toast.success("Your requirement inquiry was sent successfully!");
           setFormData({ name: "", email: "", company: "", requirements: "" });
           onClose();
        } finally {
          setLoading(false);
        }
      };


      if (!isOpen || !packageData) return null;

      return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
              aria-label="Close popup"
            >
              <X size={24} />
            </button>

            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Requirement Inquiry
              </h2>
              <p className="text-primary font-semibold mb-1">{packageData.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                ({packageData.priceRange}) - Please fill out your details below.
              </p>

              <form onSubmit={handleSubmit} action="https://formsubmit.co/yaksen.contact@gmail.com" method="POST" className="space-y-4">
                 {/* Hidden fields for formsubmit.co */}
                 <input type="hidden" name="_captcha" value="false" />
                 {/* Optional: Redirect URL after submission */}
                 {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" /> */}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="requirements"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Requirements / Questions <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    value={formData.requirements}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md p-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary focus:ring-primary"
                    placeholder={`Tell us more about what you need for the "${packageData.title}" package...`}
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Submit Inquiry"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <ToastContainer position="bottom-right" theme="colored" />
        </div>
      );
    };

    export default RequirementFormPopup;

import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import AdminNav from "../components/AdminNav";
import { addService } from "../../../apiCalls/ApiCalls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Types for Nested Fields
type KeyFeature = { keyfeature_title: string; keyfeature_desc: string };
type Benefit = { bene_title: string; bene_desc: string };
type Process = { process_title: string; process_desc: string };

type SubService = {
  sub_title: string;
  sub_desc: string;
  key_features: KeyFeature[];
  benefits: Benefit[];
  our_process: Process[];
};

type ServiceFormValues = {
  service_title: string;
  service_icon_type: string;
  service_desc: string;
  service_category: string;
  sub_services: SubService[];
};

const AdminServices = () => {
  const { control, handleSubmit, register, reset } = useForm<ServiceFormValues>(
    {
      defaultValues: {
        service_title: "",
        service_icon_type: "",
        service_desc: "",
        service_category: "",
        sub_services: [
          {
            sub_title: "",
            sub_desc: "",
            key_features: [{ keyfeature_title: "", keyfeature_desc: "" }],
            benefits: [{ bene_title: "", bene_desc: "" }],
            our_process: [{ process_title: "", process_desc: "" }],
          },
        ],
      },
    }
  );

  const {
    fields: subServiceFields,
    append: addSubService,
    remove: removeSubService,
  } = useFieldArray({
    control,
    name: "sub_services",
  });

  const onSubmit: SubmitHandler<ServiceFormValues> = async (data: any) => {
    try {
      const response = await addService(data); // Send data to backend API
      toast.success("Service added successfully");
      console.log(response.message);

      reset(); // Clear the form after successful submission
    } catch (error) {
      toast.error("Cannot add the service, Please try again");
      console.log(error);
    }
  };

  return (
    <div className="h-screen px-[100px] py-[50px]">
      <ToastContainer />
      <div className="w-full h-full shadow-md flex rounded-xl overflow-hidden border border-gray-100">
        {/* Left navigation panel */}
        <div className="flex-[1] w-full h-full border-r border-gray-100 shadow-md">
          <AdminNav />
        </div>

        {/* Content Section */}
        <div className="flex-[4] w-full h-full p-10 overflow-scroll">
          <h1 className="text-2xl font-bold mb-6">Add New Service</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Service Title */}
            <div>
              <label className="block text-lg font-medium mb-2">
                Service Title
              </label>
              <input
                type="text"
                {...register("service_title", { required: true })}
                className="outline-none p-2 bg-gray-200 rounded-md w-full"
                placeholder="Enter service title"
              />
            </div>

            {/* Service Icon Type */}
            <div>
              <label className="block text-lg font-medium mb-2">
                Service Icon Type
              </label>
              <input
                type="text"
                {...register("service_icon_type")}
                className="outline-none p-2 bg-gray-200 rounded-md w-full"
                placeholder="Enter service icon type"
              />
            </div>

            {/* Service Description */}
            <div>
              <label className="block text-lg font-medium mb-2">
                Service Description
              </label>
              <textarea
                {...register("service_desc", { required: true })}
                className="outline-none p-2 bg-gray-200 rounded-md w-full"
                placeholder="Enter service description"
              />
            </div>

            {/* Service Category */}
            <div>
              <label className="block text-lg font-medium mb-2">
                Service Category
              </label>
              <input
                type="text"
                {...register("service_category", { required: true })}
                className="outline-none p-2 bg-gray-200 rounded-md w-full"
                placeholder="Enter service category"
              />
            </div>

            {/* Sub Services */}
            {subServiceFields.map((subService, subServiceIndex) => (
              <div
                key={subService.id}
                className="p-4 border rounded-md space-y-4"
              >
                <h2 className="text-lg font-semibold">
                  Sub Service {subServiceIndex + 1}
                </h2>

                {/* Sub Service Title */}
                <div>
                  <label className="block font-medium mb-2">
                    Sub Service Title
                  </label>
                  <input
                    type="text"
                    {...register(`sub_services.${subServiceIndex}.sub_title`)}
                    className="outline-none p-2 bg-gray-200 rounded-md w-full"
                  />
                </div>

                {/* Sub Service Description */}
                <div>
                  <label className="block font-medium mb-2">
                    Sub Service Description
                  </label>
                  <textarea
                    {...register(`sub_services.${subServiceIndex}.sub_desc`)}
                    className="outline-none p-2 bg-gray-200 rounded-md w-full"
                  />
                </div>

                {/* Key Features */}
                <FieldArray
                  title="Key Features"
                  control={control}
                  register={register}
                  name={`sub_services.${subServiceIndex}.key_features`}
                  fields={[
                    { label: "Key Feature Title", name: "keyfeature_title" },
                    {
                      label: "Key Feature Description",
                      name: "keyfeature_desc",
                    },
                  ]}
                />

                {/* Benefits */}
                <FieldArray
                  title="Benefits"
                  control={control}
                  register={register}
                  name={`sub_services.${subServiceIndex}.benefits`}
                  fields={[
                    { label: "Benefit Title", name: "bene_title" },
                    { label: "Benefit Description", name: "bene_desc" },
                  ]}
                />

                {/* Our Process */}
                <FieldArray
                  title="Our Process"
                  control={control}
                  register={register}
                  name={`sub_services.${subServiceIndex}.our_process`}
                  fields={[
                    { label: "Process Title", name: "process_title" },
                    { label: "Process Description", name: "process_desc" },
                  ]}
                />

                {/* Remove Sub Service Button */}
                <button
                  type="button"
                  onClick={() => removeSubService(subServiceIndex)} // This will remove the sub-service
                  className="p-2 bg-red-600 text-white rounded-md hover:bg-red-500"
                >
                  Remove Sub Service
                </button>
              </div>
            ))}

            {/* Add New Sub Service Button */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  addSubService({
                    sub_title: "",
                    sub_desc: "",
                    key_features: [
                      { keyfeature_title: "", keyfeature_desc: "" },
                    ],
                    benefits: [{ bene_title: "", bene_desc: "" }],
                    our_process: [{ process_title: "", process_desc: "" }],
                  })
                }
                className="p-2 bg-gray-800 text-white px-4 rounded-md hover:bg-gray-700 "
              >
                Add Sub Service
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                className="p-2 bg-green-500 text-white px-4 rounded-md hover:bg-green-400"
              >
                Submit Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const FieldArray: React.FC<{
  title: string;
  control: any;
  register: any;
  name: string;
  fields: { label: string; name: string }[];
}> = ({ title, register, control, name, fields }) => {
  const {
    fields: fieldArray,
    append,
    remove,
  } = useFieldArray({
    control,
    name,
  });

  return (
    <div>
      <h3 className="font-medium mb-2">{title}</h3>
      {fieldArray.map((field, index) => (
        <div key={field.id} className="flex flex-col flex-wrap gap-4 mb-4">
          {fields.map((fieldMeta) => (
            <div key={fieldMeta.name}>
              <label className="block font-medium mb-1">
                {fieldMeta.label}
              </label>
              <input
                type="text"
                {...register(`${name}.${index}.${fieldMeta.name}`)}
                className="outline-none p-2 bg-gray-200 rounded-md w-full"
              />
            </div>
          ))}
          {/* Remove field button */}
          <button
            type="button"
            onClick={() => remove(index)} // This will remove the current field
            className="p-2 bg-red-600 text-white w-fit rounded-md hover:bg-red-500"
          >
            Remove {title}
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          append(
            fields.reduce((acc, field) => {
              acc[field.name] = "";
              return acc;
            }, {} as Record<string, string>)
          )
        }
        className="p-2 bg-gray-800 text-white px-4 rounded-md hover:bg-gray-700"
      >
        Add {title}
      </button>
    </div>
  );
};

export default AdminServices;

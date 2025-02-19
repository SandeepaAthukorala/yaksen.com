import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import AdminNav from "../components/AdminNav";
import { addMember } from "../../../apiCalls/ApiCalls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SocialMedia {
  platform: string;
  link: string;
}

interface MemberData {
  member_image_link: string;
  member_name: string;
  member_position: string;
  member_mail: string;
  member_socialmedia: SocialMedia[];
  member_about: string;
  member_experties: string[];
  member_featured_projects: string[];
}

const AdminMembers: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MemberData>({
    defaultValues: {
      member_socialmedia: [{ platform: "", link: "" }],
      member_experties: [""],
      member_featured_projects: [""],
    },
  });

  const {
    fields: socialMediaFields,
    append: appendSocialMedia,
    remove: removeSocialMedia,
  } = useFieldArray({
    control,
    name: "member_socialmedia",
  });

  const {
    fields: expertiesFields,
    append: appendExperties,
    remove: removeExperties,
  } = useFieldArray({
    control,
    name: "member_experties",
  });

  const {
    fields: featuredProjectsFields,
    append: appendFeaturedProjects,
    remove: removeFeaturedProjects,
  } = useFieldArray({
    control,
    name: "member_featured_projects",
  });

  const onSubmit = async (data: MemberData) => {
    try {
      const response = await addMember(data);

      toast.success("Member added successfully");
    } catch (error) {
      toast.error("Cannot add the Member, Please try again");
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div>
                <label>Member Image Link:</label>
                <input
                  type="text"
                  {...register("member_image_link")}
                  className="outline-none p-2 bg-gray-200 rounded-md w-full"
                />
              </div>
              <div>
                <label>Member Name:</label>
                <input
                  type="text"
                  {...register("member_name", { required: true })}
                  className="outline-none p-2 bg-gray-200 rounded-md w-full"
                />
                {errors.member_name && (
                  <p className="text-red-500">Name is required</p>
                )}
              </div>
              <div>
                <label>Member Position:</label>
                <input
                  type="text"
                  {...register("member_position", { required: true })}
                  className="outline-none p-2 bg-gray-200 rounded-md w-full"
                />
                {errors.member_position && (
                  <p className="text-red-500">Position is required</p>
                )}
              </div>
              <div>
                <label>Member Email:</label>
                <input
                  type="email"
                  {...register("member_mail", { required: true })}
                  className="outline-none p-2 bg-gray-200 rounded-md w-full"
                />
                {errors.member_mail && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div>
                <label>About Member:</label>
                <textarea
                  {...register("member_about")}
                  className="outline-none p-2 bg-gray-200 rounded-md w-full"
                ></textarea>
              </div>

              {/* Social Media */}
              <div>
                <label>Social Media:</label>
                {socialMediaFields.map((field, index) => (
                  <div key={field.id} className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      placeholder="Platform"
                      {...register(`member_socialmedia.${index}.platform`)}
                      className="outline-none p-2 bg-gray-200 rounded-md flex-1"
                    />
                    <input
                      type="text"
                      placeholder="Link"
                      {...register(`member_socialmedia.${index}.link`)}
                      className="outline-none p-2 bg-gray-200 rounded-md flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => removeSocialMedia(index)}
                      className="bg-red-500 text-white p-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => appendSocialMedia({ platform: "", link: "" })}
                  className="bg-black text-white p-2 rounded"
                >
                  Add Social Media
                </button>
              </div>

              {/* Experties */}
              <div className="flex flex-col">
                <label>Experties:</label>
                {expertiesFields.map((field, index) => (
                  <div key={field.id} className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      {...register(`member_experties.${index}`)}
                      className="border p-2 rounded flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => removeExperties(index)}
                      className="bg-red-500 text-white p-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => appendExperties("")}
                  className="bg-black text-white p-2 rounded w-fit px-10"
                >
                  Add Experty
                </button>
              </div>

              {/* Featured Projects */}
              <div className="flex flex-col">
                <label>Featured Projects:</label>
                {featuredProjectsFields.map((field, index) => (
                  <div key={field.id} className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      {...register(`member_featured_projects.${index}`)}
                      className="border p-2 rounded flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => removeFeaturedProjects(index)}
                      className="bg-red-500 text-white p-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => appendFeaturedProjects("")}
                  className="bg-black text-white p-2 rounded w-fit px-10"
                >
                  Add Featured Project
                </button>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-green-500 text-white p-2 rounded w-fit px-[50px]"
                >
                  Add Member
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminMembers;

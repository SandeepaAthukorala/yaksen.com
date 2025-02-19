import React, { useState } from "react";
import AdminNav from "../components/AdminNav";
import { addProject } from "../../../apiCalls/ApiCalls";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define your form types based on the schema
interface ProjectFormData {
  project_title: string;
  project_sub_title: string;
  project_cover_img_link: string;
  project_category_main: string;
  project_category_sub: string[];
  project_desc: string;
  project_keyfeatures: string[];
  project_showcase: {
    video_link: string[];
    image_links: string[];
  };
}

const AdminProjects: React.FC = () => {
  const { control, handleSubmit, register } = useForm<ProjectFormData>({
    defaultValues: {
      project_category_sub: [],
      project_keyfeatures: [],
      project_showcase: {
        video_link: [],
        image_links: [],
      },
    },
  });

  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [keyFeatures, setKeyFeatures] = useState<string[]>([]);
  const [videoLinks, setVideoLinks] = useState<string[]>([]);
  const [imageLinks, setImageLinks] = useState<string[]>([]);

  // Handle form submission
  const onSubmit = async (data: ProjectFormData) => {
    try {
      const projectData = {
        ...data,
        project_category_sub: subCategories,
        project_keyfeatures: keyFeatures,
        project_showcase: {
          video_link: videoLinks,
          image_links: imageLinks,
        },
      };

      await addProject(projectData);
      toast.success("Project added successfully");
    } catch (error) {
      toast.error("Cannot add the project, Please try again");
    }
  };

  // Add a new sub-category
  const addSubCategory = () => {
    setSubCategories([...subCategories, ""]);
  };

  // Remove a sub-category
  const removeSubCategory = (index: number) => {
    const updatedSubCategories = subCategories.filter((_, i) => i !== index);
    setSubCategories(updatedSubCategories);
  };

  const handleSubCategoryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedSubCategories = [...subCategories];
    updatedSubCategories[index] = e.target.value;
    setSubCategories(updatedSubCategories);
  };

  // Add a new key feature
  const addKeyFeature = () => {
    setKeyFeatures([...keyFeatures, ""]);
  };

  // Remove a key feature
  const removeKeyFeature = (index: number) => {
    const updatedKeyFeatures = keyFeatures.filter((_, i) => i !== index);
    setKeyFeatures(updatedKeyFeatures);
  };

  const handleKeyFeatureChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedKeyFeatures = [...keyFeatures];
    updatedKeyFeatures[index] = e.target.value;
    setKeyFeatures(updatedKeyFeatures);
  };

  // Add a new video link
  const addVideoLink = () => {
    setVideoLinks([...videoLinks, ""]);
  };

  // Remove a video link
  const removeVideoLink = (index: number) => {
    const updatedVideoLinks = videoLinks.filter((_, i) => i !== index);
    setVideoLinks(updatedVideoLinks);
  };

  const handleVideoLinkChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedVideoLinks = [...videoLinks];
    updatedVideoLinks[index] = e.target.value;
    setVideoLinks(updatedVideoLinks);
  };

  // Add a new image link
  const addImageLink = () => {
    setImageLinks([...imageLinks, ""]);
  };

  // Remove an image link
  const removeImageLink = (index: number) => {
    const updatedImageLinks = imageLinks.filter((_, i) => i !== index);
    setImageLinks(updatedImageLinks);
  };

  const handleImageLinkChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedImageLinks = [...imageLinks];
    updatedImageLinks[index] = e.target.value;
    setImageLinks(updatedImageLinks);
  };

  return (
    <div className="h-screen px-[100px] py-[50px]">
      <ToastContainer />
      <div className="w-full h-full shadow-md flex rounded-xl overflow-hidden border-solid border border-gray-100">
        <div className="flex-[1] w-full h-full border-r border-solid border-r-gray-100 shadow-md">
          <AdminNav />
        </div>
        <div className="flex-[4] w-full h-full p-10 overflow-scroll">
          <h2 className="text-xl font-semibold">Add New Project</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            {/* Project Title */}
            <div>
              <label>Project Title</label>
              <input
                type="text"
                {...register("project_title")}
                className="outline-none p-2 bg-gray-200 rounded-md w-full"
              />
            </div>

            {/* Project Sub Title */}
            <div>
              <label>Project Sub Title</label>
              <input
                type="text"
                {...register("project_sub_title")}
                className="outline-none p-2 bg-gray-200 rounded-md w-full"
              />
            </div>

            {/* Project Cover Image Link */}
            <div>
              <label>Project Cover Image Link</label>
              <input
                type="text"
                {...register("project_cover_img_link")}
                className="outline-none p-2 bg-gray-200 rounded-md w-full"
              />
            </div>

            {/* Project Main Category */}
            <div>
              <label>Project Category Main</label>
              <input
                type="text"
                {...register("project_category_main")}
                className="outline-none p-2 bg-gray-200 rounded-md w-full"
              />
            </div>

            {/* Project Sub Categories */}
            <div className="flex flex-col gap-2">
              <label>Project Sub Categories</label>
              {subCategories.map((subCategory, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={subCategory}
                    onChange={(e) => handleSubCategoryChange(e, index)}
                    className="outline-none p-2 bg-gray-200 rounded-md w-full"
                  />
                  <button
                    type="button"
                    onClick={() => removeSubCategory(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addSubCategory}
                className="p-2 bg-black text-white rounded-md hover:bg-black/80 w-fit px-6"
              >
                Add Sub Category
              </button>
            </div>

            {/* Project Key Features */}
            <div className="flex flex-col gap-2">
              <label>Project Key Features</label>
              {keyFeatures.map((keyFeature, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={keyFeature}
                    onChange={(e) => handleKeyFeatureChange(e, index)}
                    className="outline-none p-2 bg-gray-200 rounded-md w-full"
                  />
                  <button
                    type="button"
                    onClick={() => removeKeyFeature(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addKeyFeature}
                className="p-2 bg-black text-white rounded-md hover:bg-black/80 w-fit px-6"
              >
                Add Key Feature
              </button>
            </div>

            {/* Project Description */}
            <div>
              <label>Project Description</label>
              <textarea
                {...register("project_desc")}
                className="outline-none p-2 bg-gray-200 rounded-md w-full"
              />
            </div>

            {/* Project Showcase (Video Links) */}
            <div className="flex flex-col gap-2">
              <label>Video Links</label>
              {videoLinks.map((videoLink, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={videoLink}
                    onChange={(e) => handleVideoLinkChange(e, index)}
                    className="outline-none p-2 bg-gray-200 rounded-md w-full"
                  />
                  <button
                    type="button"
                    onClick={() => removeVideoLink(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addVideoLink}
                className="p-2 bg-black text-white rounded-md hover:bg-black/80 w-fit px-6"
              >
                Add Video Link
              </button>
            </div>

            {/* Project Showcase (Image Links) */}
            <div className="flex flex-col gap-2">
              <label>Image Links</label>
              {imageLinks.map((imageLink, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={imageLink}
                    onChange={(e) => handleImageLinkChange(e, index)}
                    className="outline-none p-2 bg-gray-200 rounded-md w-full"
                  />
                  <button
                    type="button"
                    onClick={() => removeImageLink(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addImageLink}
                className="p-2 bg-black text-white rounded-md hover:bg-black/80 w-fit px-6"
              >
                Add Image Link
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Submit Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProjects;

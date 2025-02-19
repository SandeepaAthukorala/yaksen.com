import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Define the types for the service data
interface ServiceData {
  service_title: string;
  service_desc: string;
  service_icon_type: string;
  service_category: string;
  sub_services: {
    sub_title: string;
    sub_desc: string;
    benefits: { bene_title: string; bene_desc: string }[];
    key_features: { keyfeature_title: string; keyfeature_desc: string }[];
    our_process: { process_title: string; process_desc: string }[];
  };
}

interface projectData {
  project_title: string;
  project_sub_title: string;
  project_cover_img_link: string;
  project_category_main: string;
  project_category_sub: string[];
  project_desc: string;
  project_keyfeatures: string[];
  project_showcase: { video_link: string[]; image_links: string[] };
}

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

interface TestiData {
  customer_name: string;
  customer_image_link: string;
  customer_company: string;
  customer_desc: string;
}

export const addService = async (serviceData: ServiceData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/services/`,
      serviceData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error adding service:",
        error.response?.data || error.message
      );
      throw new Error(error.response?.data?.message || "Failed to add service");
    } else {
      console.error("Error adding service:", (error as Error).message);
      throw new Error("Failed to add service");
    }
  }
};

export const addProject = async (projectData: projectData) => {
  console.log("Sending project data", projectData);

  try {
    const response = await axios.post(`${API_BASE_URL}/projects`, projectData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getServices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/services`);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getSingleService = async (id: string | undefined) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/services/${id}`);

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects`);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getSingleProject = async (id: string | undefined) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects/${id}`);

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addMember = async (MemberData: MemberData) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/members`, MemberData);
    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getMembersData = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/members`);

    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getSingleMember = async (id: string | undefined) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/members/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getFeaturedProjects = async (id: string | undefined) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/members/${id}/featured-projects`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getTestimonials = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/testimonials`);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addTestimonial = async (TestimonialData: TestiData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/testimonials`,
      TestimonialData
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const sendContactForm = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/send-email`, data);
    return response.data;
  } catch (error) {
    throw new Error("Error sending contact form");
  }
};

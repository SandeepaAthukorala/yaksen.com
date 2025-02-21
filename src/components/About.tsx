import { useEffect, useState } from "react";
import TeamMember from "./team/TeamMember";
import { getMembersData } from "../apiCalls/ApiCalls";

interface SocialMedia {
  platform: string;
  link: string;
}

interface MemberData {
  _id: string;
  member_image_link: string;
  member_name: string;
  member_position: string;
  member_mail: string;
  member_socialmedia: SocialMedia[];
  member_about: string;
  member_experties: string[];
  member_featured_projects: string[];
}

export default function About() {
  const [team, setTeam] = useState<MemberData[]>([]);

  const getTeamData = async () => {
    try {
      const res = await getMembersData();

      setTeam(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeamData();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            About <span className="text-primary">YAKSEN</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          Making processes smarter, faster, more personalized, and more effective
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-500 dark:text-gray-400">
          Our AI-driven solutions enhance operational efficiency, support advanced decision-making, foster creativity, and solve complex business challenges. With our expertise, we help businesses automate and optimize workflows, delivering measurable and sustainable results.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Meet the Crew 🫂
          </h3>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <TeamMember
                key={member._id}
                id={member._id}
                name={member.member_name}
                role={member.member_position}
                image={member.member_image_link}
                bio={""}
                email={member.member_mail}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

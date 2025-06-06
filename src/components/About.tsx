import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Target, Zap, Users, Award, TrendingUp, Shield } from "lucide-react";
import TeamMember from "./team/TeamMember";
import teamData from "../data/team.json"; // Import the local JSON data

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
  order: number;
}

export default function About() {
  const [team, setTeam] = useState<MemberData[]>([]);

  useEffect(() => {
    // Load the team data from the local JSON file and sort by order
    const sortedTeam = (teamData as MemberData[]).sort((a, b) => a.order - b.order);
    setTeam(sortedTeam);
  }, []);

  const features = [
    {
      icon: Target,
      title: "Precision-Driven Solutions",
      description: "Every solution is tailored to meet your specific business objectives with laser-focused precision.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Implementation",
      description: "Rapid deployment without compromising quality, getting you results faster than ever.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Solutions that grow with your business, ensuring long-term success and adaptability.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols to protect your data and maintain complete confidentiality.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="container-custom">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
<h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">
  About <span className="gradient-text">YAKSEN</span>
</h2>
<p className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed mb-8">
  Making processes <span className="text-primary-500 font-semibold">smarter</span>,{" "}
  <span className="text-secondary-500 font-semibold">faster</span>,{" "}
  <span className="text-accent-500 font-semibold">more personalized</span>, and{" "}
  <span className="text-primary-500 font-semibold">more effective</span>.
</p>

        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="card p-8 lg:p-12">
            <p className="text-lg lg:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Our AI-driven solutions enhance operational efficiency, support advanced decision-making, 
              foster creativity, and solve complex business challenges. With our expertise, we help 
              businesses automate and optimize workflows, delivering 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> measurable and sustainable results</span>.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card card-hover p-8 h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-6`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-display font-bold text-neutral-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6">
            Meet the <span className="gradient-text">Crew</span> 🫂
          </h3>
          <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Our passionate team of experts dedicated to transforming your business with innovative solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <motion.div
              key={member._id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <TeamMember
                id={member._id}
                name={member.member_name}
                role={member.member_position}
                image={member.member_image_link}
                bio={member.member_about}
                email={member.member_mail}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary-500 mb-2">5+</div>
            <div className="text-neutral-600 dark:text-neutral-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-secondary-500 mb-2">30+</div>
            <div className="text-neutral-600 dark:text-neutral-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-accent-500 mb-2">200+</div>
            <div className="text-neutral-600 dark:text-neutral-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary-500 mb-2">24/7</div>
            <div className="text-neutral-600 dark:text-neutral-400">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

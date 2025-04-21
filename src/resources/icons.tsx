import { FaPython, FaReact } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiNextdotjs, SiPostgresql, SiSupabase, SiMongodb, SiPandas, SiScikitlearn,SiAdobecreativecloud,SiDocker, SiN8N } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc"; 

import {Code,Sparkle,CircuitBoard, PenTool, Bot, BarChart, Paintbrush, Settings, TrendingUp, Shield, Book, MessageSquare, Repeat, MessageCircle, GraduationCap, Megaphone, LineChart, Layers, Mic, FileText, Brain, AlertTriangle, CheckSquare, Package, Smile, Rocket } from 'lucide-react';

const iconSize_technologies = "text-primary text-[100px]";

export const technologies = [
  // Core Languages
  { icon: <FaPython className={iconSize_technologies} /> },
  { icon: <TbBrandCSharp className={iconSize_technologies} /> },

  // AI Frameworks
  { icon: <SiTensorflow className={iconSize_technologies} /> },
  { icon: <SiPytorch className={iconSize_technologies} /> },

  // Web Development Frameworks
  { icon: <FaReact className={iconSize_technologies} /> },
  { icon: <SiNextdotjs className={iconSize_technologies} /> },

  // Database Technologies
  { icon: <SiPostgresql className={iconSize_technologies} /> },
  { icon: <SiMongodb className={iconSize_technologies} /> },
  { icon: <SiSupabase className={iconSize_technologies} /> },

  // Data Science & ML Tools
  { icon: <SiPandas className={iconSize_technologies} /> },
  { icon: <SiScikitlearn className={iconSize_technologies} /> },

  // Cloud Platforms
  { icon: <BiLogoGoogleCloud className={iconSize_technologies} /> },
  { icon: <VscAzure className={iconSize_technologies} /> },

  // Creative Platforms
  { icon: <SiAdobecreativecloud className={iconSize_technologies} /> },

  // Web Crawlers
  { icon: <SiDocker className={iconSize_technologies} /> },
  { icon: <SiN8N className={iconSize_technologies} /> },


];

const iconSize_services = "h-16 w-16 text-primary";

export const services_icons = [
  { type: "code", icon: <Code className={iconSize_services} /> },
  { type: "pen", icon: <PenTool className={iconSize_services} /> },
  { type: "ai", icon: <Bot className={iconSize_services} /> },
  { type: "data", icon: <BarChart className={iconSize_services} /> },
  { type: "design", icon: <Paintbrush className={iconSize_services} /> },
  { type: "automation", icon: <Settings className={iconSize_services} /> },
  { type: "analytics", icon: <TrendingUp className={iconSize_services} /> },
  { type: "security", icon: <Shield className={iconSize_services} /> },
  { type: "education", icon: <Book className={iconSize_services} /> },
  { type: "consulting", icon: <MessageSquare className={iconSize_services} /> },
  { type: "workflow", icon: <Repeat className={iconSize_services} /> },
  { type: "chatbot", icon: <MessageCircle className={iconSize_services} /> },
  { type: "training", icon: <GraduationCap className={iconSize_services} /> },
  { type: "marketing", icon: <Megaphone className={iconSize_services} /> },
  { type: "trends", icon: <LineChart className={iconSize_services} /> },
  { type: "custom", icon: <Layers className={iconSize_services} /> },
  { type: "voice", icon: <Mic className={iconSize_services} /> },
  { type: "document", icon: <FileText className={iconSize_services} /> },
  { type: "learning", icon: <Brain className={iconSize_services} /> },
  { type: "fraud", icon: <AlertTriangle className={iconSize_services} /> },
  { type: "compliance", icon: <CheckSquare className={iconSize_services} /> },
  { type: "inventory", icon: <Package className={iconSize_services} /> },
  { type: "sentiment", icon: <Smile className={iconSize_services} /> },
  { type: "rocket", icon: <Rocket className={iconSize_services} /> },
  { type: "sparkle", icon: <Sparkle className={iconSize_services} /> },
  { type: "circuit_board", icon: <CircuitBoard className={iconSize_services} /> }

];

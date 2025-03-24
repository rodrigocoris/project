import React, { useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, Code, Server, PenTool as Tool } from 'lucide-react';
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { Tilt } from 'react-tilt';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import profileImage from './assets/profile.jpg';

function App() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skillCards = [
    {
      title: "Frontend",
      icon: <Code className="w-8 h-8 mb-4" />,
      skills: ["React", "TypeScript", "HTML/CSS", "Tailwind CSS"],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Backend",
      icon: <Server className="w-8 h-8 mb-4" />,
      skills: ["Node.js", "Express", "Python", "SQL"],
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Herramientas",
      icon: <Tool className="w-8 h-8 mb-4" />,
      skills: ["Git", "Docker", "AWS", "Figma"],
      color: "from-green-400 to-green-600"
    }
  ];

  const experiences = [
    {
      title: "Desarrollador Full Stack",
      company: "Empresa ABC",
      date: "2023 - Presente",
      description: [
        "Desarrollo de aplicaciones web utilizando React y Node.js",
        "Implementación de arquitecturas serverless en AWS",
        "Optimización de rendimiento y SEO"
      ],
      icon: <Code />,
      iconBg: "#1d4ed8"
    },
    {
      title: "Desarrollador Frontend",
      company: "Startup XYZ",
      date: "2022 - 2023",
      description: [
        "Desarrollo de interfaces de usuario responsivas",
        "Integración con APIs RESTful",
        "Implementación de pruebas unitarias y de integración"
      ],
      icon: <Code />,
      iconBg: "#4f46e5"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Section */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        bgImageAlt="hero background"
        strength={200}
      >
        <motion.section
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="min-h-screen flex items-center justify-center relative"
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-48 h-48 rounded-full mx-auto border-4 border-blue-500 shadow-lg"
              />
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Rodrigo Ramos
            </motion.h2>

            <div className="text-xl md:text-2xl mb-8 h-20">
              <Typewriter
                options={{
                  strings: [
                    'Ingeniero en desarrollo de software',
                    'Entusiasta de la programación',
                    'Apasionado por la tecnología'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <motion.div 
              className="flex justify-center gap-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a 
                href="https://github.com/rodrigocoris" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <div className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-200">
                  <Github size={24} />
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/in/rodrigo-alejandro-ramos-lozano-23010324a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <div className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-200">
                  <Linkedin size={24} />
                </div>
              </a>
              <a 
                href="mailto:ramoslozanorodrigoalejandro@gmail.com"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <div className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-200">
                  <Mail size={24} />
                </div>
              </a>
            </motion.div>
          </div>
        </motion.section>
      </Parallax>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="py-20 px-8 relative overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom right, #1a1a1a, #2d3748)'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Habilidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCards.map((card, index) => (
              <Tilt key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`p-6 rounded-xl bg-gradient-to-br ${card.color} transform hover:scale-105 transition-transform duration-300 shadow-xl`}
                >
                  <div className="text-center mb-6">
                    {card.icon}
                    <h3 className="text-2xl font-bold">{card.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {card.skills.map((skill, skillIndex) => (
                      <li 
                        key={skillIndex}
                        className="flex items-center space-x-2"
                      >
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <section className="py-20 px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Experiencia
          </h2>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                date={experience.date}
                iconStyle={{ background: experience.iconBg, color: '#fff' }}
                icon={experience.icon}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">
                  {experience.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle mt-2">
                  {experience.company}
                </h4>
                <ul className="mt-4 list-disc list-inside">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">¿Interesado en trabajar juntos?</h3>
            <p className="text-gray-400 mb-8">
              Estoy abierto a nuevas oportunidades y colaboraciones
            </p>
            <a 
              href="mailto:ramoslozanorodrigoalejandro@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Contáctame
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import { useCallback } from 'react';
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
import { Link } from 'react-scroll'; // Importa Link de react-scroll

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

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Rodrigo Ramos</h1>
          <ul className="flex space-x-6 text-white">
            <li>
              <Link
                to="perfil"
                smooth={true}
                duration={800}
                offset={-70} // Ajusta el desplazamiento para evitar que el navbar cubra la sección
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                Perfil
              </Link>
            </li>
            <li>
              <Link
                to="educacion"
                smooth={true}
                duration={800}
                offset={-70}
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                Educación
              </Link>
            </li>
            <li>
              <Link
                to="experiencia-practica"
                smooth={true}
                duration={800}
                offset={-70}
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                Experiencia Práctica
              </Link>
            </li>
            <li>
              <Link
                to="certificaciones"
                smooth={true}
                duration={800}
                offset={-70}
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                Certificaciones
              </Link>
            </li>
            <li>
              <Link
                to="competencias"
                smooth={true}
                duration={800}
                offset={-70}
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                Competencias
              </Link>
            </li>
            <li>
              <Link
                to="idiomas"
                smooth={true}
                duration={800}
                offset={-70}
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                Idiomas
              </Link>
            </li>
          </ul>
        </div>
      </nav>

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
                title="Visit my GitHub profile"
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
                title="Visit my LinkedIn profile"
                >
                <div className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-200">
                  <Linkedin size={24} />
                </div>
                </a>
              <a 
                href="mailto:ramoslozanorodrigoalejandro@gmail.com"
                className="transform hover:scale-110 transition-transform duration-200"
                title="Send an email to Rodrigo Ramos"
              >
                <div className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-200">
                  <Mail size={24} />
                </div>
              </a>
            </motion.div>
          </div>
        </motion.section>
      </Parallax>

      {/* Profile Section */}
      <section id="perfil" className="py-20 px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Perfil
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            Soy un ingeniero en desarrollo de software con interés en crear soluciones tecnológicas eficientes y accesibles.
            Tengo conocimientos en el desarrollo web y móvil, con experiencia en tecnologías como PHP, Laravel, Java y SQL.
            Me motiva el aprendizaje continuo y la colaboración en equipos multidisciplinarios para el desarrollo de proyectos innovadores.
            Busco una oportunidad donde pueda aportar mis habilidades técnicas y crecer profesionalmente en un entorno dinámico.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="educacion" className="py-20 px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Educación
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Ingeniería en desarrollo de software</h3>
              <p className="text-gray-400">Centro de enseñanza técnica industrial | Enero 2021 – Diciembre 2024</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Tecnólogo profesional en informática</h3>
              <p className="text-gray-400">Escuela politécnica Ing. Jorge Matute Remus | Enero 2017 – Diciembre 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Experience Section */}
      <section id="experiencia-practica" className="py-20 px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Experiencia Práctica
          </h2>
          <div>
            <h3 className="text-2xl font-bold text-white">Fundador y Desarrollador Principal</h3>
            <p className="text-gray-400">Hello World | 2024 - Presente</p>
            <ul className="mt-4 list-disc list-inside text-gray-300">
              <li>Diseño y desarrollo de la API REST con Laravel y PHP para la gestión de usuarios y ejercicios.</li>
              <li>Creación de una interfaz atractiva con HTML, CSS y JavaScript.</li>
              <li>Implementación de un compilador en tiempo real compatible con C++, Python y Java.</li>
              <li>Desarrollo de un asistente basado en IA para guiar a los usuarios en la mejora de su código.</li>
              <li>Diseño y administración de bases de datos con MySQL para almacenar datos de los usuarios.</li>
              <li>Uso de Git y GitHub para control de versiones y colaboración.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificaciones" className="py-20 px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Diplomados y Certificaciones
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-4">
            <li>Opera redes de cómputo | Universidad de Guadalajara</li>
            <li>Capacitación de usuarios en informática | Universidad de Guadalajara</li>
            <li>Opera y da mantenimiento a equipos de cómputo | Universidad de Guadalajara</li>
            <li>Diseña programas y páginas web | Universidad de Guadalajara</li>
            <li>Gestión de pequeñas y medianas empresas | Universidad de Guadalajara</li>
          </ul>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="competencias" className="py-20 px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Competencias Técnicas
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-4">
            <li><strong>Lenguajes de Programación:</strong> PHP, JavaScript, Python, Java, C++.</li>
            <li><strong>Desarrollo Web:</strong> Laravel, HTML, CSS, SQL.</li>
            <li><strong>Desarrollo Móvil:</strong> Android Studio.</li>
            <li><strong>Herramientas:</strong> Git/GitHub, Figma.</li>
          </ul>
        </div>
      </section>

      {/* Languages Section */}
      <section id="idiomas" className="py-20 px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Idiomas
          </h2>
          <p className="text-lg text-gray-300 text-center">Inglés | Intermedio</p>
        </div>
      </section>

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
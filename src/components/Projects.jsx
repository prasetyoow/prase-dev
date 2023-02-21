import LineGradient from "../components/LineGradient";
import { AiFillGithub } from "react-icons/ai";
import { FiCornerDownRight } from "react-icons/fi";
import { motion } from "framer-motion";
import projects from "../constants";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = () => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col gap-2 justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <>
      {projects.map((project) => {
        return (
          <motion.div
            variants={projectVariant}
            className="relative"
            key={project.id}
          >
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">{project.title}</p>
              <p className="mt-7">{project.description}</p>
              <div className="flex gap-5">
                {project.visit ? (
                  <a href={project.visit} target="_blank" rel="noreferrer">
                    <div className="flex gap-2">
                      <FiCornerDownRight size={25} />
                      <p>Go to Website</p>
                    </div>
                  </a>
                ) : (
                  ""
                )}

                <a href={project.source} target="_blank" rel="noreferrer">
                  <div className="flex gap-2">
                    <AiFillGithub size={25} />
                    <p>Source Code</p>
                  </div>
                </a>
              </div>
            </div>
            <img
              className="w-full h-full"
              src={project.image}
              alt={project.title}
            />
          </motion.div>
        );
      })}
    </>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Projects that I built or work on <br />
          &#40;hover to see more information&#41;
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

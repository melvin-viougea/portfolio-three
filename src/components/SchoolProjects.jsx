import React from "react";
import Tilt from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {SectionWrapper} from "../hoc";
import {schoolProjects} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";

const ProjectCard = ({
                         index,
                         name,
                         description,
                         tags,
                     }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[260px] w-full'
            >
                <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>


                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const SchoolProjects = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText}`}>Projets scolaires.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Voici quelques projets que j'ai réalisés au cours de mes études, illustrant les
                    compétences techniques et les connaissances que j'ai acquises. Ces projets
                    montrent mon évolution et ma capacité à relever des défis.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {schoolProjects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(SchoolProjects, "schoolProjects");

import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import img1 from '../img/python.webp'
import img2 from '../img/git.png'
import img3 from '../img/linux.jpg'
import img4 from '../img/oop.png'
const projects = [
  {
    title: "Python",
    description:
      "Протягом одного року вивчивав Python та освоїв декілька потужних бібліотек. Маю досвід у використанні таких бібліотек, як NumPy та Matplotlib (зокрема pyplot), а також інших корисних інструментів.",
    img: img1,
  },
  {
    title: "Git",
    description:
      "Маю розуміння системи контролю версій Git. Знання Git дозволяє ефективно керувати своїми програмними проектами та зберігати їхню історію.",
    img:  img2,
  },
  {
    title: "Linux",
    description:
      "Також маю навички в роботі з операційною системою Linux, зокрема з дистрибутивом Ubuntu. ",
    img: img3,
  },
  {
    title: "ООП",
    description:
      "Знайомий з об'єктно-орієнтованим програмуванням (ООП). Маю глибоке розуміння концепцій ООП та здатність застосовувати ці концепції в своїх програмах.",
    img: img4,
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
          spacing={8}
          minHeight={false}
          id='projects'
    >
      <Heading as="h1" id="projects-section">
       Навички 
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.img}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

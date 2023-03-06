const topics = [
  {
    id: "all",
    name: "All Projects",
    projects: [
      {
        id: "libertos",
        name: "Libertos",
        imageUrl: "https://i.ibb.co/qd9BgDM/Libertos-PT-1-3.jpg",
        video: "https://www.youtube.com/embed/O4V5ojNBxPc",
        description: [
          "Directed by Jefferson Nali",
          "Screenwriting by Luciana Costa",
          "Costume Design by Isabhelle Dambros",
          "Makeup Design by Carol Sus",
        ],
      },
      {
        id: "-10",
        name: "-10: A vida não é um jogo",
        imageUrl: "https://i.ibb.co/CJ09F8c/menos10.jpg",
        video: "https://www.youtube.com/embed/aogQOWJiHrE",
        description: [
          "Directed by Jefferson Nali",
          "Screenwriting by Luciana Costa",
          "Costume Design by Isabhelle Dambros",
          "Costume Assistant by Gabriela Salles",
        ],
      },
      {
        id: "hades",
        name: "Hades",
        imageUrl: "https://i.ibb.co/FXGfx6H/hades.jpg",
        video: "https://www.youtube.com/embed/kDvAsZKB-Og",
        description: ["Concept and Design by Isabhelle Dambros"],
      },
      {
        id: "the-orixas",
        name: "The Orixas",
        imageUrl: "https://i.ibb.co/BLNY4BP/IMG-1910-1.png",
        video: "https://www.youtube.com/embed/zUu8Pc5MurA",
        description: [
          "Concept and Design by Isabhelle Dambros",
          "Filming and Edition by Bernardo Bacciardi",
        ],
      },
      {
        id: "heights-of-catherine",
        name: "Heights of Catherine",
        imageUrl: "https://i.ibb.co/CnNdZL8/catherine.jpg",
        video: "https://www.youtube.com/embed/wJH4sIdVikg",
        description: [
          "Concept and Design by Isabhelle Dambros",
          "Directed by Bruna Kristofoleti",
          "Camera and Photography by Pedro Zafalon",
        ],
      },
      {
        id: "make-u-sweat",
        name: "Make U Sweat",
        imageUrl: "https://i.ibb.co/FzYxksS/makeyousweat.jpg",
        video: "https://www.youtube.com/embed/HstGjPKMAz8",
        description: [
          "Directed by Giulia Ruberti",
          "Costume Design by Isabhelle Dambros",
        ],
      },
      {
        id: "vampiro-na-paulista",
        name: "Vampiro na Paulista",
        imageUrl: "https://i.ibb.co/h2V0y5Y/vampirodapaulista-1.jpg",
        video: "https://www.youtube.com/embed/Z0Cg_kyrdjg",
        description: [
          "Directed by Beto Ribeiro",
          "Costume Design by Isabhelle Dambros",
        ],
      },
      {
        id: "mutantes-no-espaco",
        name: "Mutantes no Espaço",
        imageUrl: "https://i.ibb.co/rQhMXKD/mutantes.jpg",
        video: "https://www.youtube.com/embed/w_iGLZEm2CU",
        description: [
          "Directed by Beto Ribeiro",
          "Costume Design by Isabhelle Dambros",
        ],
      },
      {
        id: "entre-mortos-e-vivos",
        name: "Entre mortos e vivos",
        imageUrl:
          "https://i.ibb.co/6ybRffZ/MV5-BYm-Nh-YWE4-YTEt-NTNh-ZC00-OGUw-LWEx.jpg",
        video: "https://www.youtube.com/embed/UaaOR6Ic8BQ",
        description: [
          "Directed by Beto Ribeiro",
          "Costume Design by Isabhelle Dambros",
        ],
      },
    ],
  },
  {
    id: "costume-design",
    name: "Costume Design",
    imageUrl: "https://i.ibb.co/7QtnQZj/LP-8522.png",
    projects: [
      {
        id: "libertos",
        name: "Libertos",
        imageUrl: "https://i.ibb.co/qd9BgDM/Libertos-PT-1-3.jpg",
        video: "https://www.youtube.com/embed/O4V5ojNBxPc",
        description: [
          "Directed by Jefferson Nali",
          "Screenwriting by Luciana Costa",
          "Costume Design by Isabhelle Dambros",
          "Makeup Design by Carol Sus",
        ],
      },
      {
        id: "-10",
        name: "-10: A vida não é um jogo",
        imageUrl: "https://i.ibb.co/CJ09F8c/menos10.jpg",
        video: "https://www.youtube.com/embed/aogQOWJiHrE",
        description: [
          "Directed by Jefferson Nali",
          "Screenwriting by Luciana Costa",
          "Costume Design by Isabhelle Dambros",
          "Costume Assistant by Gabriela Salles",
        ],
      },
      {
        id: "hades",
        name: "Hades",
        imageUrl: "https://i.ibb.co/FXGfx6H/hades.jpg",
        video: "https://www.youtube.com/embed/kDvAsZKB-Og",
        description: ["Concept and Design by Isabhelle Dambros"],
      },
      {
        id: "the-orixas",
        name: "The Orixas",
        imageUrl: "https://i.ibb.co/BLNY4BP/IMG-1910-1.png",
        video: "https://www.youtube.com/embed/zUu8Pc5MurA",
        description: [
          "Concept and Design by Isabhelle Dambros",
          "Filming and Edition by Bernardo Bacciardi",
        ],
      },
      {
        id: "heights-of-catherine",
        name: "Heights of Catherine",
        imageUrl: "https://i.ibb.co/CnNdZL8/catherine.jpg",
        video: "https://www.youtube.com/embed/wJH4sIdVikg",
        description: [
          "Concept and Design by Isabhelle Dambros",
          "Directed by Bruna Kristofoleti",
          "Camera and Photography by Pedro Zafalon",
        ],
      },
      {
        id: "make-u-sweat",
        name: "Make U Sweat",
        imageUrl: "https://i.ibb.co/FzYxksS/makeyousweat.jpg",
        video: "https://www.youtube.com/embed/HstGjPKMAz8",
        description: [
          "Directed by Giulia Ruberti",
          "Costume Design by Isabhelle Dambros",
        ],
      },
      {
        id: "vampiro-na-paulista",
        name: "Vampiro na Paulista",
        imageUrl: "https://i.ibb.co/h2V0y5Y/vampirodapaulista-1.jpg",
        video: "https://www.youtube.com/embed/Z0Cg_kyrdjg",
        description: [
          "Directed by Beto Ribeiro",
          "Costume Design by Isabhelle Dambros",
        ],
      },
      {
        id: "mutantes-no-espaco",
        name: "Mutantes no Espaço",
        imageUrl: "https://i.ibb.co/rQhMXKD/mutantes.jpg",
        video: "https://www.youtube.com/embed/w_iGLZEm2CU",
        description: [
          "Directed by Beto Ribeiro",
          "Costume Design by Isabhelle Dambros",
        ],
      },
      {
        id: "entre-mortos-e-vivos",
        name: "Entre mortos e vivos",
        imageUrl:
          "https://i.ibb.co/6ybRffZ/MV5-BYm-Nh-YWE4-YTEt-NTNh-ZC00-OGUw-LWEx.jpg",
        video: "https://www.youtube.com/embed/UaaOR6Ic8BQ",
        description: [
          "Directed by Beto Ribeiro",
          "Costume Design by Isabhelle Dambros",
        ],
      },
    ],
  },
  {
    id: "styling",
    name: "Styling",
    imageUrl: "https://i.ibb.co/7WHnXZk/Screen-Shot-2017-11-03-at-01-11-32.png",
    projects: [
      {
        id: "wuthering",
        name: "Wuthering Editorial",
        imageUrl:
          "https://i.ibb.co/grDz8yw/Screenshot-2022-10-12-at-11-36-15.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: "political-blood",
        name: "Political Blood",
        imageUrl: "https://i.ibb.co/HqRswwv/vampiro.jpg",
        description:
          "This project was to contemplate how the Ubu Roi play was situated in the currently Brazilian political situation. The Ubu Roi play has been used across generations to exaggerate and to be a form of rebellion, when people cannot express themselves in other ways by fear of repression they use art. As a timeless piece Ubu is a satire of a man who leads a revolution against a king and becomes this sadist and greedy tyrant.",
      },
    ],
  },
];

export function getTopics() {
  return topics;
}

export function getAllprojects() {
  return topics.find(({ id }) => id === "all").projects;
}

export function getTopic(topicId) {
  return topics.find(({ id }) => id === topicId);
}

export function getProject({ projectId, topicId }) {
  return topics
    .find(({ id }) => id === topicId)
    .projects.find(({ id }) => id === projectId);
}

export default topics;

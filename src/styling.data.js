const stylings = [
  {
    id: "styling",
    name: "Styling",
    projects: [
      {
        id: "wuthering",
        name: "Wuthering Editorial",
        imageUrl:
          "https://i.ibb.co/grDz8yw/Screenshot-2022-10-12-at-11-36-15.png",
        description:
          "A photoshoot to a styling class based in Paranapiacaba, with the theme of teenage love in the fiction wuthering heights. Photography by Karol Frosi, Make by Caroline Rivera, Styling and Conception Isabhelle Dambros, Models: Marcelo Barbosa, Lucas Braga, Débora Brandão.",
      },
      {
        id: "political-blood",
        name: "Political Blood",
        imageUrl:
          "https://i.ibb.co/PwxnPH5/Screenshot-2022-10-12-at-11-06-18.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
];

export function getStylings() {
  return stylings;
}

export function getTopic(topicId) {
  return stylings.find(({ id }) => id === topicId);
}

export function getAllStyling() {
  return stylings.find(({ id }) => id === "styling").projects;
}

export function getProject({ projectId, topicId }) {
  return stylings
    .find(({ id }) => id === topicId)
    .projects.find(({ id }) => id === projectId);
}

export default stylings;

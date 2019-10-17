// Action types: openNewPage

const projectData = [
  {
    id: 1,
    title: "Real time react networking games",
    thumbnail:
      "https://raw.githubusercontent.com/vtranduc/real-time-react-networking-games/master/docs/soccer.png",

    repository: "https://github.com/vtranduc/real-time-react-networking-games",
    summary: `A custom, real-time, multi-players physics game engine is developed. The positions of each object, including soccer ball and the player (the puppy in the screenshot) is computed by keeping track of velocity and acceleration every frame. The game progress is computed entirely and only on the server in order to avoid conflicts that may arise by lags. On the client side, the game is nicely displayed using React, by simply equating the position of moving object to a hook, which gets updated by the server every frame using socket.io.
    The site also features many other applications.`,
    actions: []
  },
  {
    id: 2,
    title: "iTutor - A learning platform (Still in progress!)",
    thumbnail:
      "https://raw.githubusercontent.com/vtranduc/iTutor/master/docs/home.png",
    repository: "https://github.com/vtranduc/iTutor",
    summary:
      "iTutor is an Edmonton-based business whose goal is the help the students from grade 3 to first-year university to succeed in academic career. Founded in 2011, it has grown to be one of the most successful tutor businesses in the capital of Alberta with 2 locations that run multiple classes in the evenings and weekends. While the homepage was built with Wordpress and PHP by another team led by Ashneil, our team (Me and Rahmat) is working to build the platforms for the registered users so that teachers, parents, and students can monitor the study progress, compile the questions, and submit the assignments, etc.",
    actions: [
      {
        name: "iTutor Homepage",
        type: "openNewPage",
        url: "https://itutoracademy.com/"
      }
    ]
  },
  {
    id: 3,
    title: "Numerical modeling of phase separation of binary polymer solution",
    thumbnail:
      "https://raw.githubusercontent.com/vtranduc/Solution-to-Cahn-Hilliard-with-Flory-Huggins-equation/master/docs/Viscous-Cahn-Hilliard.png",
    repository:
      "https://github.com/vtranduc/Solution-to-Cahn-Hilliard-with-Flory-Huggins-equation",
    summary: `This is only one part of my Master's thesis in the departmetn of Chemical Engineering at Ryerson University.
    Phase separation of binary polymer fluid is often described mathematically using Cahn-Hilliard theory and Flory-Huggins theory. For many years, this imposes researchers a lot of difficulties in numerical study due to forth order differential equation which is also highly non-linear. Dr. Philip Chan (my supervisor) and Dr. Alejandro D.Rey tackled the problem using Galerkin Finite Element method with bicubic Hermitian basis functions. Over years, Dr. Philip Chan's research team has used to model to study phase separation in variety of condition such as temperature gradient.
    In this model, I have implemented extremely efficient algorithm so that the program, that would normally take days or even week to run, to run in less than an hour on home PC by taking advantage of SuiteSparse and parallel-computation. I have also implemented sophisticated algorithm, for the first time, to tackle complex domain.`,
    actions: [
      {
        name: "My publication",
        type: "openNewPage",
        url: "https://www.mdpi.com/2305-7084/3/3/75"
      }
    ]
  },
  {
    id: 4,
    title: "Anime Art Puzzle",
    thumbnail:
      "https://raw.githubusercontent.com/vtranduc/Android-customizable-puzzle-game/master/docs/thumbnail.png",
    repository: "https://github.com/vtranduc/Android-customizable-puzzle-game",
    summary: `The game built in Python with Kivy that can be compiled to run on Android smartphone, which I is available on Google Play! It is a puzzle game featuring the art works of some recruited talents. When the game starts, the puzzle shuffles gradually more, making it harder over time. As the incentive, there are many stages that can be unlocked. The high scores can be saved in the game. The user can also choose any image from their phone and turn it into the puzzle.
    The entire game engine, such as the placement of puzzle, puzzle shuffling, verification of finished puzzle, acceleration in the swipe, etc were developed.`,
    actions: [
      {
        name: "Find it on Google Play",
        type: "openNewPage",
        url:
          "https://play.google.com/store/apps/details?id=ca.ualberta.customizableanimeartpuzzle"
      }
    ]
  }
  // {
  //   id: 5,
  //   title: "Interactive event scheduler",
  //   thumbnail: "https://images6.alphacoders.com/541/541806.jpg",
  //   summary: "hello world",
  //   repository: "https://github.com/vtranduc/interactive-event-scheduler",
  //   actions: []
  // },
  // {
  //   id: 6,
  //   title: "lhl card games",
  //   thumbnail: "https://images5.alphacoders.com/584/584471.png",
  //   summary: "hello world",
  //   repository: "https://github.com/tylercaceres/lhl_card_games_2",
  //   actions: []
  // }
];

export default projectData;

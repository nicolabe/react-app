import { GET_RECOMMENDED_BOOKS, GET_LOANED_BOOKS } from "./types";

export const getRecommendedBooks = () => dispatch => {
  return dispatch({
    type: GET_RECOMMENDED_BOOKS,
    books: [
      {
        id: 1,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        description:
          "Presents the epic depicting the Great War of the Ring, a struggle between good and evil in Middle-earth, following the odyssey of Frodo the hobbit and his companions on a quest to destroy the Ring of Power, in a special anniversary volume containing the corrected text of all three volumes of the seminal fantasy trilogy, complemented by maps and cover art by acclaimed artist Alan Lee. Simultaneous.",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg"
      },
      {
        id: 5,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        description:
          "One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us?",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51zJS6PmxbL._SX333_BO1,204,203,200_.jpg"
      },
      {
        id: 3,
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        description:
          "The last novel Ernest Hemingway saw published, The Old Man and the Sea has proved itself to be one of the enduring works of American fiction. It is the story of an old Cuban fisherman and his supreme ordeal: a relentless, agonizing battle with a giant marlin far out in the Gulf Stream. Using the simple, powerful language of a fable, Hemingway takes the timeless themes of courage in the face of defeat and personal triumph won from loss and transforms them into a magnificent twentieth-century classic.",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/411pakPjvdL._SX326_BO1,204,203,200_.jpg"
      }
    ]
  });
};

export const getLoanedBooks = () => dispatch => {
  return dispatch({
    type: GET_LOANED_BOOKS,
    books: [
      {
        id: 4,
        title: "Surely You're Joking, Mr. Feynman!",
        author: "Richard P. Feynman",
        description:
          "Richard Feynman, winner of the Nobel Prize in physics, thrived on outrageous adventures. Here he recounts in his inimitable voice his experience trading ideas on atomic physics with Einstein and Bohr and ideas on gambling with Nick the Greek; cracking the uncrackable safes guarding the most deeply held nuclear secrets; accompanying a ballet on his bongo drums; painting a naked female toreador. In short, here is Feynman's life in all its eccentric—a combustible mixture of high intelligence, unlimited curiosity, and raging chutzpah.",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51PXthXhbiL.jpg"
      },
      {
        id: 2,
        title: "Crime and Punishment",
        author: "Fyodor Dostoyevsky",
        description:
          "Raskolnikov, a conflicted former student, lives in a tiny, rented room in Saint Petersburg. He refuses all help, even from his friend Razumikhin, and devises a plan to murder and rob an elderly pawn-broker and money-lender, Alyona Ivanovna. His motivation comes from the overwhelming sense that he is predetermined to kill the old woman by some power outside of himself.",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51WVKaGAS-L._SX331_BO1,204,203,200_.jpg"
      }
    ]
  });
};

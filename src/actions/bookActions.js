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
      },
      {
        id: 6,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        description:
          "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book explores such profound questions as: How did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries? Are there other dimensions in space? What will happen when it all ends?",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/618hg1-tQiL._SX331_BO1,204,203,200_.jpg"
      },
      {
        id: 7,
        title: "1984",
        author: "George Orwell",
        description:
          "Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can’t escape the fact that Big Brother is always watching...",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/31lWUHDG7uL._SX282_BO1,204,203,200_.jpg"
      },
      {
        id: 8,
        title: "Brave New World",
        author: "Aldous Huxley",
        description:
          "Written in the shadow of the rise of fascism during the 1930s, Brave New World likewise speaks to a 21st-century world dominated by mass-entertainment, technology, medicine and pharmaceuticals, the arts of persuasion, and the hidden influence of elites. ",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41l%2B4UobkRL._SX325_BO1,204,203,200_.jpg"
      },
      {
        id: 9,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J. K. Rowling",
        description:
          "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg"
      },
      {
        id: 10,
        title: "The Road",
        author: "Cormac McCarthy",
        description:
          "A father and his son walk alone through burned America. Nothing moves in the ravaged landscape save the ash on the wind. It is cold enough to crack stones, and when the snow falls it is gray. The sky is dark. Their destination is the coast, although they don't know what, if anything, awaits them there. They have nothing; just a pistol to defend themselves against the lawless bands that stalk the road, the clothes they are wearing, a cart of scavenged food—and each other.",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41OYjTKJ8eL._SX322_BO1,204,203,200_.jpg"
      }
    ]
  });
};

import { getRecommendedBooks } from "./bookActions";
import { GET_RECOMMENDED_BOOKS } from "./types";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const books = [
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
    id: 2,
    title: "Crime and Punishment",
    author: "Fyodor Dostoyevsky",
    description:
      "Raskolnikov, a conflicted former student, lives in a tiny, rented room in Saint Petersburg. He refuses all help, even from his friend Razumikhin, and devises a plan to murder and rob an elderly pawn-broker and money-lender, Alyona Ivanovna. His motivation comes from the overwhelming sense that he is predetermined to kill the old woman by some power outside of himself.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51WVKaGAS-L._SX331_BO1,204,203,200_.jpg"
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
];

describe("BookActions", () => {
  it("should create an action to get a list of recommended books", () => {
    const expectedAction = {
      type: GET_RECOMMENDED_BOOKS,
      books: books
    };
    const store = mockStore({});
    store.dispatch(getRecommendedBooks());
    expect(store.getActions()).toEqual([expectedAction]);
    // expect(bookActions.getRecommendedBooks()).toEqual(expectedAction);
  });
});

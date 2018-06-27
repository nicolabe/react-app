import { getUser, updateUser } from "./userActions";
import { GET_USER, UPDATE_USER } from "./types";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const user = {
  name: "Nicolai Berthelsen",
  address: "Støperiveien 4, 3267 Larvik",
  email: "berthelsen.nicolai@gmail.com",
  phone: "+47 40469957"
};

describe("UserActions", () => {
  it("should create an action to get the current user", () => {
    const expectedAction = {
      type: GET_USER,
      user: user
    };
    const store = mockStore({});
    store.dispatch(getUser());
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it("should create an action to update the current user", () => {
    const updatedUser = {
      name: user.name,
      address: "En annen adresse",
      email: "bytta.mail@gmail.com",
      phone: user.phone
    };
    const expectedAction = {
      type: UPDATE_USER,
      user: updatedUser
    };
    const store = mockStore({});
    store.dispatch(updateUser(updatedUser));
    expect(store.getActions()).toEqual([expectedAction]);
  });
});

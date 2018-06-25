import { GET_USER, UPDATE_USER } from './types';

export const getUser = () => dispatch => {
  dispatch({
    type: GET_USER,
    user: {
      name: "Nicolai Berthelsen",
      address: "Støperiveien 4, 3267 Larvik",
      email: "berthelsen.nicolai@gmail.com",
      phone: "+47 40469957"
    }
  });
}

export const updateUser = (userData) => dispatch => {
  dispatch({
    type: UPDATE_USER,
    user: userData
  })
}
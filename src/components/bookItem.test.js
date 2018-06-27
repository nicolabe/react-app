import React from "react";
import BookItem from "./bookItem";
import { mount } from "enzyme";
import Card from "@material-ui/core/Card";

test("BookItem component should render", () => {
  const book = {
    name: "Tittel",
    author: "Forfatter",
    description: "Beskrivelse",
    image: "random_url"
  };
  const wrapper = mount(<BookItem book={book} />);
  expect(wrapper.props().book).toEqual(book);
});

import React from "react";
import BookItem from "./bookItem";
import { mount } from "enzyme";
import Card from "@material-ui/core/Card";
import { MemoryRouter } from "react-router";

test("BookItem component should render", () => {
  const book = {
    name: "Tittel",
    author: "Forfatter",
    description: "Beskrivelse",
    image: "random_url"
  };
  const wrapper = mount(
    <MemoryRouter>
      <BookItem book={book} />
    </MemoryRouter>
  );
  expect(wrapper.props().children.props.book).toEqual(book);
});

import Login from "../src/components/login/";
import React from "react";
import renderer from "react-test-renderer";

it("renders", () => {
  const r = renderer.create(<Login />).toJSON();
  expect(r).toMatchSnapshot();
});

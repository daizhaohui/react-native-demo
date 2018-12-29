import Login from "../src/components/login/";
import React from "react";
import renderer from "react-test-renderer";

it("renders", () => {
  const renderer = renderer.create(<App />).toJSON();
  expect(renderer).toBeTruthy();
});

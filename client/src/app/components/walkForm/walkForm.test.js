import React from "react";
import renderer from "react-test-renderer";
import { WalkForm } from "../walkForm";

test("WalkForm renders properly", () => {
  const component = renderer.create(<WalkForm />).toJSON();
  expect(component).toMatchSnapshot();
});

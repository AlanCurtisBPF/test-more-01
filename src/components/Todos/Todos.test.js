// We're using our own custom render function for redux conneceted compoenentsand not RTL's render
import { render, fireEvent, screen, cleanup } from "../../tests/test-utils";
import Todos from "./Todos";

describe("Todos Comp", () => {
  beforeEach(() => {});

  afterEach(cleanup);

  it("should render with given state from Redux store", () => {
     expect(true).toBe(false)
  });

});

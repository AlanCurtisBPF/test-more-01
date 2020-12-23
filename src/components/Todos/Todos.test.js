// We're using our own custom render function for redux conneceted compoenentsand not RTL's render
import { render, fireEvent, screen, cleanup } from "../../tests/test-utils";
import Todos from "./Todos";

describe("Todos Comp", () => {
  beforeEach(() => {});

  afterEach(cleanup);

  it("should render with given state from Redux store", () => {
     expect(true).toBe(false)
  });

  it("should ", () => {
     expect(true).toBe(false)
  });

  it("should create and add todo to list ", () => {
     expect(true).toBe(false)
  });

  it("should clear todo input after todo is added", ()=>{
    expect(true).toBe(false)
 });

  it("should remove todo from list ", () => {
    expect(true).toBe(false)
 });

 it("should edit todo on list", () => {
    expect(true).toBe(false)
 });

 it("should clear list of todos", ()=>{
    expect(true).toBe(false)
 });

 it("should not allow you to add two of the same name", ()=>{
    expect(true).toBe(false)
 });

});

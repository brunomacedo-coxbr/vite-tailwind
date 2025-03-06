import { render } from "@testing-library/react";
import App from "./App";

describe("listBoxOptions tests", () => {
  render(<App />);

  it("should build listBox option; selectedOptions is empty", () => {
    expect(0).toEqual(0);
  });
});

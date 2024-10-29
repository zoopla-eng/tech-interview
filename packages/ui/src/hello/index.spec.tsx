import { render, waitFor } from "@testing-library/react";
import { Hello } from "./index";

describe("Hello", () => {
  it("should render successfully", async () => {
    const { baseElement } = render(<Hello />);

    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });
});

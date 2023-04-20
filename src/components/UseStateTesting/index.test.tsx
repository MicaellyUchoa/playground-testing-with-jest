import { Dispatch } from "react";
import * as React from "react";
import { render, screen } from "@testing-library/react";

import { UseStateTesting } from ".";

const setState: Dispatch<unknown> = jest.fn();
describe("Component <UseStateTesting/>", () => {
  it("should be called state loading (true)", () => {
    const isLoading: unknown = true;
    const useStateSpy = jest.spyOn(React, "useState").mockReturnValue([isLoading, setState]);

    render(<UseStateTesting />);

    expect(screen.getByText("The page is loading!")).toBeInTheDocument();
    expect(useStateSpy).toHaveBeenCalled();
  });

  it("should be called state loading (false)", () => {
    const isLoading: unknown = false;
    const useStateSpy = jest.spyOn(React, "useState").mockReturnValue([isLoading, setState]);

    render(<UseStateTesting />);

    expect(screen.getByText("The page has already been loaded!")).toBeInTheDocument();
    expect(useStateSpy).toHaveBeenCalled();
  });

  it('should be called state isTesting with text "testing"', () => {
    const isTesting: string = "testing";
    const useStateSpy = jest.spyOn(React, "useState").mockReturnValue([isTesting, setState]);

    render(<UseStateTesting />);

    expect(screen.getByText("We are testing!")).toBeInTheDocument();
    expect(useStateSpy).toHaveBeenCalled();
  });

    it('should be called state isTesting with text "tested"', () => {
    const isTesting: string = "tested";
    const useStateSpy = jest.spyOn(React, "useState").mockReturnValue([isTesting, setState]);

    render(<UseStateTesting />);

    expect(screen.getByText("It was tested!")).toBeInTheDocument();
    expect(useStateSpy).toHaveBeenCalled();
  });
});

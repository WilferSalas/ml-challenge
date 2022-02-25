// @packages
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// @scripts
import BreadcrumbsComponent, {
  Props,
} from "../../components/breadcrumbs-component";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

function renderListComponent(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    id: "test-component",
    items: ["celulares"],
  };

  return render(<BreadcrumbsComponent {...defaultProps} {...props} />);
}

describe("<BreadcrumbsComponent />", () => {
  test("should render a breadcrumbs", async () => {
    const { findByTestId } = renderListComponent();
    const title = await findByTestId("breadcrumb-link");

    expect(title).toHaveTextContent("celulares");
  });
});

import React from "react";
import { Home } from "../Home";
import { render } from '@testing-library/react'

describe("Home", () => {
  it('matches snapshot', () => {
    const component = render(<Home />)

    expect(component).toMatchSnapshot();
  })
})


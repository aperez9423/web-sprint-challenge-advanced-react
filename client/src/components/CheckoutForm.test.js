import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {queryByText} = render(<CheckoutForm/>);
    const header = queryByText(/form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const {getByLabelText, getByTestId} = render (<CheckoutForm/>)

    const firstname = getByLabelText(/first name/i)
    const lastname = getByLabelText(/last name/i)
    const address = getByLabelText(/address/i)
    const city = getByLabelText(/city/i)
    const state = getByLabelText(/state/i)
    const zipcode = getByLabelText(/zip/i)
    const button = getByTestId(/button/i)

    fireEvent.change(firstname, {target: {value: "Angelica"}});
    fireEvent.change(lastname, {target: {value: "Perez"}});
    fireEvent.change(address, {target: {value: "321 Teach Avenue"}});
    fireEvent.change(city, {target: {value: "Charlotte"}});
    fireEvent.change(state, {target: {value: "North Carolina"}});
    fireEvent.change(zipcode, {target: {value: "28269"}});
    fireEvent.click(button);

     const success = getByTestId(/successMessage/i)
     expect(success).toBeInTheDocument();

});

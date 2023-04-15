import { render, screen } from '@testing-library/react';
import BookingForm from "./BookingForm";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByLabelText("Choose date");
    expect(headingElement).toBeInTheDocument();
});
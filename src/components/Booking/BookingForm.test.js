import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from "./BookingForm";

describe("Booking Form", () => {
    test('Renders the BookingForm heading', () => {
        render(<BookingForm/>);
        const headingElement = screen.getByLabelText("Choose date");
        expect(headingElement).toBeInTheDocument();
    });

    test('HTML validation for date field', () => {
        render(<BookingForm/>);
        const dateInput = screen.getByLabelText("date");
        expect(dateInput).toHaveAttribute('required');
    });

    test('HTML validation for time field', () => {
        render(<BookingForm/>);
        const timeInput = screen.getByLabelText("time");
        expect(timeInput).toHaveAttribute('required');
    });

    test('HTML validation for guests field', () => {
        render(<BookingForm/>);
        const guestsInput = screen.getByLabelText("guests");
        expect(guestsInput).toHaveAttribute('required');
    });

    test('HTML validation for occasion field', () => {
        render(<BookingForm/>);
        const occasionInput = screen.getByLabelText("occasion");
        expect(occasionInput).toHaveAttribute('required');
    });

    test('HTML validation for occasion field', () => {
        render(<BookingForm/>);
        const occasionInput = screen.getByLabelText("occasion");
        expect(occasionInput).toHaveAttribute('required');
    });

    test("User is able to submit the form with valid form input fields", () => {
        const date = "2023-04-16";
        const time = "17:00";
        const guests = '3';
        const occasion = 'Birthday';

        const dispatch = jest.fn();

        render(<BookingForm />);

        const dateInput = screen.getByLabelText("date");
        fireEvent.change(dateInput, { target: { value: date } });

        const timeInput = screen.getByLabelText("time");
        fireEvent.change(timeInput, { target: { value: time } });

        const guestsInput = screen.getByLabelText("guests");
        fireEvent.change(guestsInput, { target: { value: guests } });

        const occasionInput = screen.getByLabelText('occasion');
        fireEvent.change(occasionInput, { target: { value: occasion } });

        const submitButton = screen.getByRole("button");

        expect(submitButton).not.toBeDisabled();
    });

    test("User is able to submit the form without valid form input fields", () => {
        const date = "";
        const time = "17:00";
        const guests = '20';
        const occasion = 'Birthday';

        render(<BookingForm />);

        // const dateInput = screen.getByLabelText("date");
        // fireEvent.change(dateInput, { target: { value: date } });

        const timeInput = screen.getByLabelText("time");
        fireEvent.change(timeInput, { target: { value: time } });

        const guestsInput = screen.getByLabelText("guests");
        fireEvent.change(guestsInput, { target: { value: guests } });

        const occasionInput = screen.getByLabelText('occasion');
        fireEvent.change(occasionInput, { target: { value: occasion } });

        const submitButton = screen.getByRole("button");

        expect(submitButton).toBeDisabled();
    });

});
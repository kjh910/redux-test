import Home from "../index";
import { render } from '@testing-library/react';

describe('Homeコンポーネント', () => {
    test("should first", () => {
        const { getByText } = render(<Home />);
        // expect(getByText("Hello world!")).toBeTruthy();
        expect(getByText("Hello world")).toBeTruthy();
    })
})
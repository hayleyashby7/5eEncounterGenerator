import Header from "./Header";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("Header", () => {
    test("Header renders correctly", () => {
        // Arrange
        const header = { name: 'Name', important: true };
        const container = render(<Header header={header} />, {
            container: document.body.appendChild(document.createElement('tr')),
        });
        
        // Act
        const headerElement = container.getByRole('columnheader');
                
        // Assert
        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveTextContent('Name');
    });
});
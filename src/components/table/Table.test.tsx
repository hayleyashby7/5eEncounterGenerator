import Table from "./Table";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const headers = [
    { name: 'Name', data: 'name', important: true },
    { name: 'Challenge Rating', data: 'challenge_rating', important: true },
    { name: 'Type', data: 'type', important: false },
    { name: 'Size', data: 'size', important: false },
    { name: 'Alignment', data: 'alignment', important: false },
    { name: '', data: null, important: true },
];

describe("Table", () => {
    test("Table renders", () => {
           // Arrange      
        render(<Table headers={headers} />);
           
        // Act
        const tableElement = screen.getByRole('table');
                   
        // Assert
        expect(tableElement).toBeInTheDocument();
           
    });
    
    test("Table renders headers", () => {    
        // Act
        render(<Table headers={headers} />);
        
        // Assert
        headers.forEach((header) => {
           expect(screen.getByRole('columnheader', { name: header.name })).toBeInTheDocument();
        });
    });
});
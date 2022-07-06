import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Test components', () => {
  test('Test App component', () => {
    // Arrage
    render(<App />);

    // Act
    const FORMS = screen.getAllByPlaceholderText('Add A To Do');

    // Assert
    expect(screen.getByText('To Do App')).toBeInTheDocument();
    expect(FORMS.length).toBe(1);
  });
});

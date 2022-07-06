import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Test components', () => {
  test('Test App Component Snapshot', () => {
    // Arrange, Act
    const TREE = renderer.create(<App />).toJSON();
    // Assert
    expect(TREE).toMatchSnapshot();
  });

  test('Test App component Rendering', () => {
    // Arrage
    render(<App />);

    // Act
    const FORMS = screen.getAllByPlaceholderText('Add A To Do');

    // Assert
    expect(screen.getByText('To Do App')).toBeInTheDocument();
    expect(FORMS.length).toBe(1);
  });
});

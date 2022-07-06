import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import InputTodo from '../components/AddTodo';

const mockTodoParent = () => 'Hello';

describe('Input and Header test', () => {
  it('Input todo component testing', () => {
    const TREE = renderer.create(<InputTodo addTodo={mockTodoParent} />).toJSON();
    expect(TREE).toMatchSnapshot();
  });

  it('Test Input Todo', async () => {
    // Arrange
    render(<InputTodo addTodo={mockTodoParent} />);
    const input = screen.getByRole('textbox');

    // ACT
    fireEvent.change(input, {
      target: { value: 'Workout' },
    });

    // Assert
    expect(input.value).toBe('Workout');
  });
});

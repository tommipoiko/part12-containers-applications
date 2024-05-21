import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todo from '../src/Todos/Todo.jsx';

test('displays "This todo is done" when todo.done is true', () => {
  const todo = {
    text: 'Learn React Testing',
    done: true
  };

  render(<Todo todo={todo} onClickDelete={() => {}} onClickComplete={() => {}} />);

  const doneText = screen.getByText(/This todo is done/i);
  expect(doneText).toBeInTheDocument();
});

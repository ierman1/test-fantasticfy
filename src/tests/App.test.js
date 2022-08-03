import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders title', () => {
  render(<App />);
  const header = screen.getByText(/Prueba Fantasticfy/i);
  expect(header).toBeInTheDocument();
});
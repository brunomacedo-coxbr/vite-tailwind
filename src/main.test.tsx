import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render the App component', () => {
    render(<App />);

    const element = screen.getByText(/vite \+ react/i);
    expect(element).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('deberia renderizar un texto', () => {
  render(<App />);
  const text = screen.getByText(/Bienvenidos a Doggyland/i);
  expect(text).toBeInTheDocument();
});

test('deberia contener un boton con el texto entrar', () => {
  render(<App />);
  const components = screen.getByText(/Entrar/i);
  expect(components).toBeInTheDocument();
})

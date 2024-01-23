import { render, screen } from '@testing-library/react';
import Text from '.';
import '@testing-library/jest-dom/extend-expect';

describe('Unit Testing Text Component', () => {
  const document = render(<Text />);

  test('Expect text render correctly', () => {
      // const buttonElement = screen.getByRole('button');
      expect(document).toBeDefined();
  })

  test('Expect text have correct classname', () => {
    render(<Text />)
    const element = screen.getByText('testing element')
    expect(element).toHaveClass('class-testing');
  })

  test('Expect text have correct id', () => {
    render(<Text />)
    const element = screen.getByText('testing element')
    expect(element).toHaveAttribute('id', 'testing');
  })
});
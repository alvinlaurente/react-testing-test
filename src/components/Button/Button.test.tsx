import { render } from '@testing-library/react';
import Button from '.';

describe('Unit Testing Button Component', () => {
  const document = render(<Button />);
  test('Expect button render correctly', () => {
      // const buttonElement = screen.getByRole('button');
      expect(document).toBeDefined();
  });
});
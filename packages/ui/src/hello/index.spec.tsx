import { render } from '@testing-library/react'
import { MealsList } from './index'


describe('Hello', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MealsList />);
    
    expect(baseElement).toBeTruthy();
  });
});
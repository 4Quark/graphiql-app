import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';
import '@testing-library/jest-dom';

const ProblematicComponent = () => {
  throw new Error('Deliberate error for testing');
};

describe('<ErrorBoundary />', () => {
  it('catches an error and displays a fallback UI', () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Something went wrong, please try again/i)).toBeInTheDocument();
  });
});

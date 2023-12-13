import React from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';
import { Button } from '@mui/material';

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-ui">
          <h1>Oops! Something went wrong.</h1>
          <p>
            We are having trouble displaying this part of the application. Please try refreshing the
            page.
          </p>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </Button>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

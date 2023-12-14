import React from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';
import { Typography } from '@mui/material';
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
        <div className="min-h-screen flex flex-col justify-center items-center pt-10">
          <Typography variant="h3" gutterBottom>
            Oops! Something went wrong.
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            We are having trouble displaying this part of the application.
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            Please try refreshing the page.
          </Typography>

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

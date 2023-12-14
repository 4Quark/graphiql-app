import React from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import { Button } from '@mui/material';
import ErrBoundContent from '../components/ErrBoundContent/ErrBoundContent';

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
          <ErrBoundContent />
          <Button
            variant="contained"
            size="medium"
            onClick={() => {
              window.location.reload();
            }}
          >
            <AutorenewOutlinedIcon />
          </Button>
          <details style={{ whiteSpace: 'pre-wrap', marginTop: '18px' }}>
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

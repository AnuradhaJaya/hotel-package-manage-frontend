import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to trigger fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        <div>
          <h1>Unexpected Application Error!</h1>
          <p>We apologize for the inconvenience. Please try refreshing the page.</p>
        </div>
      );
    }

    // Render children if there's no error
    return this.props.children;
  }
}

export default ErrorBoundary;

import { Component, ReactNode } from "react";

interface ErrorBoundaryProperties {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  ErrorBoundaryProperties,
  ErrorBoundaryState
> {
  constructor(properties: ErrorBoundaryProperties) {
    super(properties);
    this.state = { hasError: false };
  }

  // static getDerivedStateFromError(_: Error): ErrorBoundaryState {
  //   return { hasError: true };
  // }

  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  //   // Log the error to an error reporting service or console
  //   // console.error("Uncaught error:", error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      // Render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

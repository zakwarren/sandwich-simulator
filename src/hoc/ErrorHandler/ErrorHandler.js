import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";

const ErrorHandler = (WrappedComponent) => {
  return class extends Component {
    state = {
      hasError: false,
    };

    componentDidMount() {
      if (!this.props.error) {
        this.setState({ hasError: true });
      }
    }

    errorConfirmedHandler = () => {
      this.setState({ hasError: false });
    };

    render() {
      let displayError = null;
      if (this.props.error) {
        displayError = (
          <Modal
            show={this.state.hasError}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.props.error.toString()}
          </Modal>
        );
      }

      return (
        <>
          {displayError}
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default ErrorHandler;

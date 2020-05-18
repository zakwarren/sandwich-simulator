import React, { useState, useEffect } from "react";

import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent) => {
  return (props) => {
    const [hasError, setHasError] = useState(false);

    const { error } = props;
    useEffect(() => {
      if (error) {
        setHasError(true);
      }
    }, [error]);

    const errorConfirmedHandler = () => {
      setHasError(false);
    };

    let displayError = null;
    if (hasError) {
      displayError = (
        <Modal show={hasError} modalClosed={errorConfirmedHandler}>
          {props.error.toString()}
        </Modal>
      );
    }

    return (
      <>
        {displayError}
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withErrorHandler;

// component/ErrorMessage.js
import React from 'react';

const ErrorMessage = ({ message }) => {
  return <div className="text-center mt-10 text-red-500">Error: {message}</div>;
};

export default ErrorMessage;
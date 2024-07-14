import React from "react";
import SecurityAlertIcon from "./icons/SecurityAlertIcon";

const ErrorModal = ({ show, onClose, messages, conditions }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-black opacity-75 p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-bold text-red-600 flex items-center">
            <SecurityAlertIcon className="mr-2" />
             Alert!
          </h2>
        </div>
        {messages.map((message, index) => (
          <p key={index} className="text-lg text-white mb-2">
            {message}
          </p>
        ))}
        {conditions && Object.keys(conditions).length > 0 && (
          <div className="mt-4">
            <p
              className={conditions.length ? "text-green-600" : "text-red-600"}
            >
              Password must be at least 8 characters long.
            </p>
            <p
              className={
                conditions.lowercase ? "text-green-600" : "text-red-600"
              }
            >
              Password must contain at least one lowercase letter.
            </p>
            <p
              className={
                conditions.uppercase ? "text-green-600" : "text-red-600"
              }
            >
              Password must contain at least one uppercase letter.
            </p>
            <p className={conditions.digit ? "text-green-600" : "text-red-600"}>
              Password must contain at least one digit.
            </p>
            <p
              className={
                conditions.specialChar ? "text-green-600" : "text-red-600"
              }
            >
              Password must contain at least one special character (@$!%*?&).
            </p>
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;

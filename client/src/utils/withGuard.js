import React, { useState } from "react";

const withGuard = (Component) => {
  return (props) => {
    const [isUpdateForm, setIsUpdateForm] = useState(false);
    const [updatedItemId, setUpdatedItemId] = useState("");
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
      setShowModal(false);
    };
    return (
      <Component
        isUpdateForm={isUpdateForm}
        setIsUpdateForm={setIsUpdateForm}
        updatedItemId={updatedItemId}
        setUpdatedItemId={setUpdatedItemId}
        showModal={showModal}
        setShowModal={setShowModal}
        closeModal={closeModal}
      />
    );
  };
};

export default withGuard;

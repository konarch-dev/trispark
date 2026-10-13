import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedJobForApply, setSelectedJobForApply] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const openResumeModal = () => setIsResumeModalOpen(true);
  const closeResumeModal = () => setIsResumeModalOpen(false);

  const openApplyModal = (job) => setSelectedJobForApply(job);
  const closeApplyModal = () => setSelectedJobForApply(null);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <ModalContext.Provider
      value={{
        isResumeModalOpen,
        openResumeModal,
        closeResumeModal,
        selectedJobForApply,
        openApplyModal,
        closeApplyModal,
        showToast,
        toastMessage,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}

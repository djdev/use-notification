import React, { useState } from 'react';

const NOTIFICATION_DURATION = 3000;

export const useNotification = () => {
  const [alertTextVisible, setAlertTextVisible] = useState(false);

  const clearNotification = () => {
    setTimeout(() => {
      
    }, NOTIFICATION_DURATION);
  };

  const notifyUser = (message, isError = false) => {
    
    clearNotification();
  };

  return { notifyUser };
};

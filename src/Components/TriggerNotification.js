import React from 'react';
import { useNotification } from './../Hooks/useNotification.js';

export const TriggerNotification = () => {
  const { notifyUser } = useNotification();

  const handleClick = () => {
    notifyUser("You've been notified!!");
  };

  return <button onClick={handleClick}>Notify</button>;
};

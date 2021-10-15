import React from 'react';
import { ContentBox } from './ContentBox';
import BlueButton from './BlueButton';

export const Notifications = () => {
  return (
    <ContentBox>
      <p className="font-bold text-lg">Notifications</p>
      <p className="text-gray-500 py-2">You can change the audio tone and volume via Settings </p>
      <p className="text-gray-500 py-2">Desktop Notifications are currently supported in Chrome, Firefox and Safari</p>
      <BlueButton size="sm" padding="1" content="Enable Desktop Alerts" marginTop="2" />
    </ContentBox>
  )
}

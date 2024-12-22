import React, { useContext } from 'react';
import './Notification.css'; // Link to the CSS file for styles

import { SocketContext } from '../context/SocketProvider';

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div className="notification-container">
                    <h1>{call.name} is calling:</h1>
                    <button className="button primary" onClick={answerCall}>
                        Answer
                    </button>
                </div>
            )}
        </>
    );
};

export default Notifications;

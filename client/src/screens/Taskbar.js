import React, { useState, useContext } from 'react';
import './Taskbar.css'; // Link to the CSS file for styles
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../context/SocketProvider';

const Sidebar = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <div className="container">
            <div className="paper">
                <form className="form-root" noValidate autoComplete="off">
                    <div className="grid-container">
                        <div className="grid-item">
                            <h6>Account Info</h6>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="full-width"
                            />
                            <CopyToClipboard text={me}>
                                <button
                                    type='button'
                                    className="button primary full-width">
                                    Copy Your ID
                                </button>
                            </CopyToClipboard>
                        </div>
                        <div className="grid-item">
                            <h6>Make a call</h6>
                            <input
                                type="text"
                                placeholder="ID to call"
                                value={idToCall}
                                onChange={(e) => setIdToCall(e.target.value)}
                                className="full-width"
                            />
                            {callAccepted && !callEnded ? (
                                <button
                                    type='button'
                                    className="button secondary full-width"
                                    onClick={leaveCall}>
                                    Hang Up
                                </button>
                            ) : (
                                <button
                                    type='button'
                                    className="button primary full-width"
                                    onClick={() => callUser(idToCall)}>
                                    Call
                                </button>
                            )}
                        </div>
                    </div>
                </form>
                {children}
            </div>
        </div>
    );
};

export default Sidebar;

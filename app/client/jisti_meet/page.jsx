'use client';
import React, { useState } from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import IniateCallPopup from '../iniatecallpopoup/page';

const JitsiMeetComponent = () => {
    const dispatch = useDispatch();
    const storedRoomName = localStorage.getItem('roomName');
    let token = localStorage.getItem('authToken');
    let decoded = jwtDecode(token); 
  
    const domain = "meet.staezy.pk";
    const [meetingLink, setMeetingLink] = useState('');

    return (
        <div>
            <JitsiMeeting
                domain={domain}
                roomName={storedRoomName}
                configOverwrite={{
                    startWithAudioMuted: true,
                    disableModeratorIndicator: true,
                    startScreenSharing: true,
                    enableEmailInStats: false,
                }}
                interfaceConfigOverwrite={{
                    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
                }}
                userInfo={{
                    displayName: decoded.username, // Use decoded display name
                }}
                onApiReady={(externalApi) => {
                    // Retrieve the meeting link and set it to state
                    externalApi.addListener('videoConferenceJoined', (participant) => {
                        const link = `${domain}/${storedRoomName}`;
                        console.log("Meeting Link:", link);
                        setMeetingLink(link);  // Set the meeting link in state
                    });
                }}
                getIFrameRef={(iframeRef) => {
                    iframeRef.style.height = '100%';
                    iframeRef.style.width = '100%';
                    iframeRef.style.position = 'fixed';
                    iframeRef.style.left = '0';
                    iframeRef.style.right = '0';
                    iframeRef.style.top = '0';
                    iframeRef.style.bottom = '0';
                    iframeRef.style.zIndex = '100';
                }}
            />
            <IniateCallPopup meetingLink={meetingLink} /> 
        </div>
    );
};

export default JitsiMeetComponent;

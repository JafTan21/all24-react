import React, { useCallback, useContext, useEffect, useState } from 'react'
import { SocketContext } from '../services/socket';

export default function useSocket() {

    const [connected, setConnected] = useState(false);

    const socket = useContext(SocketContext);
    const connction_accepted = useCallback(() => setConnected(true), []);
    const SEND_CONNECTION_REQUEST = useCallback(() => {
        socket.emit('CONNECTION_REQUEST');
    }, []);

    useEffect(() => {
        socket.on('CONNECTION_REQUEST_ACCEPTED', connction_accepted);

        return () => {
            socket.off('CONNECTION_REQUEST_ACCEPTED', connction_accepted);
        }
    }, [socket]);

    useEffect(SEND_CONNECTION_REQUEST, []);

    return connected ? socket : null;
}

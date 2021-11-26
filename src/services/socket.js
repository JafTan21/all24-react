import { io } from "socket.io-client";
import React from "react";

export const socket = io('https://ludogame.live/');
export const SocketContext = React.createContext();

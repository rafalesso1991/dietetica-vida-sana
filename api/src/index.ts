import dotenv from 'dotenv';
dotenv.config();

import { Server } from "./app";
import './db/mysql'

const server = new Server();
server.start();
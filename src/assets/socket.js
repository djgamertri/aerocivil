import io from 'socket.io-client'
import dotenv from 'dotenv'

dotenv.config()
const LINK = process.env.SOCKET || ''

const socket = io(LINK)

export default socket

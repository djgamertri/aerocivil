import io from 'socket.io-client'

const LINK = 'https://aerocivil.onrender.com/'

const socket = io(LINK)

export default socket

import io from 'socket.io-client'

// const LINK = 'https://aerocivil.onrender.com/'
const LINK = 'http://localhost:3000/'

const socket = io(LINK)

export default socket

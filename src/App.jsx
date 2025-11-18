import React, { useState } from 'react'
import LoginPage from './components/LoginPage'
import ChatPage from './components/ChatPage'

function App() {
  const [authed, setAuthed] = useState(true) // temporary: show chat by default

  return authed ? <ChatPage /> : <LoginPage />
}

export default App

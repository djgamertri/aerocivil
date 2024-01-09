import React, { useCallback, useRef } from 'react'
import { FaUser, FaDoorOpen } from 'react-icons/fa6'
import Button from './components/Button/Button'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
  updateEdge
} from 'reactflow'
import './App.css'
import 'reactflow/dist/style.css'
import { edgeTypes, initialEdges, initialNodes, nodeTypes } from './assets/data'
import Navbar from './components/Navbar/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutProfile from './components/Profile/LogoutProfile'
import Profile from './components/Profile/Profile'

export default function App () {
  const edgeUpdateSuccessful = useRef(true)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false
  }, [])

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true
    setEdges((els) => updateEdge(oldEdge, newConnection, els))
  }, [])

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id))
    }

    edgeUpdateSuccessful.current = true
  }, [])

  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <h1>Is Loading...</h1>

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onEdgeUpdate={onEdgeUpdate}
        onEdgeUpdateStart={onEdgeUpdateStart}
        onEdgeUpdateEnd={onEdgeUpdateEnd}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        {
          isAuthenticated
            ? <Panel position='top-right'><LogoutProfile icon={<FaDoorOpen />} /></Panel>

            : <Panel position='top-right'><Button icon={<FaUser />} onClick={() => loginWithRedirect()} /></Panel>
        }
        <Navbar setNodes={setNodes} nodes={nodes} />
        <Profile />
        <Controls />
        <MiniMap />
        <Background variant='dots' gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}

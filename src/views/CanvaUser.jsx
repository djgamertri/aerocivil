import React, { useEffect } from 'react'
import { edgeTypes, nodeTypes } from '../assets/data'
import { useAuth0 } from '@auth0/auth0-react'
import { FaUser } from 'react-icons/fa6'
import Button from '../components/Button/Button'
import Profile from '../components/Profile/Profile'
import Loading from '../components/Loading/Loading'
import 'reactflow/dist/style.css'
import ReactFlow, {
  MiniMap,
  useNodesState,
  useEdgesState,
  Panel,
  Controls
} from 'reactflow'
import socket from '../assets/socket'
import Colors from '../components/Colors/Colors'

function CanvaUser () {
  const [nodes, setNodes] = useNodesState()
  const [edges, setEdges] = useEdgesState()

  useEffect(() => {
    if (!nodes) {
      socket.emit('reloadCanvas')
    }
    socket.on('Canvas', (data) => {
      setNodes(data.nodes)
      setEdges(data.edges)
    })

    return () => {
      socket.off('Canvas')
    }
  }, [setNodes, setEdges])

  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <Loading />

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitViewOptions={{ padding: 0.4 }}
        fitView
        minZoom={0}
        maxZoom={Infinity}
      >
        {isAuthenticated ? <Profile /> : <Panel position='top-right'><Button icon={<FaUser />} onClick={() => loginWithRedirect()} title='Ingresar al Sisitema' /></Panel>}
        <Colors />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}

export default CanvaUser

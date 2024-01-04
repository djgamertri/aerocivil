import React, { useCallback } from 'react'
import { FaUser } from 'react-icons/fa6'
import Button from './components/Button/Button'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel
} from 'reactflow'
import './App.css'
import 'reactflow/dist/style.css'
import { initialEdges, initialNodes, nodeTypes } from './assets/data'
import Navbar from './components/Navbar/Navbar'

export default function App () {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Panel position='top-right'><Button icon={<FaUser />} /></Panel>
        <Navbar />
        <Controls />
        <MiniMap />
        <Background variant='dots' gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}

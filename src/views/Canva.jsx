import React, { useCallback, useRef, useState } from 'react'
import { edgeTypes, initialEdges, initialNodes, nodeTypes } from '../assets/data'
import { useAuth0 } from '@auth0/auth0-react'
import { FaUser } from 'react-icons/fa6'
import Button from '../components/Button/Button'
import Profile from '../components/Profile/Profile'
import Navbar from '../components/Navbar/Navbar'
import Loading from '../components/Loading/Loading'
import 'reactflow/dist/style.css'
import './Canva.css'
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

function Canva () {
  const edgeUpdateSuccessful = useRef(true)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [editingNodeId, setEditingNodeId] = useState(null)
  const [editNodeInfo, setEditNodeInfo] = useState({ name: '', rol: '' })

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

  const handleNodeBlur = (event) => {
    if (event.relatedTarget && event.relatedTarget.type !== 'text') {
      setEditingNodeId(null)
      setEditNodeInfo({ name: '', rol: '' })
    }
  }

  const handleNodeDoubleClick = (event, node) => {
    // Evita que el formulario se cierre al hacer doble clic dentro de él
    event.stopPropagation()
    event.preventDefault()

    setEditingNodeId(node.id)
    setEditNodeInfo({ name: node.data.name, rol: node.data.rol })
  }

  const handleNodeChange = (event) => {
    setEditNodeInfo((prevInfo) => ({ ...prevInfo, [event.target.name]: event.target.value }))

    // Actualizar los nodos directamente al cambiar los campos de texto
    const updatedNodes = nodes.map((n) =>
      n.id === editingNodeId ? { ...n, data: { ...n.data, ...editNodeInfo, [event.target.name]: event.target.value } } : n
    )

    setNodes(updatedNodes)
  }

  const handleSaveChanges = () => {
    const updatedNodes = nodes.map((n) =>
      n.id === editingNodeId ? { ...n, data: { ...n.data, ...editNodeInfo } } : n
    )

    setNodes(updatedNodes)
    setEditingNodeId(null)
    setEditNodeInfo({ name: '', rol: '' })
  }

  const handleCloseForm = () => {
    setEditingNodeId(null)
    setEditNodeInfo({ name: '', rol: '' })
  }

  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <Loading />

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
        onNodeDoubleClick={handleNodeDoubleClick}
        fitView
      >
        {isAuthenticated ? <Profile /> : <Panel position='top-right'><Button icon={<FaUser />} onClick={() => loginWithRedirect()} /></Panel>}
        <Navbar setNodes={setNodes} nodes={nodes} />
        <Controls />
        <MiniMap />
        {editingNodeId && (
          <div className='node-editor'>
            <div className='close-button' onClick={handleCloseForm}>&times;</div>
            <h1> Edición De Información </h1>
            <label>
              Nombre:
              <input
                type='text'
                name='name'
                value={editNodeInfo.name}
                onChange={handleNodeChange}
                onBlur={handleNodeBlur}
              />
            </label>
            <label>
              Email:
              <input
                type='text'
                name='rol'
                value={editNodeInfo.rol}
                onChange={handleNodeChange}
                onBlur={handleNodeBlur}
              />
            </label>
            <button className='Submit' onClick={handleSaveChanges}>Guardar Cambios</button>
          </div>
        )}
        <Background variant='dots' gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}

export default Canva

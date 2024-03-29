import React, { useCallback, useEffect, useRef, useState } from 'react'
import { edgeTypes, nodeTypes } from '../assets/data'
import { useAuth0 } from '@auth0/auth0-react'
import { FaUser } from 'react-icons/fa6'
import Button from '../components/Button/Button'
import Profile from '../components/Profile/Profile'
import Navbar from '../components/Navbar/Navbar'
import Loading from '../components/Loading/Loading'
import 'reactflow/dist/style.css'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
  updateEdge,
  getIncomers,
  getOutgoers,
  getConnectedEdges
} from 'reactflow'
import Form from '../components/Form/Form'
import socket from '../assets/socket'
import Colors from '../components/Colors/Colors'

function Canva () {
  const edgeUpdateSuccessful = useRef(true)
  const [nodes, setNodes, onNodesChange] = useNodesState()
  const [edges, setEdges, onEdgesChange] = useEdgesState()
  const [editingNodeId, setEditingNodeId] = useState(null)
  const [editNodeInfo, setEditNodeInfo] = useState({ name: '', rol: '', img: '', typeUser: '' })
  const [rfInstance, setRfInstance] = useState(null)

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

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false
  }, [])

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    setEdges((oldEdges) => updateEdge(oldEdge, newConnection, oldEdges))
  }, [setEdges])

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id))
    }

    edgeUpdateSuccessful.current = true
  }, [])

  const onNodesDelete = useCallback(
    (deleted) => {
      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, nodes, edges)
          const outgoers = getOutgoers(node, nodes, edges)
          const connectedEdges = getConnectedEdges([node], edges)

          const remainingEdges = acc.filter((edge) => !connectedEdges.includes(edge))

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({ id: `${source}->${target}`, source, target }))
          )

          return [...remainingEdges, ...createdEdges]
        }, edges)
      )
    },
    [nodes, edges]
  )

  const handleNodeBlur = (event) => {
    if (event.relatedTarget && event.relatedTarget.type !== 'text') {
      setEditingNodeId(null)
      setEditNodeInfo({ name: '', rol: '', img: '', typeUser: '' })
    }
  }

  const handleNodeClick = (event, node) => {
    event.stopPropagation()
    event.preventDefault()

    setEditingNodeId(node.id)
    setEditNodeInfo({ name: node.data.name, rol: node.data.rol, img: node.data.img, typeUser: node.data.typeUser })
  }

  const handleNodeChange = (event) => {
    setEditNodeInfo((prevInfo) => ({ ...prevInfo, [event.target.name]: event.target.value }))

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
    setEditNodeInfo({ name: '', rol: '', img: '', typeUser: '' })
  }

  const handleCloseForm = () => {
    setEditingNodeId(null)
    setEditNodeInfo({ name: '', rol: '', img: '', typeUser: '' })
  }

  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <Loading />

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onNodesDelete={onNodesDelete}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onEdgeUpdate={onEdgeUpdate}
        onEdgeUpdateStart={onEdgeUpdateStart}
        onEdgeUpdateEnd={onEdgeUpdateEnd}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodeClick={handleNodeClick}
        fitViewOptions={{ padding: 0.4 }}
        fitView
        onInit={setRfInstance}
        minZoom={0}
        maxZoom={Infinity}
      >
        {isAuthenticated ? <Profile /> : <Panel position='top-right'><Button icon={<FaUser />} onClick={() => loginWithRedirect()} title='Ingresar al Sisitema' /></Panel>}
        <Colors />
        <Navbar setNodes={setNodes} setEdges={setEdges} rfInstance={rfInstance} />
        <Controls />
        <MiniMap />
        {editingNodeId && (
          <Form handleCloseForm={handleCloseForm} editNodeInfo={editNodeInfo} handleNodeChange={handleNodeChange} handleNodeBlur={handleNodeBlur} handleSaveChanges={handleSaveChanges} />
        )}
        <Background variant='dots' gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}

export default Canva

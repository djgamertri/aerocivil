import { StepEdge } from 'reactflow'
import CardUser from '../components/cardUser/CardUser'

export const initialNodes = [
  { id: '1', type: 'User', position: { x: 528, y: -204 }, data: { name: 'Esmeralda Molina Gomez', rol: 'Secretaria General', img: 'https://economia3.com/wp-content/uploads/2019/12/Natalia-Juarranz-EQUIPO-HUMANO.jpg' } },
  { id: '2', type: 'User', position: { x: 528, y: 112 }, data: { name: 'Jhon Doe', rol: 'Director de Operaciones', img: 'https://economia3.com/wp-content/uploads/2019/12/Natalia-Juarranz-EQUIPO-HUMANO.jpg' } },
  { id: '3', type: 'User', position: { x: 900, y: 112 }, data: { name: 'Jhon Doe', rol: 'Gerente de Marketing', img: 'https://economia3.com/wp-content/uploads/2019/12/Natalia-Juarranz-EQUIPO-HUMANO.jpg' } },
  { id: '4', type: 'User', position: { x: 528, y: 383 }, data: { name: 'Jhon Doe', rol: 'Gerente de Recursos Humanos', img: 'https://economia3.com/wp-content/uploads/2019/12/Natalia-Juarranz-EQUIPO-HUMANO.jpg' } }

]
export const initialEdges = [
  { id: 'SC1-2', type: 'step', source: '1', target: '2' },
  { id: 'SC1-3', type: 'step', source: '1', target: '3' },
  { id: 'SC2-4', type: 'step', source: '2', target: '4' }

]

export const nodeTypes = { User: CardUser }
export const edgeTypes = { default: StepEdge }

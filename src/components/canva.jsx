import { useEffect, useRef } from 'react'

const canvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.fillStyle = 'green'
    context.fillRect(10, 10, 50, 50)
  }, [])

  return <canvas ref={canvasRef} width={500} height={500} />
}

export default canvas

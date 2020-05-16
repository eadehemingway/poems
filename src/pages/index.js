import React, { useState } from "react"

import styled from "styled-components"
import { useEffect } from "react"
import { Line } from "../components/Line"

const IndexPage = () => {
  const [lines, setLines] = useState(0)
  const [linesArr, setLinesArr] = useState([])

  function handleInputChange(e) {
    const numLines = Number(e.target.value)

    setLines(numLines)
  }
  useEffect(() => {
    const arr = new Array(lines).fill(null)

    setLinesArr(arr)
  }, [lines])
  return (
    <>
      <div>lines</div>
      <Input type="text" onChange={handleInputChange} value={lines} />
      {linesArr.map((l, i) => {
        return <Line lineNumber={i + 1} />
      })}
    </>
  )
}

const Input = styled.input`
  width: 200px;
  height: 20px;
  border: 1px solid coral;
`

export default IndexPage

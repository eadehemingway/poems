import React, { useState } from "react"

import styled from "styled-components"
import { useEffect } from "react"
import { Line } from "../components/Line"
import "../index.css"

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
    <Container>
      <Header>
        <PStyled>lines:</PStyled>
        <Input type="text" onChange={handleInputChange} value={lines} />
      </Header>
      {linesArr.map((l, i) => {
        return <Line lineNumber={i + 1} />
      })}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PStyled = styled.p`
  font-family: Major Mono;
  margin-right: 30px;
`
const Header = styled.div`
  display: flex;
  margin-bottom: 60px;
  margin-top: 100px;
`
const Input = styled.input`
  width: 60px;
  height: 30px;
  border: 1px solid coral;
  text-align: center;
  font-family: Major Mono;
  outline: none;
`

export default IndexPage

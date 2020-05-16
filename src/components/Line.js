/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import * as syllable from "syllable"

import Header from "./header"
import "./layout.css"

export const Line = ({ lineNumber }) => {
  const [lineVal, setLineVal] = useState("")
  console.log("syllable:", syllable("hi"))

  function handleChange(e) {
    setLineVal(e.target.value)
  }
  const syllables = 10
  //   console.log(syllable("hello"))
  return (
    <Container>
      <p>{lineNumber}</p>
      <input value={lineVal} onChange={handleChange} />
      <p>{syllable(lineVal)}</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

import React from 'react'
import styled from 'styled-components'
import spinner from '../../assets/spinner.gif'

const Spinner = () => <SpinnerImg src={spinner} alt="spinner" />

const SpinnerImg = styled.img`
  width: 130px;
  height: 100px;
`

export default Spinner

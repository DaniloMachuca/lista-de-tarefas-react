import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variables from '../../styles/variables'

export const Circle = styled(Link)`
  display: block;
  height: 64px;
  width: 64px;
  background-color: ${variables.colors.green};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 64px;
  font-size: 40px;
  text-decoration: none;
`

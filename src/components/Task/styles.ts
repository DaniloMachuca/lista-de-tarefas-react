import styled from 'styled-components'
import variables from '../../styles/variables'

import * as enums from '../../utils/enums/Task'
import { Btn } from '../../styles'

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  parameter: 'status' | 'priority'
}

function returnTagColor(props: TagProps) {
  if (props.parameter === 'status') {
    if (props.status === enums.Status.TODO) return variables.colors.yellow
    if (props.status === enums.Status.DONE) return variables.colors.green
  } else {
    if (props.priority === enums.Priority.URGENT) return variables.colors.red
    if (props.priority === enums.Priority.IMPORTANT)
      return variables.colors.orange
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    cursor: pointer;
    display: flex;
    margin-bottom: 16px;
    alingn-items: center;

    input {
      margin-right: 8px;
    }
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => returnTagColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const BtnCancelRemove = styled(Btn)`
  background-color: ${variables.colors.red};
`

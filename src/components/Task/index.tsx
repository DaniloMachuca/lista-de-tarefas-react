import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../utils/enums/Task'

type Props = {
  title: string
  priority: enums.Priority
  description: string
  status: enums.Status
}

const Task = ({ description, status, priority, title }: Props) => {
  const [editing, setEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {editing ? (
          <>
            <S.BtnSave>Save</S.BtnSave>
            <S.BtnCancelRemove onClick={() => setEditing(false)}>
              Cancel
            </S.BtnCancelRemove>
          </>
        ) : (
          <>
            <S.Btn onClick={() => setEditing(true)}>Edit</S.Btn>
            <S.BtnCancelRemove>Remove</S.BtnCancelRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task

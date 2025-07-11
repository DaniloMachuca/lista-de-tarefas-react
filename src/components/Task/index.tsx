import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { remove, edit } from '../../store/reducers/tasks'

import TaskClass from '../../models/Task'

import * as S from './styles'
import { click } from '@testing-library/user-event/dist/click'

type Props = TaskClass

const Task = ({
  description: descriptionEdit,
  status,
  priority,
  title,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (descriptionEdit.length > 0) setDescription(descriptionEdit)
  }, [descriptionEdit])

  function cancelEdit() {
    setEditing(false)
    setDescription(descriptionEdit)
  }

  async function editTask() {
    await setEditing(true)
    click(document.getElementsByName(title)[0])
  }

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        name={title}
        disabled={!editing}
      />
      <S.ActionBar>
        {editing ? (
          <>
            <S.BtnSave
              onClick={() => {
                dispatch(edit({ description, status, priority, title, id }))
                setEditing(false)
              }}
            >
              Save
            </S.BtnSave>
            <S.BtnCancelRemove onClick={cancelEdit}>Cancel</S.BtnCancelRemove>
          </>
        ) : (
          <>
            <S.Btn onClick={editTask}>Edit</S.Btn>
            <S.BtnCancelRemove onClick={() => dispatch(remove(id))}>
              Remove
            </S.BtnCancelRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task

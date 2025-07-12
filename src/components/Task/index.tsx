import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { remove, edit, changeStatus } from '../../store/reducers/tasks'

import TaskClass from '../../models/Task'
import * as enums from '../../utils/enums/Task'

import * as S from './styles'
import { click } from '@testing-library/user-event/dist/click'
import { Btn, BtnSave } from '../../styles'

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

  function changeTaskStatus(e: ChangeEvent<HTMLInputElement>) {
    dispatch(changeStatus({ id, done: e.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.DONE}
          onChange={changeTaskStatus}
        />
        <S.Title>
          {editing && <em>Editing: </em>}
          {title}
        </S.Title>
      </label>
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
            <BtnSave
              onClick={() => {
                dispatch(edit({ description, status, priority, title, id }))
                setEditing(false)
              }}
            >
              Save
            </BtnSave>
            <S.BtnCancelRemove onClick={cancelEdit}>Cancel</S.BtnCancelRemove>
          </>
        ) : (
          <>
            <Btn onClick={editTask}>Edit</Btn>
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

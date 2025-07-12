import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as enums from '../../utils/enums/Task'
import { add } from '../../store/reducers/tasks'

import { BtnSave, MainContainer, Title } from '../../styles'
import { TextBox } from '../../styles'
import * as S from './styles'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerTask = async (e: FormEvent) => {
    await e.preventDefault()
    dispatch(
      add({
        title,
        description,
        priority,
        status: enums.Status.TODO
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Register a new task</Title>
      <S.Form onSubmit={registerTask}>
        <TextBox
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
          placeholder="Title"
        />
        <TextBox
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Description"
        />
        <S.Options>
          <p>Priority</p>
          {Object.values(enums.Priority).map((priority) => (
            <S.Option key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
                onChange={() => setPriority(priority)}
              />{' '}
              <label htmlFor={priority}>{priority}</label>
            </S.Option>
          ))}
        </S.Options>
        <BtnSave type="submit">Register</BtnSave>
      </S.Form>
    </MainContainer>
  )
}

export default Form

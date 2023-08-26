import {useState} from 'react'

import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [name, updatedUserVal] = useState('')

  const onChangeInput = event => {
    updatedUserVal(event.target.value)
  }

  return (
    <MainContainer>
      <NameInput
        type="text"
        placeholder="Your name"
        onChange={onChangeInput}
        value={name}
      />
      <MsgContent>
        Hello <NameText>{name}</NameText>
      </MsgContent>
    </MainContainer>
  )
}
export default GreetUser

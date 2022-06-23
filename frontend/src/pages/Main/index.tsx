import React from 'react'

import { Wrapper, Title, SearchWordInputWrapper, SearchWordInput, FocusBorder } from './styled'

const MainPage: React.FC = () => {
  return (
    <Wrapper>
      <Title>Spell Checker</Title>
      <SearchWordInputWrapper>
        <SearchWordInput placeholder="Input a word..." />
        <FocusBorder />
      </SearchWordInputWrapper>
    </Wrapper>
  )
}

export default MainPage

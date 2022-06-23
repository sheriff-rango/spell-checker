import React, { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import { checkWord, ErrorResponse, SuccessResponse } from 'utils/fetch'

import {
  Wrapper,
  Title,
  SearchWordInputWrapper,
  SearchWordInput,
  FocusBorder,
  SubmitButton,
  SuggestionsWrapper,
  SuggestionItem,
} from './styled'

const MainPage: React.FC = () => {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const inputEl = useRef(null)

  const handleSearch = async () => {
    const searchWord = inputEl.current.value
    if (!searchWord) {
      toast.warning('Input a word!')
      return
    }
    const checkedResult = await checkWord(searchWord)
    if (!checkedResult) {
      toast.error('Axios Error!')
    } else if ((checkedResult as ErrorResponse).msg) {
      toast.error((checkedResult as ErrorResponse).msg)
    } else if ((checkedResult as SuccessResponse).correct) {
      toast.success('The word is correct!')
    } else if ((checkedResult as SuccessResponse).suggestions?.length) {
      toast.warning('The word is incorrect but there are some suggestions!')
      setSuggestions((checkedResult as SuccessResponse).suggestions)
    }
  }

  return (
    <Wrapper>
      <Title>Spell Checker</Title>
      <SearchWordInputWrapper>
        <SearchWordInput ref={inputEl} placeholder="Input a word..." />
        <FocusBorder />
        <SubmitButton onClick={handleSearch}>Check</SubmitButton>
      </SearchWordInputWrapper>
      {suggestions.length > 0 && (
        <SuggestionsWrapper>
          {suggestions.map((suggestion: string, index: number) => (
            <SuggestionItem key={index}>{suggestion}</SuggestionItem>
          ))}
        </SuggestionsWrapper>
      )}
    </Wrapper>
  )
}

export default MainPage

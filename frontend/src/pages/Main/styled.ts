import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 100px;
`

export const Title = styled.h1`
  text-align: center;
  margin: 50px 0px;
`

export const SearchWordInputWrapper = styled.div`
  position: relative;
  width: 50%;
  margin: auto;
`

export const FocusBorder = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #3399ff;
  transition: 0.4s;
`

export const SubmitButton = styled.span`
  color: #ccc;
  font-size: 24px;
  position: absolute;
  right: 0;
  bottom: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.5s all;
`

export const SearchWordInput = styled.input`
  border: 0;
  padding: 7px 0;
  border-bottom: 1px solid #ccc;
  width: 100%;
  font-size: 24px;

  &:focus {
    outline: none;
    & ~ ${FocusBorder} {
      width: 100%;
      transition: 0.4s;
    }
  }
  &:placeholder-shown {
    & ~ ${SubmitButton} {
      cursor: not-allowed;
    }
  }
  &:not(:placeholder-shown) {
    & ~ ${SubmitButton} {
      color: #2b7de9;
      &:hover {
        color: #174ea6;
      }
    }
  }
`

export const SuggestionsWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  max-height: calc(100% - 186px);
  overflow; auto;
`

export const SuggestionItem = styled.span`
  margin: 20px;
  font-size: 20px;
  cursor: pointer;
`

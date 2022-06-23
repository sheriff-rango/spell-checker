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
`

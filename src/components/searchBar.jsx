import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 40%;
  display: flex;
  margin: 3rem auto 2rem;

  @media only screen and (max-width: 426px) {
    width: 90%;
  }
`

const Button = styled.button`
  font-size: 2rem;
  font-family: Roboto;
  font-weight: 500;
  color: #fff;
  background: #436ab2;
  border: 1px solid #7e7e7e;
  border-left: 0;
  border-radius: 0 1rem 1rem 0;
  padding: 1rem 3rem;
  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 426px) {
    padding: 0.8rem 1.6rem;
  }
`

const Input = styled.input`
  width: 100%;
  font-size: 2rem;
  font-weight: 500;
  color: #036199;
  outline: none;
  border: 1px solid #7e7e7e;
  border-radius: 1rem 0 0 1rem;
  padding: 1rem 3rem;
  :active {
    outline: none;
  }

  @media only screen and (max-width: 426px) {
    padding: 0.8rem 1.6rem;
  }
`

const SearchBar = ({value, onChange, onClick}) => (
  <Wrapper>
    <Input placeholder="Search for beer..." value={value} onChange={e => onChange(e)} />
    <Button onClick={() => onClick()}>Search</Button>
  </Wrapper>
)

export default SearchBar

import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const Wrapper = styled.div`
  padding: 1.6rem 5rem;
  background: lightgreen;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 426px) {
    padding: 1rem 2rem;
  }
`

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    cursor: pointer;
    text-decoration: none;
  }
  a:not(:last-child) {
    margin-right: 3rem;
  }

  @media only screen and (max-width: 426px) {
    a:not(:last-child) {
      margin-right: 1rem;
    }
  }
`

const Font24 = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
`

const Font20 = styled.p`
  font-size: 2rem;
  font-weight: 500;
`

const NavBar = ({onNavBtnClick}) => (
  <Wrapper>
    <Font24>Beens Love Beers</Font24>
    <OptionContainer>
      <Link to="/" onClick={() => onNavBtnClick()}>
        <Font20>Home</Font20>
      </Link>
      <Link to="/favorites" onClick={() => onNavBtnClick()}>
        <Font20>Favorites</Font20>
      </Link>
    </OptionContainer>
  </Wrapper>
)

export default NavBar

import React from "react"
import styled from "styled-components"
import RenderCardList from "../components/renderCardList"

const Wrapper = styled.section`
  margin: 0 5rem;
  & > div:not(:last-child) {
    margin-bottom: 3rem;
  }
`

const Font24 = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: #036199;
  text-align: center;
  margin-top: 5rem;
`

const Favorites = ({beers, favorites, handleAddFavorites}) => (
  <Wrapper>
    {beers.length > 0 ? (
      <RenderCardList beers={beers} favorites={favorites} addFavorites={id => handleAddFavorites(id)} />
    ) : (
      <Font24>No Favorites Beer Added...</Font24>
    )}
  </Wrapper>
)

export default Favorites

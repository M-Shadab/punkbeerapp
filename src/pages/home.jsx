import React from "react"
import styled from "styled-components"
import InfiniteScroll from "react-infinite-scroll-component"
import RenderCardList from "../components/renderCardList"

const Wrapper = styled.section`
  margin: 0 5rem;
  & > div {
    margin-bottom: 3rem;
  }

  @media only screen and (max-width: 426px) {
    margin: 0;
  }
`

const Font24 = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: #036199;
  text-align: center;
  margin-top: 5rem;
`

const Home = ({beers, favorites, addFavorites, loadMoreData}) => (
  <Wrapper>
    {beers.length > 0 ? (
      <InfiniteScroll dataLength={beers.length} next={loadMoreData} hasMore={true}>
        <RenderCardList beers={beers} favorites={favorites} addFavorites={id => addFavorites(id)} />
      </InfiniteScroll>
    ) : (
      <Font24>Loading...</Font24>
    )}
  </Wrapper>
)

export default Home

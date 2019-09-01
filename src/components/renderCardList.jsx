import React from "react"
import styled from "styled-components"
import Icons from "./icons"

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Card = styled.div`
  width: 42.4rem;
  border-radius: 1.6rem;
  border: 1px solid #d8d5d5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  padding-bottom: 2rem;
  margin: 1.2rem;
`

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const IconWrapper = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardBody = styled.div`
  display: flex;
  margin-top: 1rem;

  @media only screen and (max-width: 426px) {
    margin: 0;
  }
`

const CardCol1 = styled.div`
  width: 30%;
  padding-left: 1.6rem;
  margin-right: 3rem;
  img {
    margin: 0 auto;
    height: 20rem;
  }

  @media only screen and (max-width: 426px) {
    margin: 0;
    padding: 0 1.6rem;

    img {
      height: 10rem;
    }
  }
`

const CardCol2 = styled.div`
  width: auto;
  padding: 0 1.6rem;
`

const Font20 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #436ab2;
`

const Font16 = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: #4a4a4a;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`

const RenderCardList = ({beers, favorites, addFavorites}) => {
  const shortenString = (str, maxLen) => {
    if (str.length <= maxLen) return str
    return str.substr(0, str.lastIndexOf(" ", maxLen))
  }

  const renderCard = item => {
    const {id, name, description, image_url} = item
    return (
      <Card key={id}>
        <CardHeader>
          <IconWrapper onClick={() => addFavorites(id)}>
            {favorites[id] ? <Icons name="starFilled" fill="#436ab2" /> : <Icons name="starUnFilled" fill="#436ab2" />}
          </IconWrapper>
        </CardHeader>
        <CardBody>
          <CardCol1>
            <img src={image_url} alt="image_url.jpg" />
          </CardCol1>
          <CardCol2>
            <Font20>{name}</Font20>
            <Font16>{shortenString(description, 140)}...</Font16>
          </CardCol2>
        </CardBody>
      </Card>
    )
  }

  return <Row>{beers.length > 0 ? beers.map(item => renderCard(item)) : null}</Row>
}

export default RenderCardList

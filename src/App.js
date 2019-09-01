import React, {Component} from "react"
import {Route, Switch, Redirect} from "react-router-dom"
import {getBeers} from "./services/beerService"
import NavBar from "./components/navBar"
import SearchBar from "./components/searchBar"
import Home from "./pages/home"
import Favorites from "./pages/favorites"

export default class App extends Component {
  state = {
    beers: [],
    searchBeers: [],
    page: 1,
    isSearch: false,
    searchQuery: "",
    favorites: {}
  }

  loadMoreData = async () => {
    try {
      const {data: beers} = await getBeers(`page=${this.state.page}`)
      this.setState(state => ({
        beers: [...state.beers, ...beers],
        page: state.page + 1
      }))
    } catch (ex) {
      alert("An error ocurred, Please try again:)")
      console.log(ex)
    }
  }

  componentDidMount = async () => {
    this.loadMoreData()
  }

  handleAddFavorites = id => {
    this.setState(state => ({favorites: {...state.favorites, [id]: !state.favorites[id]}}))
  }

  handleChangeSearch = e => {
    this.setState({searchQuery: e.target.value})
  }

  handleClickSearchBtn = async () => {
    if (this.state.searchQuery) {
      try {
        const {data: searchBeers} = await getBeers(`beer_name=${this.state.searchQuery}`)
        this.setState({searchBeers, isSearch: true})
      } catch (ex) {
        alert("An error ocuurred, Please try again:)")
        console.log(ex)
      }
    }
  }

  handleNavBtnClick = async () => {
    await this.setState({isSearch: false, searchQuery: ""})
  }

  renderFavoritesPage = props => {
    let beers = this.state.beers.filter(item => this.state.favorites[item.id] === true)
    return (
      <Favorites
        {...props}
        beers={beers}
        favorites={this.state.favorites}
        handleAddFavorites={this.handleAddFavorites}
      />
    )
  }

  renderHomePage = props => (
    <Home
      {...props}
      beers={this.state.isSearch ? this.state.searchBeers : this.state.beers}
      favorites={this.state.favorites}
      loadMoreData={this.loadMoreData}
      addFavorites={this.handleAddFavorites}
    />
  )

  render = () => {
    return (
      <main>
        <NavBar onNavBtnClick={this.handleNavBtnClick} />
        <SearchBar
          value={this.state.searchQuery}
          onChange={this.handleChangeSearch}
          onClick={this.handleClickSearchBtn}
        />
        <Switch>
          <Route path="/favorites" exact render={this.renderFavoritesPage} />
          <Route path="/" exact render={this.renderHomePage} />
          <Redirect to="/" />
        </Switch>
      </main>
    )
  }
}

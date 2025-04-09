import { useState } from "react"
import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import searchImages from "./api"

function App() {
  //searchImages('cars')
  searchImages('cars')

  const handleSubmit = async(terms) => {
    console.log('Usted está buscando con: ', term)
    const result = await searchImages(term)
  }
  return (
    <>
      <h1>Pictures App</h1>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList />
    </>
  )
}

export default App
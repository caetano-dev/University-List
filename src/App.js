import React from "react";
import "./styles/App.css";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header"

export default function App() {
  return(
    <>
    <div className="Container">
    <Header/>
    </div>
    <SearchBar/>
</>
  )
}

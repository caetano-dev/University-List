import React, {useContext} from "react";
import Header from "./components/Header";
import UniversityList from "./components/UniversityList";
import { SearchBarContext } from "./context/SearchBarContext";

export default function App() {
  const country = useContext(SearchBarContext);
  return (
    <>
      <SearchBarContext.Provider value={country.name}>
        <Header />
        <UniversityList />
      </SearchBarContext.Provider>
    </>
  );
}

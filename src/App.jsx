import React, { useContext, useState } from "react";
import Table from "./components/Table";
import Filters from "./components/Filters";
import header from "./static/header";
import context from "./context";
export default function App() {
  const [name, setName] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div>
      <context.Provider value={{ name, setName, sort, setSort }}>
        <Filters />
        {<h1 class="display-6 header">{header}</h1>}
        <Table />
      </context.Provider>
    </div>
  );
}

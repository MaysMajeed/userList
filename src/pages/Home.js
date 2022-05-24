import Navagation from "../components/Navagation";
import Allusers from "../components/Allusers";
import { useEffect, useState } from "react";

function Home() {
  const deleteHandler = (id) => {
    const url = "https://jsonplaceholder.typicode.com/users/" + id;
    fetch(url, {
      method: "DELETE",
    });
    console.log(url);
  };

  return (
    <section>
      <Navagation />
      <Allusers onDelete={deleteHandler} />
    </section>
  );
}

export default Home;

import User from "./user";
import { useState, useEffect } from "react";

function Allusers({ onDelete }) {
  const [isLoading, setIsLoading] = useState(false);
  const [actualData, setActualData] = useState([""]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setActualData(data);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading ... </p>
      </section>
    );
  }
  return actualData.map((singlUser) => {
    for (const key in singlUser) {
      return (
        <div className="userCard" key={singlUser.id}>
          <User
            id={singlUser.id}
            name={singlUser.name}
            email={singlUser.email}
            phone={singlUser.phone}
            key={singlUser.id}
            onDelete={onDelete}
          />
        </div>
      );
    }
  });
}

export default Allusers;

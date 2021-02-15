import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${pageIndex}`)
      .then((res) => res.json())
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        console.log("Finally finished fetch");
      });
  }, [pageIndex]);

  const loadPage = (value) => {
    value === "prev"
      ? setPageIndex(pageIndex - 1)
      : setPageIndex(pageIndex + 1);
  };

  return (
    <div className="main-content">
      <table>
        <tbody>
          {data.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.avatar}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button onClick={() => loadPage("prev")}>Previous</button>
      <button onClick={() => loadPage("next")}>Next</button>
    </div>
  );
};

export default FetchData;

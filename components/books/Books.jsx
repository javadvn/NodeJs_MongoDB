import React from 'react'
import React, { useState, useEffect } from "react";
import { Spinner, Table } from "reactstrap";
import axios from "axios";



export function Books({ selectedUserId }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (selectedUserId) {
      setLoading(true);
      setError(undefined);
      setBooks([]);

      axios
        .get(`localhost:3000//api/book=${selectedUserId}`)
        .then(({ data }) => {
          setBooks(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.toString());
          setLoading(false);
        });
    } else {
      setBooks([]); 
    }
  }, [selectedUserId]);

  return (
    <div>
       {error && <h5 color="red">Error occurred ....</h5>}
      {loading && <Spinner />}
      {(
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {books.map(({ id, title, body }, i) => (
              <tr key={id}>
                <th scope="row">{i}</th>
                <td>{title}</td>
                <td>{body}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  )
}





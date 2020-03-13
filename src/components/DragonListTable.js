import React from "react";

function DragonListTable({ list }) {
  console.log("Dados:" + list);
  return (
    <>
      <h1> Lista de dragões</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>História</th>
          </tr>
        </thead>
        <tbody>
          {list.map((dragon) => {
            return (<tr key={dragon.id}>
              <th>{dragon.name}</th>
              <th>{dragon.type}</th>
              <th>{dragon.histories}</th>
            </tr>)
          })}
        </tbody>
      </table>
    </>
  );
}

export default DragonListTable;
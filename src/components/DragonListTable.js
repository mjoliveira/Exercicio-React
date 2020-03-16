import React from "react";
import DragonService from "../api/DragonService";

function DragonListTable({ list }) {
  return (
    <>
      <h1> Lista de dragões</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>História</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {list.map((dragon) => {
            return (<tr key={dragon.id}>
              <th>{dragon.name}</th>
              <th>{dragon.type}</th>
              <th>{dragon.histories}</th>
              <th><button >Deletar</button></th>
            </tr>)
          })}
        </tbody>
      </table>
    </>
  );
}

export default DragonListTable;
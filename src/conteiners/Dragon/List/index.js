import React, { useEffect, useState } from 'react';
import DragonService from '../../../api/DragonService';

function List() {
  const [list, setList] = useState([])

  useEffect(() => {
    (async () => {
      const response = await DragonService.getDragonList();
      setList(response);
    })();
  }, [setList])

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

export default List;

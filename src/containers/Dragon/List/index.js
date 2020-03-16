import React, { useEffect, useState, useCallback } from 'react';
import DragonService from '../../../api/DragonService';
import { navigate } from '@reach/router';
//import DragonListTable from "../../../components/DragonListTable";

function List() {
  const [list, setList] = useState([]);

  const handleCreate = useCallback(
    evt => {
      navigate("/create");
    },
    [],
  )

  const handleDelete = useCallback(async (evt) => {
    await DragonService.delete(evt.target.id);
    //window.location.reload();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await DragonService.list();
      setList(response);
    })();
  }, [setList])

  return (
    <>
      <button onClick={handleCreate}>Criar Dragão</button>
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
              <th><button id={dragon.id} onClick={handleDelete}>Deletar</button></th>
            </tr>)
          })}
        </tbody>
      </table>
    </>
    //<DragonListTable list={list}/>
  );
}

export default List;

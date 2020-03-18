import React, { useEffect, useState, useCallback } from 'react';
import DragonService from '../../../api/DragonService';
import { navigate } from '@reach/router';
import "./list.css";
import IconSVG from "../../../_assets/icons/delete.svg";
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
      <h1 className="center"> Lista de dragões</h1>
      <table border="1" className="table-dragons">
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
              <td>{dragon.name}</td>
              <td className="center">{dragon.type}</td>
              <td>{dragon.histories}</td>
              <td>
                <img id={dragon.id} src={IconSVG} alt="Deletar" onClick={handleDelete} />
              </td>
            </tr>)
          })}
        </tbody>
      </table>
    </>
    //<DragonListTable list={list}/>
  );
}

export default List;

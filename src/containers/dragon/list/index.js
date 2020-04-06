import React, { useEffect, useState, useCallback } from 'react';
import DragonService from '../../../api/DragonService';
import { navigate } from '@reach/router';
import IconDelete from "../../../_assets/icons/delete.svg";
import IconUpdate from "../../../_assets/icons/update.svg";
import IconViewMore from "../../../_assets/icons/view-more.png";
import "../../../_assets/scss/index.scss";

//import DragonListTable from "../../../components/DragonListTable";

function List() {
  const [list, setList] = useState([]);

  const handleCreate = useCallback(
    evt => {
      navigate("/create");
    },
    [],
  )

  const handleUpdate= useCallback(
    evt => {
      navigate("/update/" + evt.target.id);
    },
    [],
  )

  const handleViewMore= useCallback(
    evt => {
      navigate("/view-more/" + evt.target.id);
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

      response.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

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
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {list.map((dragon) => {
            return (<tr key={dragon.id}>
              <td>{dragon.name}</td>
              <td className="center">{dragon.type}</td>
              <td>{dragon.histories}</td>
              <td>
                <img className="option-btn" id={dragon.id} src={IconDelete} alt="Deletar" onClick={handleDelete} />
                <img className="option-btn" id={dragon.id} src={IconUpdate} alt="Editar" onClick={handleUpdate} />
                <img className="option-btn" id={dragon.id} src={IconViewMore} alt="Editar" onClick={handleViewMore} />
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
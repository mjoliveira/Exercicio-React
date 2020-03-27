import React, { useState, useEffect, useCallback } from 'react';
import DragonService from '../../../api/DragonService';
import { navigate } from '@reach/router';

function ViewMore({ id }) {
  const [data, setData] = useState({});

  const formatDate = date => {
    if (date) {
      const dateParsed = new Date(date);
      return new Intl.DateTimeFormat('pt').format(dateParsed);
    }
  };

  const handleClick = useCallback(
    evt => {
      navigate("/");
    },
    [],
  )

  useEffect(() => {
    (async () => {
      if (id) {
        const response = await DragonService.getById(id);
        setData(response);
      }
    })();
  }, [id]);

  return (<>
    <table className="table-create">
      <thead>
        <tr>
          <th colSpan="2">
            <h2 className="subtitle">Mais Detalhes</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th><label>Dragão #{data.id}</label></th>
        </tr>
        <tr>
          <th><label>Data de criação: </label></th>
          <th><label>{formatDate(data.createdAt)}</label></th>
        </tr>
        <tr>
          <th><label>Nome: </label></th>
          <th><label>{data.name}</label></th>
        </tr>
        <tr>
          <th><label>Tipo: </label></th>
          <th><label>{data.type}</label></th>
        </tr>
        <tr>
          <th><label>História: </label></th>
          <th><label>{data.histories}</label></th>
        </tr>

        <tr>
          <th colSpan="2">
            <button type="button" onClick={handleClick}>Voltar</button>
          </th>
        </tr>
      </tbody>
    </table>
  </>)
}

export default ViewMore;

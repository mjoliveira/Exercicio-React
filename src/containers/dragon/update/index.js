import React, { useState, useEffect } from 'react';
import Form from '../../../components/Form';
import DragonService from "../../../api/DragonService";

function Update({ id }) {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      await DragonService.getById(id)
        .then((data) => { return data; })
        .then((dataDragon) => { setData(dataDragon) });
    })();
  }, [id]);

  return <Form data={data} />
}

export default Update;

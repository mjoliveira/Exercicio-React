import React, { useState, useEffect } from 'react';
import Form from '../../../components/Form';
import DragonService from '../../../api/DragonService';

function Update({ id }) {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      if (id) {
        const response = await DragonService.getById(id);
        setData(response);
      }
    })();
  }, [id]);

  return <Form data={data} />
}

export default Update;

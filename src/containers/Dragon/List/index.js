import React, { useEffect, useState } from 'react';
import DragonService from '../../../api/DragonService';
import DragonListTable from "../../../components/DragonListTable";

function List() {
  const [list, setList] = useState([])

  useEffect(() => {
    (async () => {
      const response = await DragonService.list();
      setList(response);
    })();
  }, [setList])

  return (
    <DragonListTable list={list}/>
  );
}

export default List;

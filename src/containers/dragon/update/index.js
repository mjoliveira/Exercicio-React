import React from 'react';
import Form from '../../../components/Form';
import DragonService from "../../../api/DragonService";

function Update({id}) {
  const creating = false;
  const dragon = DragonService.getById(id);
  console.log("Id: " + id);
  console.log("Nome: " + dragon.name);
  return <Form data={creating, dragon} />
}

export default Update;

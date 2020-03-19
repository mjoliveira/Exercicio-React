import React from 'react';
import Form from '../../../components/Form';

function Create() {
  const creating = "true";
  const dragon = {
    name: "",
    type: "",
    histories: ""
  };
  return <Form data={creating, dragon} />
}

export default Create;

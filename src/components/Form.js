import React from 'react';
import DragonService from "../api/DragonService";
import { useFormik } from "formik";
import * as yup from 'yup';
import { navigate } from '@reach/router';


function Form(data) {
  console.log("Form: " + JSON.stringify(data));
  console.log("Nome:   " + data.name);
  const initialValues = (() => {
    if (data === {}) {
      return {
        name: "",
        type: "",
        histories: ""
      }
    } else {
      return {
        name: data.name,
        type: data.type,
        histories: data.histories
      }
    }
  });

  const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: { initialValues },
    validationSchema: yup.object({
      name: yup
        .string()
        .required("O preenchimento do nome é obrigatório."),
      type: yup
        .string()
        .required("O preenchimento do tipo é obrigatório.")
        .min(2, "Informação muito curta."),
      histories: yup
        .string()
        .required("O preencimento da história é obrigatória."),
    }),
    onSubmit: values => {
      if (data === {}) {
        const registerData = {
          name: values.name,
          type: values.type,
          histories: values.histories
        };

        DragonService.create({ ...registerData });

      } else {
        const registerData = {
          id: data.id,
          name: values.name,
          type: values.type,
          histories: values.histories
        };

        DragonService.update({ ...registerData });
      }
      navigate("/");
    }
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table className="table-create">
          <thead>
            <tr>
              {data === null ? <th colSpan="2"><h2 className="subtitle" >Crie um dragão!</h2></th>:<th colSpan="2"><h2 className="subtitle" >Editar um dragão!</h2></th>}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><label htmlFor="name">Nome</label></th>
              <th>
                <input id="name" type="text" autocomplite="off" {...getFieldProps("name")} />
                {touched.name && errors.name ? (
                  <small>{errors.name}</small>
                ) : null}
              </th>
            </tr>
            <tr>
              <th><label htmlFor="type">Tipo</label></th>
              <th>
                <input id="type" type="text" autocomplite="off" {...getFieldProps("type")} />
                {touched.type && errors.type ? (
                  <small>{errors.type}</small>
                ) : null}
              </th>
            </tr>
            <tr>
              <th><label htmlFor="histories">História</label></th>
              <th>
                <textarea id="histories" rows="4" cols="20" name="histories" {...getFieldProps("histories")} />
                {touched.histories && errors.histories ? (
                  <small>{errors.histories}</small>
                ) : null}
              </th>
            </tr>
            <tr>
              <th colSpan="2">
                <button type="submit" disabled={!isValid}>Salvar</button>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Form;

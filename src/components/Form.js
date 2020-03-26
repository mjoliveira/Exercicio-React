import React, { useEffect } from 'react';
import DragonService from "../api/DragonService";
import { useFormik } from "formik";
import * as yup from 'yup';
import { navigate } from '@reach/router';

export default function Form({ id }) {
  const { setFieldValue, getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      type: "",
      histories: "",
    },
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
    onSubmit: async ({ name, type, histories }) => {
      try {
        const registerData = { name, type, histories};

        if (id) {
          registerData.id = id;
          await DragonService.update(registerData);
        } else {
          await DragonService.create(registerData);
        }

        navigate("/");

      } catch (error) {
        console.log('error ==>', error);
        alert("Não foi possível salvar o dragão. Tente novamente!");
      }
    }
  });

  useEffect(() => {
    (async () => {
      if (id) {
        const response = await DragonService.getById(id);
        setFieldValue('name', response.name);
        setFieldValue('type', response.type);
        setFieldValue('histories', response.histories);
      }
    })();
  }, [id, setFieldValue]);

  return (
    <form onSubmit={handleSubmit}>
      <table className="table-create">
        <thead>
          <tr>
            <th colSpan="2">
              <h2 className="subtitle">{id ? "Editar" : "Crie"} um dragão!</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><label htmlFor="name">Nome</label></th>
            <th>
              <input id="name" type="text" {...getFieldProps("name")} />
              {touched.name && errors.name ? (
                <small>{errors.name}</small>
              ) : null}
            </th>
          </tr>
          <tr>
            <th><label htmlFor="type">Tipo</label></th>
            <th>
              <input id="type" type="text" {...getFieldProps("type")} />
              {touched.type && errors.type ? (
                <small>{errors.type}</small>
              ) : null}
            </th>
          </tr>
          <tr>
            <th><label htmlFor="histories">História</label></th>
            <th>
              <textarea id="histories" rows="4" cols="20" {...getFieldProps("histories")} />
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
  );
}
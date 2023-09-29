import React from "react";

export const Editar = () => {
  const tiulo_componente = "Editar Pelicula";

  return (
    <div className="edit_form">
      <h3 className="title">{tiulo_componente}</h3>
      <form className="formulario">
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue="Titulo Original de la pelicula"
        />
        <textarea
          name="descripcion"
          defaultValue="Descripción Original"
          className="descripcion_edit"
        />
        <input type="submit" className="editar" value="Actualizar" />
      </form>
    </div>
  );
};

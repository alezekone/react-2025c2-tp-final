import { useState } from 'react';
import { useProductsContext } from '../context/ProductsContext';
import styles from "./FormularioProducto.module.css";

const FormularioProducto = ({ productoInicial = {}, modo = "agregar", onCerrar }) => {

    const [producto, setProducto] = useState(productoInicial);
    const { agregarProducto, editarProducto } = useProductsContext();

    const handleChange = (e) => {
        // const {name, value} = evento.target;  // <-- Desestructuración.
        // setProducto({...producto, [name]: value});
        setProducto({...producto, [e.target.name]: e.target.value});
    }

    const validarFormulario = () => {
        const nuevosErrores = {};

        if (!producto.nombre.trim()) 
            nuevosErrores.nombre = 'El nombre es obligatorio.';

        if (!producto.precio || producto.precio < 0)
            nuevosErrores.precio = 'El precio debe ser mayor a cero.';

        if (!producto.imagen.trim() || producto.imagen.length < 6)
            nuevosErrores.imagen = 'Se requiere URL de imagnen válida.';

        if (!producto.descripcion.trim() || producto.descripcion.length < 10)
            nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres.';

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
        // Si no hay erores, entonces retorna true.
    }

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        if (!validarFormulario()) // Si no hay errores, validarFormulario() retorna true.
            return;           // =>  Si no hay errores, !validarFormulario() es false.
                              // =>  Si no hay errores, no hace el return y por tanto,
                              // continúa la ejecución de la función.

        // Si no hay errores, entonces:
        if (modo === "agregar") {
            await agregarProducto(producto);
        } else {
            await editarProducto(producto);
        }
        onCerrar();
        }

        onAgregar(productoAEnviar); /// ***** <-- Ver Admin.jsx ***** ///
        // Limpiamos el formulario
        setProducto({
            nombre: '',
            precio: '', 
            imagen: '',
            descripcion: ''
        });
        // Limpiamos los errores que puiera haber.
        setErrores({});
    


    return (
    <div 
      className={styles.modalOverlay}
      aria-modal="true"
      role="dialog"
    >
      <div className={styles.modalContainer}>
        {/* Contenido del Modal */}
        <div className={styles.modalContent}>   
          {/* Encabezado del Modal */}
          <div className={styles.modalHeader}>
            <h3 className={styles.modalHeaderTitle}>
              {modo === "agregar" ? "Agregar Producto" : "Editar Producto"}
            </h3>
            <button 
              type="button" 
              onClick={onCerrar}
              className={styles.closeButton}
            >
              <X />
            </button>
          </div>
          {/* Cuerpo del Modal */}
          <form onSubmit={manejarSubmit}>
            <div className={styles.formGrid}>
              {/* Campo Nombre */}
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  className={styles.formInputBase}
                  placeholder="Ingrese el nombre del producto"
                  value={producto.nombre || ""}
                  onChange={manejarChange}
                  required
                />
              </div>
              {/* Campo Precio */}
              <div className={`${styles.colSpan2} ${styles.smColSpan1}`}>
                <label className={styles.formLabel}>
                  Precio
                </label>
                <input
                  type="number"
                  name="precio"
                  id="precio"
                  className={styles.formInputBase}
                  placeholder="$0.00"
                  value={producto.precio || ""}
                  onChange={manejarChange}
                  required
                  min="0"
                  step="any"
                />
              </div>
              
              {/* Campo URL de Imagen */}
              <div className={`${styles.colSpan2} ${styles.smColSpan1}`}>
                <label className={styles.formLabel}>
                  URL de Imagen
                </label>
                <input
                  type="text"
                  name="imagen"
                  id="imagen"
                  className={styles.formInputBase}
                  placeholder="https://ejemplo.com/imagen.jpg"
                  value={producto.imagen || ""}
                  onChange={manejarChange}
                />
              </div>
              {/* Campo Descripcion */}
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>
                  Descripción del Producto
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows="4"
                  className={styles.formInputBase}
                  placeholder="Escriba la descripción del producto aquí"
                  value={producto.descripcion || ""}
                  onChange={manejarChange}
                  required
                ></textarea>
              </div>
            </div>
            {/* Botones de Accion */}
            <div className={styles.modalActions}>
              {/* Boton Primario */}
              <button 
                type="submit" 
                className={`${styles.btnBase} ${styles.btnPrimary}`}
              >
                {modo === "agregar" ? <>Agregar</> : <>Actualizar</>}
              </button>
              {/* Boton Secundario o de cancelar */}
              <button 
                type="button" 
                onClick={onCerrar}
                className={`${styles.btnBase} ${styles.btnSecondary}`}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}

export default FormularioProducto;  
     

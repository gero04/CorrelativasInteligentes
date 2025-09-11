import { useState, useEffect } from 'react';

export const Materias = () => {

  //Variable donde guardo las materias en el front-end
  const [materias, setMaterias] = useState([]);

  //Variable para simular una carga y que no se vuelva loco el usuario
  const [loading, setLoading] = useState(true);

  //Variable para guardar un error
  const [error, setError] = useState(null);

  // Función para fetch (obtener) las materias de manera asincrona
  const fetchMaterias = async () => {
    try {

      //Primero ponemos a cargar la pagina
      setLoading(true);

      //Si antes el error estaba en otro estado, lo volvemos a null
      setError(null);
      
      //Guardamos la response en una variable
      const response = await fetch('http://localhost:8080/api/materias');
      
      //Si la response no es ok, no es correcta, lanza un error
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      //Si la response es correcta, guardamos los datos en una variable intermedia data
      const data = await response.json();

      //Guardo los datos de la response en la variable materias
      setMaterias(data);
      
    } 
    //Capturamos el error si falla el try
    catch (err) {
      setError(err.message);
      console.error('Error fetching materias:', err);
    } 
    //Volvemos la variable loading a false
    finally {
      setLoading(false);
    }
  };

  // useEffect para cargar las materias al montar el componente
  useEffect(() => {
    //Apenas carga la pagina ejecutamos la funcion fetchMaterias()
    fetchMaterias();
  }, []);

  // Estados de renderizado
  if (loading) {
    //Si esta en true la variable loading, simulamos que la pagina esta cargando
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Materias del Plan</h1>
        <p>Cargando materias...</p>
      </div>
    );
  }

  //Si esta en true la variable error, lo informamos
  if (error) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Materias del Plan</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong>Error:</strong> {error}
        </div>
        <button 
        //Si clickeamos este boton, la pagina se recarga
          onClick={fetchMaterias}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reintentar
        </button>
      </div>
    );
  }

  //Si todo sale bien, mostramos las materias
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Materias del Plan</h1>
      
      {/* Botón para recargar las materias*/}
      <button 
        onClick={fetchMaterias}
        className="mb-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Actualizar Lista
      </button>

      {/* Mostrar el JSON en texto plano */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Datos en JSON:</h2>
        <pre className="text-sm overflow-auto bg-white p-4 border rounded">
          {JSON.stringify(materias, null, 2)}
        </pre>
      </div>

      {/* También mostramos información básica */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">
          Total de materias: {materias.length}
        </h2>
      </div>
    </div>
  );
};
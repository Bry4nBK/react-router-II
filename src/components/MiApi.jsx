import { useEffect, useState } from "react";

const MiApi = () => {
    const [datosApi, setDatosApi] = useState([]);
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(apiUrl);

                if (!resp.ok) {
                    throw new Error('Error al obtener datos de la Api');
                }

                const data = await resp.json();
                setDatosApi(data);
            } catch (error) {
                console.error('Hubo un problema al obtener los datos:', error.message);
            }
        };

        fetchData();
    }, []);

    return datosApi;
};

export default MiApi;

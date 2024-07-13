import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PokemonDetalles = (props) => {
  const { PokemonId } = useParams();
  const pokemones = props.data.results || [];

  const pokemon = pokemones.find((pokemon) => pokemon.name === PokemonId);
  if (!pokemon) {
    return null;
  }

  const DetailsUrl = pokemon.url;

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(DetailsUrl);
        if (!resp.ok) {
          throw new Error("Error al obtener datos del pokemon");
        }
        const data = await resp.json();
        setPokemonData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [DetailsUrl]);

  const renderStats = () => {
    if (!pokemonData || !pokemonData.stats) return null;

    return pokemonData.stats.map((stat, index) => (
      <p key={index}>
        {stat.stat.name}: {stat.base_stat}
      </p>
    ));
  };

  const renderTypes = () => {
    if (!pokemonData || !pokemonData.types) return null;

    return pokemonData.types.map((type, index) => (
      <p key={index}>
        Tipo {index + 1}: {type.type.name}
      </p>
    ));
  };

  const renderImage = () => {
    if (!pokemonData || !pokemonData.sprites || !pokemonData.sprites.front_default) return null;

    return <img className="imageCard" src={pokemonData.sprites.front_default} alt={pokemonData.name} />;
  };

  return (
    <div className="cardLayout">
      <div>{renderImage()}</div>
      <div className="infoCard">
        <h1>{pokemonData ? pokemonData.name : "Loading..."}</h1>
        <p>Height: {pokemonData ? pokemonData.height : "Loading..."}</p>
        <p>Weight: {pokemonData ? pokemonData.weight : "Loading..."}</p>
        {renderStats()}
        {renderTypes()}
      </div>
    </div>
  );
};

export default PokemonDetalles;

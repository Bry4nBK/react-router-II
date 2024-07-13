import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Pokemones = ({ data }) => {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelectedPokemon(e.target.value);
  };

  const handleClick = () => {
    if (selectedPokemon) {
      navigate(`/Pokemones/${selectedPokemon}`);
    } else {
      console.error("Debes seleccionar un Pokemon");
    }
  };

  const renderOptions = () => {
    return (
      <>
        <option value="">Selecciona tu pokemon</option>
        {data.results.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </>
    );
  };

  return (
    <div className="selectorLayout">
      <h1 className="mb-4">Selecciona un pokemon</h1>
      <Form.Group>
        <Form.Control
          as="select"
          className="selectConfig"
          value={selectedPokemon}
          onChange={handleChange}
        >
          {renderOptions()}
        </Form.Control>
      </Form.Group>
      <Button className="buttonConfig" variant="primary" onClick={handleClick}>
        Ver Detalle
      </Button>
    </div>
  );
};

export default Pokemones;

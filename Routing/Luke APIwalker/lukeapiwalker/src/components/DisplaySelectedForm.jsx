import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const DisplaySelectedForm = ({ id, resource }) => {
    const [result, setResult] = useState({});
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${resource}/${id}`)
            .then((response) => setResult(response.data));
    }, [id, resource]);

    return (
        <>
            {resource === "people" ? (
                <>
                    <h3>Name: {result.name}</h3>
                    <h3>Height: {result.height}</h3>
                    <h3>Mass: {result.mass}</h3>
                    <h3>Hair Color: {result.hair_color}</h3>
                    <h3>Skin Color: {result.skin_color}</h3>
                </>
            ) : (
                <>
                    <h3>Name: {result.name}</h3>
                    <h3>Climate: {result.climate}</h3>
                    <h3>Terrain: {result.terrain}</h3>
                    <h3>Surface Water: {result.surface_water}</h3>
                    <h3>Population: {result.population}</h3>
                </>
            )}
        </>
    );
};

export default DisplaySelectedForm;

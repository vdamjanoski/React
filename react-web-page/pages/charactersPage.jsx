import CharacterCard from "../components/characterCard";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

const CharactersPage = ({ onFavorite, characters }) => {
    return (
      <div>
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} onFavorite={onFavorite} />
        ))}
      </div>
    );
  };

  export default CharactersPage
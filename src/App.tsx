// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { useState, useMemo } from 'react';

// export type Character = {
//   id: number
//   name: string,
// }

// const fetchCharacters = async (): Promise<Character[]> => {
//   const response = await axios.get('https://rickandmortyapi.com/api/character');
//   return response.data.results;
// };

// const useCharacters = () => {
//   return useQuery(['characters'], fetchCharacters);
// }


// const App = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const { data: characters, error, isLoading } = useCharacters();

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   }

//   const filteredData = useMemo(() => {
//     return characters.filter((character) => character.name.includes(searchTerm));
//   }, [characters, searchTerm]);


//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return error;
//   }

//   if (!characters) {
//     return <p>No characters found.</p>;
//   }

//   return (
//     <>
//       <input type="text" value={searchTerm} onChange={handleChange} />
//       {characters && (
//         <ul>
//           {filteredData?.map((character) => (
//             <li key={character.id}>{character.name}</li>
//           ))}
//         </ul>
//       )}
//     </>

//   );
// }

// export default App
import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App
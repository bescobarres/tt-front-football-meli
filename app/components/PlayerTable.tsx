import axios from 'axios';

import { useState } from 'react';

interface Player {
  id: number;
  name: string;
}

interface Stats {
  power: number;
  distance: number;
  time: number;
  passes: number;
  speed: number;
  score: number;
}

interface PlayerData {
  id: number;
  player: Player;
  stats: Stats;
  date: string;
}

const initialPlayers: PlayerData[] = [];

const [players, setPlayers] = useState<PlayerData[]>(initialPlayers);

const fetchData = async () => {
    try {
      const response = await axios.post(
        'http://double-insight-412703.uw.r.appspot.com/training',
        players
      );
      setPlayers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const PlayerTable = () => {
    // ...
  
    return (
      <table className="w-full text-left text-sm font-light">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Player ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Power
            </th>
            <th scope="col" className="px-6 py-3">
              Distance
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
            <th scope="col" className="px-6 py-3">
              Passes
            </th>
            <th scope="col" className="px-6 py-3">
              Speed
            </th>
            <th scope="col" className="px-6 py-3">
              Score
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} className="bg-white border-b">
              <td className="px-6 py-4">{player.id}</td>
              <td className="px-6 py-4">{player.player.id}</td>
              <td className="px-6 py-4">{player.player.name}</td>
              <td className="px-6 py-4">{player.stats.power}</td>
              <td className="px-6 py-4">{player.stats.distance}</td>
              <td className="px-6 py-4">{player.stats.time}</td>
              <td className="px-6 py-4">{player.stats.passes}</td>
              <td className="px-6 py-4">{player.stats.speed}</td>
              <td className="px-6 py-4">{player.stats.score}</td>
              <td className="px-6 py-4">{player.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
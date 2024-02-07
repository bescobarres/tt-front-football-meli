import { useState } from 'react';
import axios from 'axios';

export interface Player {
    playerId: string;
    name: string;
    power: number;
    distance: number;
    time: number;
    passes: number;
    date: string;
}

const initialPlayer: Player = {
    playerId: '1',
    name: 'Player 1',
    power: 0,
    distance: 0,
    time: 0,
    passes: 0,
    date: Date.now().toString(),
};

const initialPlayers: Player[] = [];

interface PlayerFormProps {
    onSendData: (players: Player[]) => void;
}

var formularioActive = false;

const apiUrlTraining = process.env.NEXT_PUBLIC_BACKEND_URL + 'training';


const sendData = async (players: Player[]) => {

    const config = {
        method: 'post',
        url: apiUrlTraining,
        data: players
      };

    try {
      const response = await axios.post(apiUrlTraining, players, config);
      console.log(response.data);
      alert(response.data);
    } catch (error) {
      console.error(error);
      alert(error);
    }

  };




const PlayerForm = ({ onSendData }: PlayerFormProps) => {


    const [player, setPlayer] = useState<Player>(initialPlayer);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPlayer({ ...player, [name]: value });
    };

    const handleNumberInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPlayer({ ...player, [name]: Number(value) });
    };


    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPlayer({ ...player, [name]: formatDate(value) });
        
    };

    function formatDate(value: string): string {
        const currentDate = new Date(value);
      
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; 
        const year = currentDate.getFullYear();
      
        const formattedDay = day < 10 ? `0${day}` : day.toString();
        const formattedMonth = month < 10 ? `0${month}` : month.toString();
      
        const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;
      
        return formattedDate;
      }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const playerLocal = Object.values(player);
        if(playerLocal.some((val) => val == null || val == '' )) return alert("Llene los campos del formulario");

        event.preventDefault();
        setPlayer(initialPlayer);
        sendData([player]);
      };


    return (
        <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex flex-col">
            <label htmlFor="playerId" className="text-gray-700 text-sm font-bold mb-2">
                Player ID
            </label>
            <input
                type="text"
                name="playerId"
                value={player.playerId}
                onChange={handleInputChange}
                className="px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <label htmlFor="name" className="text-gray-700 text-sm font-bold mb-2 mt-4">
                Name
            </label>
            <input
                type="text"
                name="name"
                value={player.name}
                onChange={handleInputChange}
                className="px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <label htmlFor="power" className="text-gray-700 text-sm font-bold mb-2 mt-4">
                Power
            </label>
            <input
                type="number"
                name="power"
                value={player.power}
                onChange={handleNumberInputChange}
                className="px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <label htmlFor="distance" className="text-gray-700 text-sm font-bold mb-2 mt-4">
                Distance
            </label>
            <input
                type="number"
                name="distance"
                value={player.distance}
                onChange={handleNumberInputChange}
                className="px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <label htmlFor="time" className="text-gray-700 text-sm font-bold mb-2 mt-4">
                Time
            </label>
            <input
                type="number"
                name="time"
                value={player.time}
                onChange={handleNumberInputChange}
                className="px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <label htmlFor="passes" className="text-gray-700 text-sm font-bold mb-2 mt-4">
                Passes
            </label>
            <input
                type="number"
                name="passes"
                value={player.passes}
                onChange={handleNumberInputChange}
                className="px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <label htmlFor="date" className="text-gray-700 text-sm font-bold mb-2 mt-4">
                Date
            </label>
            <input
                type="date"
                name="date"
                value={player.date}
                onChange={handleDateChange}
                className="px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button 
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
                Add Player
            </button>
        </form>
    );
};


export default PlayerForm;
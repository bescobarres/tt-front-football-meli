'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function StartingLineUpTeam() {

     type StartingLineUp = {
        player: {
            id: number,
            name: string
        };
        score: number;
    }

    const [data, setData] = useState<StartingLineUp[]>([]);

    const [startinglinequantity, setStartingLineQuantity] = useState(5);

const sendData = async (startinglinequantity: number) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_URL + '/team?day=' + formatDate() + '&startingLineUpQuantity=' + startinglinequantity
    );
    setData(response.data);
  } catch (error: any) {
    alert(error.response.data.message);
  }
};

function formatDate(): string {
    const currentDate = new Date();
  
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
  
    const formattedDay = day < 10 ? `0${day}` : day.toString();
    const formattedMonth = month < 10 ? `0${month}` : month.toString();
  
    const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;
  
    return formattedDate;
  }


useEffect(() => {
    sendData(startinglinequantity);
}, [])




const handlerSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setData([]);
    setStartingLineQuantity(parseInt(event.target.value))
    sendData(parseInt(event.target.value));
};


    return (
    <div>
        <div>
        <select
        name="startinglinequantity"
        value={startinglinequantity}
        onChange={handlerSelect}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="5">5</option>
        <option value="8">8</option>
        <option value="11">11</option>
      </select>
                                        
    </div>
    <div className='w-full flex flex-col mt-8'>
    <div className='w-full overflow-x-auto rounded-lg'>
        <div className='align-middle inline-block w-full'>
            <div className='w-full shadow overflow-hidden sm:rounded-lg'>
                <table className='w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th
                                scope='col'
                                className='p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Player ID
                            </th>
                            <th
                                scope='col'
                                className='p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Nombre Player
                            </th>
                            <th
                                scope='col'
                                className='p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Score
                            </th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {data.map((item) => (
                            <tr key={item?.player.id}>
                                <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-500'>
                                    {item?.player.id}
                                </td>
                                <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>
                                    {item?.player.name}
                                </td>
                                <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-500'>
                                    {item?.score}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
</div>);
}
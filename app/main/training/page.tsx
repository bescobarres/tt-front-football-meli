'use client'

import PlayerForm from '@/app/components/PlayerForm';
import { Player } from '@/app/components/PlayerForm';
import axios from 'axios';

const HomePage = () => {
  const handleSendData = async (players: Player[]) => {
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL +'training', players);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <PlayerForm onSendData={handleSendData} />
    </div>
  );
};

export default HomePage;
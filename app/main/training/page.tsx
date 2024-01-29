'use client'

import PlayerForm from '@/app/components/PlayerForm';
import { Player } from '@/app/components/PlayerForm';
import api from '@/app/components/Api';

const HomePage = () => {
  const handleSendData = async (players: Player[]) => {
    try {
      const response = await api.post('training', players);
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
import dynamic from 'next/dynamic';
import Card from '../components/Card';
import Gift from '../components/Gift';
import Cake from '../components/Cake';

const Party = dynamic(() => import('../components/Firework'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center overflow-x-hidden px-4'>
      <Party />
      <div className='fixed top-11 md:top-11 text-white flex justify-center items-center flex-col w-full max-w-md mx-auto'>
        <Card name='가여닝' />
        {/* <Gift /> */}
        <Cake />
      </div>
    </div>
  );
}

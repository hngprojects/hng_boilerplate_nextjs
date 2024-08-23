import { Check } from 'lucide-react';
import { NextPage } from 'next';
import Link from 'next/link';
import PastIncidents from '~/components/status/PastIncidents';
import StatusGrid from '~/components/status/StatusTable';


const StatusPage: NextPage = () => {
  return (
    <div>
      <div className='hidden md:block py-16 pl-8 bg-cover bg-center' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/status.jpg')" }}>
        <h1 className="text-neutral-600 md:text-neutral-50 mb-2 text-2xl md:text-4xl font-bold">API Status Page</h1>
        <p className='text-neutral-500 md:text-neutral-200 text-sm md:text-lg'>This status page displays the API health status of HNG Boilerplate.</p>
      </div>
      <div className='py-0 md:py-16 flex flex-col items-center'>
        <div className='border-4 rounded-full border-green-600 p-3 my-3'><Check height={30} width={30} strokeWidth={3} color='#16a34a' /></div>
        <p className='md:text-xl font-bold text-neutral-700'>All Systems Operational</p>
      </div>

      <div className='md:hidden py-10 text-center'>
        <p className='text-neutral-500 text-sm'>This status page displays the API health status of HNG Boilerplate.</p>
      </div>
      <div className='max-w-4xl mx-auto text-center md:text-right text-[10px] text-neutral-600 md:text-xs'>Uptime over the past 30 days. <Link href={''} className='text-primary underline'>View historical uptime.</Link></div>
      <StatusGrid />
      <PastIncidents/>
    </div>
  );
};

export default StatusPage;
'use client'
import React, { useEffect, useState } from 'react';
import { cardData } from '~/app/integration/data/data';
import SideMenu from '../Sidemenu/sideMenu';
import { Search } from 'lucide-react';
import { IntegrationCard } from '~/components/common/IntegrationCard/IntegrationCard';

const Integration = () => {
  const [filter, setFilter] = useState('All');
  const [integrationCards, setIntegrationCards] = useState(cardData);
  const [filteredCards, setFilteredCards] = useState<any>([])

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  useEffect(() => {
    let temp = cardData?.filter(data => {
      if (filter === 'Active') return data.isActive;
      if (filter === 'Inactive') return !data.isActive;
      return true;
    })
    setFilteredCards([...temp])
  }, [filter])

  return (
    <SideMenu>
      <div className='w-full'>
        <p className='text-xl font-semibold'>Integration</p>
        <p className='text-sm mt-2'>Supercharge your workflow and handle repetitive tasks with apps you use everyday</p>
        <div className='w-full flex flex-col md:flex-row gap-x-2 md:gap-x-4 justify-between mt-8'>
          <ul className='flex items-center justify-center gap-x-4 py-1 text-xs border border-[#CBD5E1] w-[9.5rem] rounded-md'>
            <li
              className={`cursor-pointer px-2 py-1 rounded-md ${filter === 'All' ? 'bg-gray-300' : ''}`}
              onClick={() => handleFilterChange('All')}
            >
              All
            </li>
            <li
              className={`cursor-pointer ${filter === 'Active' ? 'bg-gray-300 px-1 py-1 rounded-md' : ''}`}
              onClick={() => handleFilterChange('Active')}
            >
              Active
            </li>
            <li
              className={`cursor-pointer ${filter === 'Inactive' ? 'bg-gray-300 px-1 py-1 rounded-md' : ''}`}
              onClick={() => handleFilterChange('Inactive')}
            >
              Inactive
            </li>
          </ul>
          <div className='flex items-center gap-x-2 border border-gray-200 rounded-md max-w-[22rem] px-2'>
            <Search className='w-4 md:w-7' />
            <input type='text' placeholder='Search' className='w-full text-sm py-2 focus:outline-none' />
          </div>
        </div>
        <div className="grid max-[550px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-4 pt-4 pb-8">
          {filteredCards.map((data: any, idx: number) => (
            <div key={idx}>
              <IntegrationCard
                heading={data.heading}
                description={data.description}
                logoURL={data.logoURL}
                isActive={data.isActive}
              />
            </div>
          )
          )}
        </div>
      </div>
    </SideMenu>
  );
}

export default Integration;

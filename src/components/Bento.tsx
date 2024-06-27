import React from 'react';
import { brandEnquiry, earlyAccess, investorRelations, joinUs, ourClients, ourTeam } from '../assets';

const Bento = () => {
  return (
    <main className='mx-8'>
      <section className='flex flex-col gap-4 mt-8 mb-4 lg:mx-8 lg:flex-row'>
        <div className='h-[25vh] lg:basis-3/5 lg:h-[40vh] overflow-hidden rounded-3xl'>
          <img src={brandEnquiry} alt="brandEnquiry" className='h-full w-full object-cover rounded-3xl transform transition-transform duration-300 hover:scale-125' />
        </div>
        <div className='h-[25vh] lg:basis-2/5 lg:h-[40vh] overflow-hidden rounded-3xl'>
          <img src={ourClients} alt="ourClients" className='h-full w-full object-cover rounded-3xl transform transition-transform duration-300 hover:scale-125' />
        </div>
      </section>

      <section className='flex flex-col gap-4 mb-4 lg:flex-row'>
        <div className='h-[25vh] lg:basis-2/5 lg:h-[40vh] overflow-hidden rounded-3xl'>
          <img src={investorRelations} alt="investorRelations" className='h-full w-full object-cover rounded-3xl transform transition-transform duration-300 hover:scale-125' />
        </div>
        <div className='h-[25vh] lg:basis-3/5 lg:h-[40vh] overflow-hidden rounded-3xl'>
          <img src={earlyAccess} alt="earlyAccess" className='h-full w-full object-cover rounded-3xl transform transition-transform duration-300 hover:scale-125' />
        </div>
      </section>

      <section className='flex flex-col gap-4 mb-4 lg:mx-16 lg:flex-row'>
        <div className='h-[25vh] lg:basis-4/7 lg:h-[40vh] overflow-hidden rounded-3xl'>
          <img src={ourTeam} alt="ourTeam" className='h-full w-full object-cover rounded-3xl transform transition-transform duration-300 hover:scale-125' />
        </div>
        <div className='h-[25vh] lg:basis-3/7 lg:h-[40vh] overflow-hidden rounded-3xl'>
          <img src={joinUs} alt="joinUs" className='h-full w-full object-cover rounded-3xl transform transition-transform duration-300 hover:scale-125' />
        </div>
      </section>
    </main>
  );
}

export default Bento;

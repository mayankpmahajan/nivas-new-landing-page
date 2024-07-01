import React, { useState } from 'react';
import { brandEnquiry, earlyAccess, investorRelations, joinUs, ourClients, ourTeam } from '../assets';
import BrandEnquiryPopupComponent from './brandEnquiryPopup';
import OurClientsPopupComponent from './ourClientsPopup';
import InvestorRelationsPopupComponent from './investorRelationsPopup';
import EarlyAccessPopupComponent from './earlyAccessPopup';
import OurTeamPopupComponent from './ourTeamPopup';
import JoinUsPopupComponent from './joinUsPopup';

const Bento = () => {
  const [popupOpen, setPopupOpen] = useState<string | null>(null);

  const openPopup = (popupType: string) => setPopupOpen(popupType);
  const closePopup = () => setPopupOpen(null);

  const openJoinUsPopup = () => {
    setPopupOpen('joinUs'); // Open Join Us popup
  };

  return (
    <main className='mx-8'>
      <section className='flex flex-col gap-4 mt-8 mb-4 lg:mx-8 lg:flex-row'>
        <div className='h-[25vh] lg:basis-3/5 lg:h-[40vh] overflow-hidden rounded-3xl' onClick={() => openPopup('brandEnquiry')}>
          <img src={brandEnquiry} alt="brandEnquiry" className='h-full w-full object-cover rounded-3xl transform transition-transform duration-300 hover:scale-125' />
        </div>
        <div className='h-[25vh] lg:basis-2/5 lg:h-[40vh] overflow-hidden rounded-3xl' onClick={() => openPopup('ourClients')}>
          <img src={ourClients} alt="ourClients" className='h-full w-full object-cover rounded-3xl transform transition-transform duration-300 hover:scale-125' />
        </div>
      </section>

      <section className='flex flex-col gap-4 mb-4 lg:flex-row'>
        <div className='h-[25vh] lg:basis-2/5 lg:h-[40vh] overflow-hidden rounded-3xl' onClick={() => openPopup('investorRelations')}>
          <img src={investorRelations} alt="investorRelations" className='h-full w-full object-cover rounded-3xl transform transition-transform duration-300 hover:scale-125' />
        </div>
        <div className='h-[25vh] lg:basis-3/5 lg:h-[40vh] overflow-hidden rounded-3xl' onClick={() => openPopup('earlyAccess')}>
          <img src={earlyAccess} alt="earlyAccess" className='h-full w-full object-cover rounded-3xl transform transition-transform duration-300 hover:scale-125' />
        </div>
      </section>

      <section className='flex flex-col gap-4 mb-4 lg:mx-16 lg:flex-row'>
        <div className='h-[25vh] lg:basis-4/7 lg:h-[40vh] overflow-hidden rounded-3xl' onClick={() => openPopup('ourTeam')}>
          <img src={ourTeam} alt="ourTeam" className='h-full w-full object-cover rounded-3xl transform transition-transform duration-300 hover:scale-125' />
        </div>
        <div className='h-[25vh] lg:basis-3/7 lg:h-[40vh] overflow-hidden rounded-3xl' onClick={openJoinUsPopup}>
          <img src={joinUs} alt="joinUs" className='h-full w-full object-cover rounded-3xl transform transition-transform duration-300 hover:scale-125' />
        </div>
      </section>

      {popupOpen === 'brandEnquiry' && <BrandEnquiryPopupComponent isOpen={true} onClose={closePopup} />}
      {popupOpen === 'ourClients' && <OurClientsPopupComponent isOpen={true} onClose={closePopup} />}
      {popupOpen === 'investorRelations' && <InvestorRelationsPopupComponent isOpen={true} onClose={closePopup} />}
      {popupOpen === 'earlyAccess' && <EarlyAccessPopupComponent isOpen={true} onClose={closePopup} />}
      {popupOpen === 'ourTeam' && <OurTeamPopupComponent isOpen={true} onClose={closePopup} />}
      {popupOpen === 'joinUs' && <JoinUsPopupComponent isOpen={true} onClose={closePopup} />}
    </main>
  );
}

export default Bento;

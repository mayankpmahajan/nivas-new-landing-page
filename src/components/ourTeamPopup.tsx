import React, { useRef, useEffect } from "react";
import { ourTeamPopup, team1, team2, team3 } from "../assets";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const ourTeamPopupComponent: React.FC<PopupProps> = ({ isOpen, onClose }) => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
                ref={popupRef}
                className="bg-white w-[90vw] md:w-[80vw] lg:w-[80vw] h-auto lg:h-[70vh] rounded-xl lg:rounded-3xl relative flex flex-col lg:flex-row  overflow-hidden"
            >
                <section className="hidden lg:block w-full lg:w-[60%] h-[30vh] lg:h-full">
                    <img src={ourTeamPopup} alt="ourTeam" className="object-cover h-full w-full rounded-t-lg lg:rounded-l-3xl lg:rounded-t-none" />
                </section>

                <section className="m-[4vw] md:m-[3vw] lg:m-[2vw] flex-grow flex flex-col items-center justify-center overflow-y-auto">
                    <h1 className="text-xl md:text-2xl lg:text-[2.5rem] font-bold lg:mb-4 text-center">Our Team</h1>
                   
                    <section className="flex flex-wrap justify-center gap-4 w-full">
                        <div className="flex flex-col items-center p-1 md:p-4 rounded-lg w-full md:w-full lg:w-[30%]">
                            <div className="rounded-full overflow-hidden h-12 w-12 md:h-24 md:w-24 lg:h-32 lg:w-32">
                                <img src={team2} alt="Naveen" className="h-full w-full object-cover" />
                            </div>
                            <h3 className="mt-2 text-black text-sm md:text-lg lg:text-2xl font-semibold text-center">Naveen Kumar</h3>
                            <p className="text-[#C18904] text-xs md:text-md lg:text-lg font-medium text-center">Founder & CEO</p>
                            <p className="text-black text-center mt-2 text-[0.5rem] md:text-xs lg:text-base ">Ex SAP-Incture | Traform | OYO 3rd generation business owner having diverse backgrounds across industries. He has built & scaled products meeting the trends and inquisitiveness of consumers.</p>
                        </div>

                        <div className="flex flex-col items-center p-1 md:p-4 rounded-lg w-full md:w-full lg:w-[30%]">
                            <div className="rounded-full overflow-hidden h-12 w-12 md:h-24 md:w-24 lg:h-32 lg:w-32">
                                <img src={team1} alt="Venugopal" className="h-full w-full object-cover" />
                            </div>
                            <h3 className="mt-2 text-black text-sm md:text-lg lg:text-2xl font-bold text-center">Venugopal S</h3>
                            <p className="text-[#C18904] text-xs md:text-md lg:text-lg text-center">Founder & CSO</p>
                            <p className="text-black text-center mt-2 text-[0.5rem] md:text-sm lg:text-base">A seasoned veteran in the fashion industry with over 30 years of sourcing & executing on demand fashion for large retail brands.</p>
                        </div>

                        <div className="flex flex-col items-center p-1 md:p-4 rounded-lg w-full md:w-full lg:w-[30%]">
                            <div className="rounded-full overflow-hidden h-12 w-12 md:h-24 md:w-24 lg:h-32 lg:w-32">
                                <img src={team3} alt="Dipak" className="h-full w-full object-cover" />
                            </div>
                            <h3 className="mt-2 text-black text-sm md:text-lg lg:text-2xl font-bold text-center">Dipak Mamdapure</h3>
                            <p className="text-[#C18904] text-xs md:text-md lg:text-lg text-center">Co-Founder & CTO</p>
                            <p className="text-black text-center mt-2 text-[0.5rem] md:text-sm lg:text-base">18 years of technology experience, having contributed to complex product building during his tenure.</p>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default ourTeamPopupComponent;

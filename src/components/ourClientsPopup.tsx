import React, { useRef, useEffect, useState } from "react";
import { brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, ourClientsPopup } from "../assets";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const ourClientsPopupComponent: React.FC<PopupProps> = ({ isOpen, onClose }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

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
                className="bg-white w-[90vw] md:w-[80vw] lg:w-[70vw] h-auto lg:h-[70vh] rounded-xl lg:rounded-3xl relative flex flex-col lg:flex-row font-montserrat"
            >
                <section className="hidden lg:block w-full lg:w-[30%] h-[30vh] lg:h-full">
                    <img src={ourClientsPopup} alt="ourClients" className="object-cover h-full w-full rounded-t-lg lg:rounded-l-3xl lg:rounded-t-none" />
                </section>

                <section className="m-[4vw] lg:m-[2vw] flex-grow flex flex-col items-center justify-center">
                    <h1 className="text-2xl lg:text-[3.5rem] font-bold lg:mb-4 lg:p-2 text-center">Brand Enquiry</h1>
                    
                    <section className="w-full flex flex-col items-center">
                        <div className="grid grid-cols-5 gap-4 py-6 lg:py-12 px-2 justify-items-center">
                            <img src={brand1} alt="brand1" className="h-[8vw] lg:h-[6vw]" />
                            <img src={brand2} alt="brand2" className="h-[8vw] lg:h-[6vw]" />
                            <img src={brand3} alt="brand3" className="h-[8vw] lg:h-[6vw]" />
                            <img src={brand4} alt="brand4" className="h-[8vw] lg:h-[6vw]" />
                            <img src={brand5} alt="brand5" className="h-[8vw] lg:h-[6vw]" />
                        </div>

                        <div className="grid grid-cols-4 gap-4 py-4 px-2 mt-4 lg:mt-8 justify-items-center">
                            <img src={brand6} alt="brand6" className="h-[8vw] lg:h-[7vw]" />
                            <img src={brand7} alt="brand7" className="h-[8vw] lg:h-[7vw]" />
                            <img src={brand8} alt="brand8" className="h-[8vw] lg:h-[7vw]" />
                            <img src={brand9} alt="brand9" className="h-[8vw] lg:h-[7vw]" />
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default ourClientsPopupComponent;

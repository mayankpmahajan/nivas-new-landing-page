import React, { useRef, useEffect, useState } from "react";
import { brandEnquiryPopup } from "../assets";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    name: string;
    subject: string;
    email: string;
    enquiry: string;
}

const brandEnquiryPopupComponent: React.FC<PopupProps> = ({ isOpen, onClose }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        subject: '',
        email: '',
        enquiry: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/save-form-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log(response);

            if (response.ok) {
                setSubmissionStatus('success');
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            setSubmissionStatus('error');
            console.error('An error occurred:', error);
        }
    };

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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div
                ref={popupRef}
                className="bg-white w-[80vw] lg:h-[70vh] lg:w-[70vw] rounded-xl lg:rounded-3xl relative flex font-montserrat"
            >
                <section className="w-[20%] h-[100%] hidden lg:block">
                    <img src={brandEnquiryPopup} alt="brandEnquiry" className="object-cover h-full w-full rounded-t-lg" />
                </section>

                <section className="m-[4vw] lg:m-[2vw]">
                    <h1 className="text-2xl lg:text-[2.5rem] font-bold lg:mb-4 ">Brand Enquiry</h1>
                    <h3 className="text-sm lg:text-lg font-medium text-gray-700 mb-2 lg:mb-4">We truly believe your brand could be doing as great as you are. Speak to us.</h3>

                    <form onSubmit={handleSubmit} className="max-w-md ">
                        <div className="mb-2 lg:mb-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-1 lg:px-3 py-1 lg:py-2  border border-gray-300 rounded-md shadow-sm text-sm lg:text-base"
                                required
                            />
                        </div>

                        <div className="mb-2 lg:mb-4">
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-1 lg:px-3 py-1 lg:py-2  border border-gray-300 rounded-md shadow-sm text-sm lg:text-base"
                                required
                            />
                        </div>

                        <div className="mb-2 lg:mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-1 lg:px-3 py-1 lg:py-2  border border-gray-300 rounded-md shadow-sm text-sm lg:text-base"
                                required
                            />
                        </div>

                        <div className="mb-2 lg:mb-4">
                            <textarea
                                id="enquiry"
                                name="enquiry"
                                placeholder="Enquiry"
                                value={formData.enquiry}
                                onChange={handleChange}
                                className="w-full px-1 lg:px-3 py-1 lg:py-2  border border-gray-300 rounded-md shadow-sm text-sm lg:text-base"
                                rows={3}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="lg:w-[10vw] py-1 px-4 bg-yellow-500 text-black font-semibold rounded-md shadow-sm hover:bg-yellow-600 "
                        >
                            Submit
                        </button>
                        {submissionStatus === 'success' && (
                            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                                Enquiry successfully sent!
                            </div>
                        )}
                        {submissionStatus === 'error' && (
                            <div className="mt-2 p-4 bg-red-100 text-red-700 rounded-md">
                                Failed to send enquiry. Please try again.
                            </div>
                        )}
                    </form>
                </section>
            </div>
        </div>
    );
};

export default brandEnquiryPopupComponent;

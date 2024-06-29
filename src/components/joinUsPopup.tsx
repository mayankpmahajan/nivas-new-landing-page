import React, { useRef, useEffect, useState } from "react";
import { joinUsPopup } from "../assets";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    name: string;
    role: string;
    why: string;
    resume: File | null;
}

const joinUsPopupComponent: React.FC<PopupProps> = ({ isOpen, onClose }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        role: '',
        why: '',
        resume: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                resume: e.target.files[0]
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('role', formData.role);
        formDataToSend.append('why', formData.why);
        if (formData.resume) {
            formDataToSend.append('resume', formData.resume);
        }

        try {
            const response = await fetch('http://localhost:3000/api/save-form-data/joinUs', {
                method: 'POST',
                body: formDataToSend,
            });

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
                className="bg-white w-[90vw] lg:h-[70vh] lg:w-[70vw] rounded-xl lg:rounded-3xl relative flex font-montserrat"
            >
                <section className="w-[20%] h-[100%] hidden lg:block">
                    <img src={joinUsPopup} alt="joinUs" className="object-cover h-full w-full rounded-t-lg" />
                </section>

                <section className="m-[4vw] lg:m-[2vw] flex-grow">
                    <h1 className="text-2xl lg:text-[2.5rem] font-bold lg:mb-4">Join Us</h1>
                    <h3 className="text-sm lg:text-lg font-medium text-gray-700 mb-2 lg:mb-4">We are building a world class team</h3>

                    <form onSubmit={handleSubmit} className="max-w-lg">
                        <div className="mb-2 lg:mb-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-2 lg:px-3 py-2 lg:py-2 border border-gray-300 rounded-md shadow-sm text-sm lg:text-base"
                                required
                            />
                        </div>

                        <div className="mb-2 lg:mb-4">
                            <input
                                type="text"
                                id="role"
                                name="role"
                                placeholder="Interested Role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full px-2 lg:px-3 py-2 lg:py-2 border border-gray-300 rounded-md shadow-sm text-sm lg:text-base"
                                required
                            />
                        </div>

                        <div className="mb-2 lg:mb-4">
                            <textarea
                                id="why"
                                name="why"
                                placeholder="Why you want to work with us?"
                                value={formData.why}
                                onChange={handleChange}
                                className="w-full px-2 lg:px-3 py-2 lg:py-2 border border-gray-300 rounded-md shadow-sm text-sm lg:text-base"
                                rows={4}
                                required
                            />
                        </div>

                        <div className="mb-2 lg:mb-4">
                            <label className="w-fit flex items-center px-2 lg:px-3  border border-gray-300 rounded-md shadow-sm text-sm lg:text-base bg-[#FFECC9] text-[#FF9017] font-normal cursor-pointer">
                                <span>Upload your CV</span>
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    required
                                />
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-[30%] py-2 lg:py-3 bg-yellow-500 text-black font-semibold rounded-md shadow-sm hover:bg-yellow-600"
                        >
                            Submit
                        </button>
                        {submissionStatus === 'success' && (
                            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                                Enquiry successfully sent!
                            </div>
                        )}
                        {submissionStatus === 'error' && (
                            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
                                Failed to send enquiry. Please try again.
                            </div>
                        )}
                    </form>
                </section>
            </div>
        </div>
    );
};

export default joinUsPopupComponent;

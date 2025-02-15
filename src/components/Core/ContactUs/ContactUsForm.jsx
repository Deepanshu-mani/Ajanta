import React, { useState } from "react";
import axios from "axios";
import contactImg from "../../../assets/contactUs.png";

function ContactUsForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            name: `${formData.firstName} ${formData.lastName}`.trim(), // Combine names
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        try {
            const response = await axios.post("http://localhost:4000/send-email", requestData);
            alert("Message sent successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <div className="max-w-5xl mx-auto bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl mt-10 flex flex-col md:flex-row items-center border border-white/10">
            <div className="w-full md:w-1/2 flex justify-center">
                <img src={contactImg} alt="Contact Us" className="w-full max-w-sm md:max-w-md rounded-3xl animate-fade-in" />
            </div>

            <div className="w-full md:w-1/2 p-6">
                <h2 className="text-4xl font-extrabold text-gray-800 text-center md:text-left mb-6">Contact Us</h2>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="block text-gray-700 font-medium text-lg">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 shadow-sm transition-all"
                                placeholder="Enter your first name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label className="block text-gray-700 font-medium text-lg">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 shadow-sm transition-all"
                                placeholder="Enter your last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium text-lg">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 shadow-sm transition-all"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium text-lg">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 shadow-sm transition-all"
                            placeholder="Enter subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium text-lg">Message</label>
                        <textarea
                            name="message"
                            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 shadow-sm transition-all"
                            rows="4"
                            placeholder="Write your message here..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="relative w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 button-rounded font-semibold text-lg transition-all duration-200 shadow-lg overflow-hidden group hover:scale-95 cursor-pointer"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 button-rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-95"></span>
                        <span className="relative">Send Message</span>
                        <span className="absolute inset-0 border-4 border-transparent button-rounded animate-border-gradient"></span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactUsForm;
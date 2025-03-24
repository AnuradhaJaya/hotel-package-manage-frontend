import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from '../components/feedback-star/StarRating';
import SummaryApi from '../common/index';
import { toast } from 'react-toastify';

function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        duration: '',
        howDidYouHear: '',
        quality: '',
        cleanliness: '',
        food: '',
        staff: '',
        suggestions: '',
        rating: 0,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRatingChange = (rating) => {
        setFormData({ ...formData, rating });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(SummaryApi.send_feedback.url, {
            method: SummaryApi.send_feedback.method,
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const responseData = await response.json();

        if (responseData.success) {
            toast.success(responseData?.message);
            navigate(`/`);
        }

        if (responseData.error) {
            toast.error(responseData?.message);
        }
    };

    return (
        <div className="bg-blueGray-50 py-8 px-8 md:px-0">
            <h2 className="text-center text-lg font-bold text-green-500 mb-2">Feedback Form</h2>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-5 bg-white shadow-lg rounded">
                <div className="mb-2">
                    <label htmlFor="name" className="block font-semibold text-gray-700">Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-input border-2 w-full p-2 rounded" />
                </div>

                <div className="mb-2">
                    <label htmlFor="email" className="block font-semibold text-gray-700">Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input border-2 w-full p-2 rounded" />
                </div>

                <div className="mb-2">
                    <label htmlFor="duration" className="block font-semibold text-gray-700">Duration of Your Stay (in days):</label>
                    <input type="number" name="duration" value={formData.duration} onChange={handleChange} min="1" required className="form-input border-2 w-full p-2 rounded" />
                </div>

                <div className="mb-2">
                    <label htmlFor="howDidYouHear" className="block font-semibold text-gray-700">How Did You Hear About Our Hotel:</label>
                    <input type="text" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} required className="form-input border-2 w-full p-2 rounded" />
                </div>

                <div className="mb-2">
                    <table className="w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="w-1/6 px-2 py-1 border border-gray-300"></th>
                                <th className="w-1/6 px-2 py-1 border border-gray-300">Poor</th>
                                <th className="w-1/6 px-2 py-1 border border-gray-300">Satisfactory</th>
                                <th className="w-1/6 px-2 py-1 border border-gray-300">Good</th>
                                <th className="w-1/6 px-2 py-1 border border-gray-300">Very Good</th>
                                <th className="w-1/6 px-2 py-1 border border-gray-300">Excellent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {["quality", "cleanliness", "food", "staff"].map((category) => (
                                <tr key={category}>
                                    <td className="px-2 py-1 font-semibold text-gray-700 border border-gray-300 capitalize">{category}:</td>
                                    {["poor", "satisfactory", "good", "very_good", "excellent"].map((value) => (
                                        <td key={value} className="text-center border border-gray-300">
                                            <input type="radio" name={category} value={value} onChange={handleChange} required />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mb-2">
                    <label className="block font-semibold text-gray-700">Overall Rating:</label>
                    <StarRating rating={formData.rating} onChange={handleRatingChange} />
                </div>

                <div className="mb-2">
                    <label className="block font-semibold text-gray-700">Any Suggestions:</label>
                    <textarea name="suggestions" value={formData.suggestions} onChange={handleChange} rows="3" className="form-textarea border-2 w-full p-2 rounded"></textarea>
                </div>

                <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition">
                    Send
                </button>
            </form>
        </div>
    );
}

export default FeedbackForm;

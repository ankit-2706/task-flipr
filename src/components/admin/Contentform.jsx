import React, { useState } from 'react';
import { api } from '../../services/api';

const ContentForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        section: '',
        title: '',
        description: '',
        isActive: true
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await api.createContent(formData);
            onSubmit(result);
            setFormData({
                section: '',
                title: '',
                description: '',
                isActive: true
            });
        } catch (error) {
            console.error('Error creating content:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Section
                </label>
                <input
                    type="text"
                    value={formData.section}
                    onChange={(e) => setFormData({...formData, section: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                />
            </div>
            {/* Similar input fields for title and description */}
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Save Content
            </button>
        </form>
    );
};
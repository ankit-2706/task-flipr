import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

const LandingPage = () => {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContents = async () => {
            try {
                const data = await api.getContents();
                setContents(data);
            } catch (error) {
                console.error('Error fetching contents:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchContents();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {contents.map((content) => (
                <div key={content._id} className="my-8">
                    <h2 className="text-2xl font-bold">{content.title}</h2>
                    <p className="mt-2 text-gray-600">{content.description}</p>
                </div>
            ))}
        </div>
    );
};
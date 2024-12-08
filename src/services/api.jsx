const API_URL = process.env.REACT_APP_API_URL;

export const api = {
    // Admin Dashboard API calls
    createContent: async (content) => {
        const response = await fetch(`${API_URL}/api/admin/content`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        });
        return response.json();
    },

    updateContent: async (id, content) => {
        const response = await fetch(`${API_URL}/api/admin/content/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        });
        return response.json();
    },

    // Landing Page API calls
    getContents: async () => {
        const response = await fetch(`${API_URL}/api/content`);
        return response.json();
    }
};

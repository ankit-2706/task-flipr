import React, { useState } from 'react';
import { User, Upload, Briefcase, Users, Mail, Phone } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projectForm, setProjectForm] = useState({
    name: '',
    description: '',
    image: null,
    imagePreview: null
  });

  const [clientForm, setClientForm] = useState({
    name: '',
    description: '',
    designation: '',
    image: null,
    imagePreview: null
  });

  const [contacts] = useState([
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john@example.com',
      mobile: '+1234567890',
      city: 'New York'
    }
  ]);

  const [subscriptions] = useState([
    { id: 1, email: 'subscriber1@example.com', date: '2024-03-08' }
  ]);

  const handleImageChange = (e, formType) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (formType === 'project') {
          setProjectForm(prev => ({
            ...prev,
            image: file,
            imagePreview: reader.result
          }));
        } else {
          setClientForm(prev => ({
            ...prev,
            image: file,
            imagePreview: reader.result
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    console.log('Project form submitted:', projectForm);
  };

  const handleClientSubmit = (e) => {
    e.preventDefault();
    console.log('Client form submitted:', clientForm);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Custom Tabs */}
      <div className="mb-6">
        <div className="flex border-b">
          <button
            className={`flex items-center px-4 py-2 ${activeTab === 'projects' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('projects')}
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Projects
          </button>
          <button
            className={`flex items-center px-4 py-2 ${activeTab === 'clients' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('clients')}
          >
            <Users className="w-4 h-4 mr-2" />
            Clients
          </button>
          <button
            className={`flex items-center px-4 py-2 ${activeTab === 'contacts' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('contacts')}
          >
            <Phone className="w-4 h-4 mr-2" />
            Contacts
          </button>
          <button
            className={`flex items-center px-4 py-2 ${activeTab === 'subscriptions' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('subscriptions')}
          >
            <Mail className="w-4 h-4 mr-2" />
            Subscriptions
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
            <form onSubmit={handleProjectSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Project Image</label>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-48 h-48 border-2 border-dashed rounded-lg flex items-center justify-center bg-gray-50">
                    {projectForm.imagePreview ? (
                      <img
                        src={projectForm.imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <Upload className="w-12 h-12 text-gray-400" />
                    )}
                  </div>
                  <input
                    id="project-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageChange(e, 'project')}
                  />
                  <button
                    type="button"
                    className="px-4 py-2 border rounded-md hover:bg-gray-50"
                    onClick={() => document.getElementById('project-image').click()}
                  >
                    Upload Image
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Project Name</label>
                <input
                  type="text"
                  value={projectForm.name}
                  onChange={(e) => setProjectForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Project Description</label>
                <textarea
                  value={projectForm.description}
                  onChange={(e) => setProjectForm(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Project
              </button>
            </form>
          </div>
        )}

        {/* Clients Tab */}
        {activeTab === 'clients' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Add New Client</h2>
            <form onSubmit={handleClientSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Client Image</label>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-32 h-32 border-2 border-dashed rounded-full flex items-center justify-center bg-gray-50">
                    {clientForm.imagePreview ? (
                      <img
                        src={clientForm.imagePreview}
                        alt="Preview"
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-12 h-12 text-gray-400" />
                    )}
                  </div>
                  <input
                    id="client-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageChange(e, 'client')}
                  />
                  <button
                    type="button"
                    className="px-4 py-2 border rounded-md hover:bg-gray-50"
                    onClick={() => document.getElementById('client-image').click()}
                  >
                    Upload Image
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Client Name</label>
                <input
                  type="text"
                  value={clientForm.name}
                  onChange={(e) => setClientForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Client Description</label>
                <textarea
                  value={clientForm.description}
                  onChange={(e) => setClientForm(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Client Designation</label>
                <input
                  type="text"
                  value={clientForm.designation}
                  onChange={(e) => setClientForm(prev => ({ ...prev, designation: e.target.value }))}
                  placeholder="e.g., CEO, Web Developer, Designer"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Client
              </button>
            </form>
          </div>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Form Responses</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Full Name</th>
                    <th className="px-4 py-2 text-left border-b">Email Address</th>
                    <th className="px-4 py-2 text-left border-b">Mobile Number</th>
                    <th className="px-4 py-2 text-left border-b">City</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">{contact.fullName}</td>
                      <td className="px-4 py-2 border-b">{contact.email}</td>
                      <td className="px-4 py-2 border-b">{contact.mobile}</td>
                      <td className="px-4 py-2 border-b">{contact.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Subscriptions Tab */}
        {activeTab === 'subscriptions' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Subscribed Email Addresses</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Email Address</th>
                    <th className="px-4 py-2 text-left border-b">Subscription Date</th>
                  </tr>
                </thead>
                <tbody>
                  {subscriptions.map((subscription) => (
                    <tr key={subscription.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">{subscription.email}</td>
                      <td className="px-4 py-2 border-b">{subscription.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
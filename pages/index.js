import { useState } from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Campus Listings</div>
      <div className="space-x-4">
        <a href="/add-building" className="text-blue-600 hover:underline">Add Building</a>
        <a href="/comrade-street" className="text-blue-600 hover:underline">Comrade Market Street</a>
        <a href="/listings" className="text-blue-600 hover:underline">General Listings</a>
      </div>
    </nav>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-xl">
          <h1 className="text-2xl font-bold mb-4">Add Building Request</h1>
          {submitted ? (
            <div className="bg-green-100 text-green-800 p-4 rounded">
              ✅ Your building request has been submitted successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block font-semibold">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block font-semibold">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block font-semibold">Location</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block font-semibold">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="3" className="w-full border rounded p-2"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Submit Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

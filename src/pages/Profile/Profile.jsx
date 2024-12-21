import { useState } from 'react';
import './Profile.css';

function Profile() {
  const [activeTab, setActiveTab] = useState('basic');
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    experience: [],
    education: [],
    skills: [],
  });

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>My Profile</h1>
      </div>

      <div className="profile-content">
        <div className="profile-tabs">
          <button 
            className={`tab ${activeTab === 'basic' ? 'active' : ''}`}
            onClick={() => setActiveTab('basic')}
          >
            Basic Details
          </button>
          <button 
            className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button 
            className={`tab ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'basic' && (
            <div className="basic-details">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={profile.name} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={profile.email} />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" value={profile.phone} />
              </div>
              <button className="save-btn">Save Changes</button>
            </div>
          )}

          {/* Add Experience and Education tab content */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
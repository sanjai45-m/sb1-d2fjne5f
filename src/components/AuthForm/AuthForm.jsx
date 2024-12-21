import { useState } from 'react';
import './AuthForm.css';

function AuthForm({ type, onSubmit }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    ...(type === 'register' && { name: '' })
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {type === 'register' && (
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            required
          />
        </div>
      )}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">
        {type === 'login' ? 'Login' : 'Register'}
      </button>
    </form>
  );
}

export default AuthForm;
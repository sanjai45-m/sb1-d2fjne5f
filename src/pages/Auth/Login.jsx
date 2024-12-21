import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import './Auth.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    // Handle login logic here
    console.log('Login:', formData);
    navigate('/profile');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Welcome Back</h1>
        <p className="auth-subtitle">Login to access your account</p>
        
        <AuthForm type="login" onSubmit={handleLogin} />
        
        <p className="auth-footer">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Find Your Dream Job</h1>
        <p>Search through millions of jobs and find the right match</p>
        <div className="search-box">
          <input type="text" placeholder="Job title, skills, or company" />
          <input type="text" placeholder="Location" />
          <button className="search-btn">Search</button>
        </div>
      </section>

      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
        <div className="job-cards">
          {[1, 2, 3].map((job) => (
            <div key={job} className="job-card">
              <h3>Software Engineer</h3>
              <p className="company">Tech Company Inc.</p>
              <p className="location">New York, USA</p>
              <p className="salary">$80,000 - $120,000</p>
              <Link to={`/jobs/${job}`} className="view-job-btn">View Job</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
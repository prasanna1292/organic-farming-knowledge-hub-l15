import React from "react";
import { useLocation, NavLink } from "react-router-dom";

function Home1() {
  const location = useLocation();

  return (
    <>
      <div className="home" style={styles.container}>
        <h1 style={styles.heading}>
          🌿 Welcome, {location.state.id}! 🌿
        </h1>
        <p style={styles.subtext}>
          You’ve successfully logged in to the Organic Farming Community!
        </p>
        <p style={styles.text}>
          Discover eco-friendly practices, connect with experts, and read inspiring success stories
          from farmers around the world.
        </p>
        <div style={styles.links}>
          <NavLink to="/forum" style={styles.link}>Go to Forum</NavLink>
          <NavLink to="/experts" style={styles.link}>Meet the Experts</NavLink>
          <NavLink to="/success-stories" style={styles.link}>Read Success Stories</NavLink>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "2rem",
    backgroundColor: "#f0f9f0",
    borderRadius: "12px",
    textAlign: "center",
    maxWidth: "700px",
    margin: "2rem auto",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
  },
  heading: {
    color: "#2d6a4f",
    fontSize: "2rem",
    marginBottom: "1rem"
  },
  subtext: {
    color: "#40916c",
    fontSize: "1.2rem",
    marginBottom: "0.5rem"
  },
  text: {
    color: "#344e41",
    fontSize: "1rem",
    marginBottom: "1.5rem"
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem"
  },
  link: {
    textDecoration: "none",
    padding: "0.5rem 1rem",
    backgroundColor: "#52b788",
    color: "white",
    borderRadius: "8px"
  }
};

export default Home1;

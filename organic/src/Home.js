import Slideshow from "./Slideshow";
import './Home.css'
const Home = () => {
  return (
    <>
    <>
    <section className="organic-farming">
  <h2>Organic Farming Knowledge Hub</h2>
  <p className="tagline">Growing Together, Naturally</p>
  <p className="description">
    Your community for sharing organic farming wisdom and sustainable agriculture practices. Join us in creating a healthier, more sustainable future for our farms, our food, and our planet.
  </p>
</section>

    
    <section>
        <Slideshow />
      </section>
      <section className="cards-section">
  <div className="card">
   
    <h3 className="card-title">Share Knowledge</h3>
    <p className="card-description">Contribute your experiences and insights with fellow organic farmers.</p>
  </div>
  <div className="card">
  
    <h3 className="card-title">Learn from Experts</h3>
    <p className="card-description">Access wisdom from experienced organic farming professionals.</p>
  </div>
  <div className="card">
   
    <h3 className="card-title">Join Discussions</h3>
    <p className="card-description">Engage in meaningful conversations about sustainable farming practices.</p>
  </div>
</section>
<section className="community-posts">
  <h2>Latest Community Posts</h2>
  <div className="post">
    <h4 className="post-title">Best Practices for Composting</h4>
    <p className="post-meta">by Ananya Sharma · 2 hours ago</p>
  </div>
  <div className="post">
    <h4 className="post-title">How to Control Weeds Organically</h4>
    <p className="post-meta">by Raj Patel · 5 hours ago</p>
  </div>
  <div className="post">
    <h4 className="post-title">Natural Pest Control Remedies</h4>
    <p className="post-meta">by Maria Lopez · 1 day ago</p>
  </div>
</section>
   
    </>
 

    </>
  )
}

export default Home

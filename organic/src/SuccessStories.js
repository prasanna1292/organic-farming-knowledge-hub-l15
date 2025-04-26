import React from 'react';
import './SuccessStories.css';

const stories = [
  {
    title: 'Ph.D. in Agricultural Sciences',
    author: 'Alice Johnson',
    image: 'https://media.istockphoto.com/id/1633797713/photo/smiling-business-partners-standing-against-white-background.jpg?s=612x612&w=0&k=20&c=M6dQ5EgHm990nrpOerHgx--VaBtTThbvtyrm5BOxwKU=',
    story: 'Alice started as a junior developer and quickly rose to become a Tech Lead, leading a team of engineers...',
    link: 'https://alicecase.com'
  },
  {
    title: 'Startup to Global Brand',
    author: 'Bob Smith',
    image: 'https://media.istockphoto.com/id/167761284/photo/indian-students.jpg?s=612x612&w=0&k=20&c=dLP-Q9-sW7vlYQw_Lz_mzeHUS4y7NibpUkJ0DZYwE1M=',
    story: 'Bob founded a startup that, through perseverance and innovation, grew into a global brand recognized worldwide...',
    link: 'https://bobcase.com'
  },
  {
    title: 'Turning a Hobby into a Business',
    author: 'Emma Davis',
    image: 'https://media.istockphoto.com/id/1409520341/photo/group-of-young-people-discussing-in-the-co-working-office.jpg?s=612x612&w=0&k=20&c=MMScAoIbvQebCJ3dhr8pZ1izzuWxW_pBJ4yJ1KQfwpM=',
    story: 'Emma started coding as a hobby and eventually turned her passion into a full-time business, helping others learn to code...',
    link: 'https://emmacase.com'
  }
];

const SuccessStories = () => {
  return (
    <div className="success-stories-container">
      <h1 className="page-title">Success Stories</h1>

      <div className="stories-list">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <img src={story.image} alt={story.author} className="story-image" />
            <h2 className="story-title">{story.title}</h2>
            <p className="story-author">By {story.author}</p>
            <p className="story-snippet">{story.story.slice(0, 150)}...</p>
            <a href={story.link} target="_blank" rel="noopener noreferrer" className="story-link">
              Read Full Story
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;

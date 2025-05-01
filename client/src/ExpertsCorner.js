import React from 'react';
import './ExpertsCorner.css';

const experts = [
  {
    name: 'John Doe',
    title: 'Ph.D. in Agricultural Sciences',
    bio: 'John is a senior developer with over 10 years of experience in React.',
    image: 'https://media.istockphoto.com/id/1911521695/photo/successful-businessman-in-modern-office-working-on-laptop.jpg?s=612x612&w=0&k=20&c=SpbXONYEU27uZpRYxVKuR8OIcmhzTQvcJ6U-bTkXci0=',
    website: 'https://johnsportfolio.com'
  },
  {
    name: 'Jane Smith',
    title: 'Ph.D. in Entomology',
    bio: 'Jane is passionate about web design and styling with modern CSS techniques.',
    image: 'https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=',
    website: 'https://janesportfolio.com'
  },
  {
    name: 'Mark Johnson',
    title: 'USDA Certified Organic Inspector',
    bio: 'Mark is an expert in vanilla JavaScript and its ecosystem, working on complex projects.',
    image: 'https://media.istockphoto.com/id/2148968577/photo/businessman-in-bank-office-stock-photo.jpg?s=1024x1024&w=is&k=20&c=a8RqwCw7BKXi0zycNW1iV4WAXQQm33rJJK2w2qRNl04=',
    website: 'https://marksportfolio.com'
  },
  {
    name: 'Mark Park',
    title: 'Specialist',
    bio: 'Mark is an expert in vanilla JavaScript and its ecosystem, working on complex projects.',
    image: 'https://e1a4c9d0d2f9f737c5e1.ucr.io/https://15e90a29-2785-4263-8340-8fe9bce3d1b2.createdusercontent.com/api/ai-img?prompt=Maria%2520Rodriguez%2520at%2520Sunset%2520Orchards',
    website: 'https://marksportfolio.com'
  }
];

const ExpertsCorner = () => {
  return (
    <div className="experts-container">
      <h1 className="page-title">Experts Corner</h1>

      <div className="experts-list">
        {experts.map((expert, index) => (
          <div className="expert-card" key={index}>
            <img src={expert.image} alt={expert.name} className="expert-image" />
            <h2 className="expert-name">{expert.name}</h2>
            <p className="expert-title">{expert.title}</p>
            <p className="expert-bio">{expert.bio}</p>
            <a href={expert.website} target="_blank" rel="noopener noreferrer" className="expert-link">
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertsCorner;

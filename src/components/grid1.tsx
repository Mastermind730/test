
"use client";
import React, { useState } from 'react';
import './Grid.css'; 

// Define the types for TypeScript
interface LayoutGrid1Props {
  card: Card;
}

interface Photo {
  id: number;
  thumbnail: string;
}

interface Card {
  event: string;
  photos: Photo[];
}

// Define the LayoutGrid1 component
export const LayoutGrid1: React.FC<LayoutGrid1Props> = ({ card }) => {
  // State to track the selected photo
  const [selectedPhoto, setSelectedPhoto] = useState<Photo>(card.photos[0]);

  // Function to handle the click event and update the selected photo
  const handleThumbnailClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className="card">
      {/* Display the event name */}
      <h2 className="event-name">{card.event}</h2>

      {/* Display the selected photo */}
      <div className="large-photo-container">
        <img
          src={selectedPhoto.thumbnail}
          alt={`Event ${card.event} - Large Image`}
          className="large-photo"
        />
      </div>

      {/* Display the thumbnails */}
      <div className="thumbnail-grid">
        {card.photos.map((photo) => (
          <div
            className={`thumbnail-item ${selectedPhoto.id === photo.id ? 'active' : ''}`}
            key={photo.id}
            onClick={() => handleThumbnailClick(photo)}
          >
            <img
              src={photo.thumbnail}
              alt={`Event ${card.event} - Thumbnail ${photo.id}`}
              className="thumbnail-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

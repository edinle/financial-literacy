import React from 'react';
import "./financial-photo-scroll.css";

const FinancialPhotoScroll = () => {
    const photos = [
        { src: '/hex-class/financial-photo-scroll/newyork.jpeg', city: 'New York' },
        { src: '/hex-class/financial-photo-scroll/taipei.jpeg', city: 'Taipei' },
        { src: '/hex-class/financial-photo-scroll/singapore.jpeg', city: 'Singapore' },
        { src: '/hex-class/financial-photo-scroll/hongkong.jpeg', city: 'Hong Kong' },
        { src: '/hex-class/financial-photo-scroll/shanghai.jpeg', city: 'Shanghai' },
    ];

    return (
        <div className="photo-container">
            <div className="photo-scroll">
                {photos.map((photo, index) => (
                    <div key={index} className="item">
                        <img src={photo.src} alt={photo.city} className="photo" />
                        <p className="city">{photo.city}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FinancialPhotoScroll;

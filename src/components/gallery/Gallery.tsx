import React from 'react'
import { GalleryItem } from './GalleryItem';
import './gallery.css';

export const Gallery: React.FC = () => {
    return (
        <div className="gallery">
            <div className="row">
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
            </div>
            <div className="row">
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
            </div>
            <div className="row">
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
            </div>
            <div className="row">
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
            </div>
            <div className="row">
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
            </div>
            <div className="row">
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
            </div>
            
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import './gallery.css';
import data from '../../../utils/apiResponseDummy.json';
import { GalleryItemRow } from '../gallery-row/GalleryItemRow';


interface Props {
    photos: []
}

export const Gallery: React.FC<Props> = ({photos}) => {
    

    const [apiData, setApiData] = useState(data);
    const [likedData, setLikedData] = useState([]);
    

    const FilterLikedImages = (data: any) => {
        var likedImgIds = ["DgXmuW8OqTE", "CuHge5B_20Q", "Sl-Xxzb04Cc"]
        var filteredData = [];
    
        likedImgIds.forEach(item => {
            let found = data.find((element: any) => element.id === item)
            filteredData.push(found)
        });
            
    }

    const RenderGalleryItems = () => {
        var galleryStructure = [];
        var responsiveCardsPerRow = 5;
        var packetStart = 0;
        var packetEnd = responsiveCardsPerRow;
        //var likedImgIds = localStorage.getItem('kevin-unsplash-liked-images')
        
        for(let i = 0; i <= photos.length/responsiveCardsPerRow; i++){
            galleryStructure.push(<GalleryItemRow data={photos.slice(packetStart, packetEnd)}  />) 
            packetStart = packetStart + responsiveCardsPerRow
            packetEnd = packetEnd + responsiveCardsPerRow
        }
        return (<div className="gallery-column">{galleryStructure}</div>);
    }

    useEffect(() => {
        //dispatch(getPagePhotosAsync(1))
        FilterLikedImages(data)
    }, [])

   

   

    return (
        <div className="gallery">
            <RenderGalleryItems />
        </div>
    )
}

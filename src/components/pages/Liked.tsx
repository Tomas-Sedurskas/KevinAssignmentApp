import React, { useEffect } from 'react'
import { Gallery } from '../gallery/gallery/Gallery';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getLikedPhotosAsync } from '../../redux/slices/photosSlice';

export const Liked = () => {
    const dispatch = useAppDispatch();
    const photos = useAppSelector((state) => state.photosSlice.likedPhotos)
    const updateLikedPhotos = useAppSelector((state) => state.photosSlice.updateLikedPhotos)
    const likedLocalStorage = localStorage.getItem('kevin-unsplash-liked-images');
    
    useEffect(() => {
        /*
        if(likedLocalStorage && updateLikedPhotos){
            let parsedPhotos;
            parsedPhotos = JSON.parse(likedLocalStorage);
            console.log(parsedPhotos)
            parsedPhotos.forEach((photo: string) => {dispatch(getLikedPhotosAsync(photo));})
        }    
        */
    }, [])

    return (
        <div>
            <Gallery photos={photos} />
        </div>
    )
}

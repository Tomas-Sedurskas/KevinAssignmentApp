import React, { useEffect } from 'react'
import { Gallery } from '../gallery/gallery/Gallery';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getLikedPhotosAsync } from '../../redux/slices/photosSlice';
import { hideModal } from '../../redux/slices/navigationSlice';

export const Liked: React.FC = () => {
    const dispatch = useAppDispatch();
    const photos = useAppSelector((state) => state.photosSlice.likedPhotos)
    const updateLikedPhotos = useAppSelector((state) => state.photosSlice.updateLikedPhotos)
    const likedLocalStorage = localStorage.getItem('kevin-unsplash-liked-images');

    useEffect(() => { 
        dispatch(hideModal)
        
        if(likedLocalStorage && updateLikedPhotos && photos.length > 0){
            var parsedPhotos = JSON.parse(likedLocalStorage)
            parsedPhotos.forEach((id: string) => {
                if(!photos.find((photo: any) => photo.id === id)){
                    dispatch(getLikedPhotosAsync(id));
                }
            })
        }   
        
         
    }, [dispatch, photos, likedLocalStorage, updateLikedPhotos])

    useEffect(() => {
       
        if(likedLocalStorage && photos.length === 0){
        var parsedPhotos = JSON.parse(likedLocalStorage)
            parsedPhotos.forEach((id: string) => {
                dispatch(getLikedPhotosAsync(id));
            })
        }
    }, [])
    return (
        <div>
            <Gallery photos={photos} />
        </div>
    )
}

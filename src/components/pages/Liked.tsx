import React, { useEffect } from 'react'
import { Gallery } from '../gallery/gallery/Gallery';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getLikedPhotosAsync } from '../../redux/slices/photosSlice';
import { useLocation } from 'react-router-dom';
import { setLocation } from './../../redux/slices/navigationSlice';
import { Link, useHistory } from 'react-router-dom';

export const Liked = () => {
    const history = useHistory();
    const dispatch = useAppDispatch();
    const photos = useAppSelector((state) => state.photosSlice.likedPhotos)
    const updateLikedPhotos = useAppSelector((state) => state.photosSlice.updateLikedPhotos)
    const likedLocalStorage = localStorage.getItem('kevin-unsplash-liked-images');
    const currentLocation = useAppSelector((state) => state.navigationSlice.currentLocation)
    const params = useLocation()

    /*
    const handleRouting = (pathname: string) => {
        console.log('Handling routes')
        let payload = {
            currentLocation: pathname,
            previousLocation: currentLocation.pathname
        }
        dispatch(setLocation(payload))
        history.push(pathname);
    }
    */
    useEffect(() => {
        /*
        if(likedLocalStorage && updateLikedPhotos){
            let parsedPhotos;
            parsedPhotos = JSON.parse(likedLocalStorage);
            console.log(parsedPhotos)
            parsedPhotos.forEach((photo: string) => {dispatch(getLikedPhotosAsync(photo));})
        }    
        */
       console.log('USEING EGGECT')
       //handleRouting("/liked");
    }, [])

    return (
        <div>
            <Gallery photos={photos} />
        </div>
    )
}

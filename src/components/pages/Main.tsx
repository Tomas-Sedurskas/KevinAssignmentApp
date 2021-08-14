import React, { useEffect, } from 'react'
import { Gallery } from '../gallery/gallery/Gallery';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getPagePhotosAsync } from '../../redux/slices/photosSlice';
import { ModalPopUp } from '../modal-pop-up/ModalPopUp';

export const Main = () => {
    const dispatch = useAppDispatch();
    const photos = useAppSelector((state) => state.photosSlice.photos)
    
    useEffect(() => {
        //dispatch(getPagePhotosAsync(1))
    })


    return (
        <div>
            <Gallery photos={photos} />
        </div>
    )
}

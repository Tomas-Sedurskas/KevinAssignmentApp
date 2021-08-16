import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Gallery } from '../gallery/gallery/Gallery';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getPagePhotosAsync } from '../../redux/slices/photosSlice';
import { hideModal } from '../../redux/slices/navigationSlice';

export const Main: React.FC = () => {
    const dispatch = useAppDispatch();
    const photos = useAppSelector((state) => state.photosSlice.photos)
    const lazyLoadRef: any = useRef(null);    

    const [page, setPage] = useState<number>(1);

    const lazyLoad = useCallback(() => {
        const io = new IntersectionObserver((entries: any, observer) => {
            if(entries[0].isIntersecting){
                setPage(p => p+1)
                observer.disconnect()
            }
        })
        io.observe(lazyLoadRef.current);
    }, []);
    
    useEffect(() => {
        dispatch(hideModal);
    }, [])

    useEffect(() => {
        
        dispatch(getPagePhotosAsync(page))
        const lazyTimer:any = () => {setTimeout(() => {lazyLoad()}, 100)}
        lazyTimer();
        return() => clearTimeout(lazyTimer)
    }, [page, dispatch, lazyLoad])
    console.log(photos)
    console.log("MAIN")
    return (
        <div>
            <Gallery photos={photos} />
            <div id="lazy-load-bar" ref={lazyLoadRef}></div>
        </div>
    )
}

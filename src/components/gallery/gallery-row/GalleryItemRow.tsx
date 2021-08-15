import React from 'react'
import { GalleryItem } from '../gallery-item/GalleryItem';
import { Link, useLocation } from 'react-router-dom';
import { renderModal } from '../../../redux/slices/navigationSlice';
import { useAppDispatch } from '../../../redux/hooks/hooks';

export const GalleryItemRow = (props: any) => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    return (
        <div className="gallery-row">
            {props.data.map((item:any) => {
                return(
                    <div className="gallery-item" >
                        <Link onClick={() => {dispatch(renderModal())}} to={{ pathname: `/photo/${item.id}`, state: { pathname: location.pathname}}}>
                            <img src={item.urls.small} alt={item.alt_description} />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

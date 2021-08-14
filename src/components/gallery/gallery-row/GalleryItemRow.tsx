import React from 'react'
import { GalleryItem } from '../gallery-item/GalleryItem';
import { Link } from 'react-router-dom';

export const GalleryItemRow = (props: any) => {
    console.log(props.data)
    return (
        <div className="gallery-row">
            {props.data.map((item:any) => {
                return(
                    <div className="gallery-item" >
                        <Link to={{ pathname: `/photo/${item.id}`, state: { modal: true }}}>
                            <img src={item.urls.small} alt={item.alt_description} />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

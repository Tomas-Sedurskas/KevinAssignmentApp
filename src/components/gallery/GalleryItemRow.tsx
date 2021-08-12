import React from 'react'
import { GalleryItem } from './GalleryItem';

export const GalleryItemRow = (props: any) => {
    console.log(props.data)
    return (
        <div className="row">
            {props.data.map((item:any) => {
                return(
                    <div className="gallery-item" >
                        <img src={item.urls.small} alt={item.alt_description} />
                    </div>
                )
            })}
        </div>
    )
}

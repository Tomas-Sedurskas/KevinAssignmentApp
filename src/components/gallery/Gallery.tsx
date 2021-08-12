import React, { useEffect, useState } from 'react'
import { GalleryItem } from './GalleryItem';
import './gallery.css';
import data from '../../utils/apiResponseDummy.json';
import { GalleryItemRow } from './GalleryItemRow';

export const Gallery: React.FC = () => {

    const [apiData, setApiData] = useState(data)

    const test = () => {
        console.log(data)
    }

    const renderRow = (packetStart:any, packetSize:any) => {
        return (
            <GalleryItemRow data={data.slice(packetStart, packetSize)} />
        )
    }

    const RenderGalleryItems = () => {
        //Split up the array into packets of 5 objects
        var packetStart = 0;
        var packetSize = 5;
        //var rowCount = data.length / packetSize;
        var rowCount = 2;
       
        return renderRow(packetStart, packetSize)
            
        
        
        
    }

    /*
            return (
                <React.Fragment>
                    {data.slice(packet, packetSize).map((item) =>
                        <div key={item.id}>
                            <img src={item.urls.thumb} alt={item.alt_description} />
                        </div>
                    )}
                </React.Fragment>
            )
            */

    useEffect(() => {
        test()
    }, [])

    return (
        <div className="gallery">

            <GalleryItemRow data={data.slice(0, 5)} />
            <GalleryItemRow data={data.slice(5, 10)} />
            
        </div>
    )
}

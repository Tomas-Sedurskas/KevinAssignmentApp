import React, { useEffect, useState, useRef } from 'react'
import './gallery.css';
import { GalleryItemRow } from '../gallery-row/GalleryItemRow';

interface Props {
    photos: []
}

export const Gallery: React.FC<Props> = ({photos}) => {
    const [containerColumns, setContainerColumns] = useState<number>(3);
    const columnRef: any = useRef(null)

    const handleResponsiveColumns = () => {
        let mobileBreakpoint = 576;
        let tabletBreakpoint = 768;
        let smallDesktopBreakpoint = 1366;

        if(columnRef.current.offsetWidth < mobileBreakpoint) return setContainerColumns(2)
        if(columnRef.current.offsetWidth < tabletBreakpoint) return setContainerColumns(3)
        if(columnRef.current.offsetWidth < smallDesktopBreakpoint) return setContainerColumns(4)
        return setContainerColumns(5)
    }

    const RenderGalleryItems = () => {
        var galleryStructure = [];
        var responsiveCardsPerRow = containerColumns;
        var packetStart = 0;
        var packetEnd = responsiveCardsPerRow;
        
        for(let i = 0; i <= photos.length/responsiveCardsPerRow; i++){
            galleryStructure.push(<GalleryItemRow data={photos.slice(packetStart, packetEnd)} key={'gallery-row-'+i} />) 
            packetStart = packetStart + responsiveCardsPerRow
            packetEnd = packetEnd + responsiveCardsPerRow
        }
        
        return (<div className="gallery-column">{galleryStructure}</div>);
    }

    useEffect(() => {
        handleResponsiveColumns()
        window.addEventListener('resize', handleResponsiveColumns)
        return () => {
            window.removeEventListener('resize', handleResponsiveColumns)
        }
    }, []);

    return (
        <div ref={columnRef} className="gallery">
            <RenderGalleryItems />
        </div>
    )
}

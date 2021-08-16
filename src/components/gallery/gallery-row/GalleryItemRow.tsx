import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { renderModal } from '../../../redux/slices/navigationSlice';
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { LikeButton } from '../../common/like-button/LikeButton';

interface Props {
    data: Array<{}>
}

export const GalleryItemRow: React.FC<Props> = ({data}) => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    return (
        <div className="gallery-row">
            {data.map((item:any) => {
                return(
                    <div className="gallery-item" key={item.id} >
                        <Link onClick={() => {dispatch(renderModal())}} to={{ pathname: `/photo/${item.id}`, state: { pathname: location.pathname}}}>
                            <img src={item.urls.small} alt={item.alt_description} />
                        </Link>
                        <div className="galler-item-like-button">
                             <LikeButton id={item.id} small={true}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

import React from 'react'
import { likePhoto, dislikePhoto } from '../../../redux/slices/photosSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import './like-button.css';

interface Props {
    id: string,
    small: boolean
}

export const LikeButton: React.FC<Props> = (props) => {
    const dispatch = useAppDispatch();
    const likedIdArray = useAppSelector((state) => state.photosSlice.likedIdArray);

    if(likedIdArray.includes(props.id)){
        return(
            <button onClick={() => {dispatch(dislikePhoto(props.id))}} className="like-button-active">
                <img className="like-button-icon" src="/assets/like-icon.svg" alt="Like icon" />
                { props.small
                ? null
                : <span>Unlike</span>
                }
            </button>
        )        
    } else {
        return(
            <button onClick={() => {dispatch(likePhoto(props.id))}} className="like-button">
                <img className="like-button-icon" src="/assets/like-icon.svg" alt="Like icon" />
                { props.small
                ? null
                : <span>Like</span>
                }
            </button>
        )
}
        

}

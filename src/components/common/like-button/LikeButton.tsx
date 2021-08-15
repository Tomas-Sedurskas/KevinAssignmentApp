import React from 'react'
import { likePhoto, dislikePhoto } from '../../../redux/slices/photosSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';

interface Props {
    id: string
}

export const LikeButton = (props: Props) => {
    const dispatch = useAppDispatch();
    const likedPhotos = useAppSelector((state) => state.photosSlice.likedPhotos);
    



    if(likedPhotos.includes(props.id)){
        return(
            <button onClick={() => {dispatch(dislikePhoto(props.id))}} className="like-button-active">
                <img className="like-button-icon" src="/assets/like-icon.svg" alt="Like icon" /><span>Unlike</span>
            </button>
        )        
    } else {
        return(
            <button onClick={() => {dispatch(likePhoto(props.id))}} className="like-button">
                <img className="like-button-icon" src="/assets/like-icon.svg" alt="Like icon" /><span>Like</span>
            </button>
        )
}
        

}

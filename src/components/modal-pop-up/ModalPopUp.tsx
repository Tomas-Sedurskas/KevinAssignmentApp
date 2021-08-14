import React, { useEffect, useState } from 'react'
import './modal-pop-up.css';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { useHistory } from 'react-router-dom';

interface Params {
    id: string
}

export const ModalPopUp: React.FC = (props) => {
    const history = useHistory();
    
    const previousLocation = useAppSelector((state) => state.navigationSlice.previousLocation);
    const renderModal = useAppSelector((state) => state.navigationSlice.renderModal);



    const dispatch = useAppDispatch();
    const photos = useAppSelector((state) => state.photosSlice.likedPhotos);

    const [photo, setPhoto] = useState<any>(undefined)
    
    var {id}: Params = useParams()
    
    useEffect(() => {
   
        //if no photos loaded in liked
        //dispatch(getLikedPhotoAsync(id))
        let filteredPhoto = photos.find((photo: any) => photo.id === id)
        console.log(filteredPhoto)
        setPhoto(filteredPhoto)
    }, [])
    /*
     useEffect(() => {
        console.log( previousLocation )
        console.log(history)
        if(renderModal){
        console.log('PUSHING HISTORY')
        history.push(previousLocation)
        }
    }, [renderModal])
    */
    if(photo !== undefined){
        return (
            <div className="modal">
                <div className="pop-up">
                    <div className="pop-up-image-wrapper">
                        <img src={photo.urls.regular} />
                    </div>
                    <div className="pop-up-text-wrapper">
                        
                        <div className="row">
                            <div className="column">
                                <div className="row pop-up-text-header">
                                    <button className="like-button">
                                        <img className="like-button-icon" src="/assets/like-icon.svg" alt="Like icon" /><span>Like</span>
                                    </button>
                                    <button className="close-button">
                                        <img className="close-button-icon" src="/assets/close-icon.svg" alt="Close icon" />
                                    </button>
                                </div>
                                <h2>Title of photo</h2>
                                <div className="author-wrapper">
                                    <div className="author-image">
                                        <img src="/assets/author.svg" />
                                    </div>
                                    <span className="author-name">John Doe</span>
                                </div>
                            </div>
                            
                        </div>

                        <div className="row camera-details-table">
                            <div className="column">

                                <div className="row camera-details-row">
                                    <div className="column">
                                        <span>Camera make</span>
                                        <p>Canon</p>
                                    </div>
                                    
                                    <div className="column">
                                        <span>Camera model</span>
                                        <p>Canon EOS 1200D</p>
                                    </div>

                                    <div className="column">
                                        <span>Focal length</span>
                                        <p>50.5mm</p>
                                    </div>
                                </div>
                                <div className="row camera-details-row">
                                    <div className="column">
                                        <span>Apature</span>
                                        <p>f/1.8</p>
                                    </div>

                                    <div className="column">
                                        <span>Shutter speed</span>
                                        <p>1/1000s</p>
                                    </div>

                                    <div className="column">
                                        <span>ISO</span>
                                        <p>1250</p>
                                    </div>
                                </div>



                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h1>LOADING</h1>
            </div>
        )
    }
    
}

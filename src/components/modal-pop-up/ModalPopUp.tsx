import React, { useEffect, useState } from 'react'
import './modal-pop-up.css';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { useLocation, useHistory } from 'react-router-dom';
import { hideModal } from '../../redux/slices/navigationSlice';
import { LikeButton } from '../common/like-button/LikeButton';
import { getModalPhotoAsync } from '../../redux/slices/photosSlice';

interface Location {
    state: {
        pathname: string
    }
}

interface Photo {
    id: string,
    description: string,
    alt_description: string,
    user: {
        first_name: string,
        last_name: string,
        profile_image: {
                small: string
            }
    }
    urls: {
        regular: string
    }
}

export const ModalPopUp: React.FC = () => {
    const location: Location = useLocation();
    const history = useHistory();
    const dispatch = useAppDispatch();
    const renderModal = useAppSelector((state) => state.navigationSlice.renderModal);
    const photos = useAppSelector((state) => state.photosSlice.photos);
    const modalPhoto = useAppSelector((state) => state.photosSlice.modalPhoto);

    let photoState = { 
        id: '', 
        description: '',
        alt_description: '',
        user: {
            first_name: '',
            last_name: '',
            profile_image: {
                small: ''
            }
        },
        urls: { 
            regular: ''
        }
    }

    const [photo, setPhoto] = useState<Photo>(photoState);
    
    const {id}: {id: string} = useParams()

    useEffect(() => {
        dispatch(getModalPhotoAsync(id));
    }, []);

    useEffect(() => {
        
        if(!renderModal){
            return history.goBack()
        }

        if(modalPhoto.id !== ''){
            setPhoto(modalPhoto)
        }
    }, [modalPhoto])

    const checkPhoto = () => {
        if(modalPhoto.id === id){
            return true
        } else {
            return false
        }
    }

    if(checkPhoto()){
        return (
            <div className="modal">
                <div className="pop-up">
                    <div className="pop-up-image-wrapper">
                        <img src={modalPhoto.urls.regular} alt={modalPhoto.alt_description} />
                    </div>
                    <div className="pop-up-text-wrapper">
                        <div className="row">
                            <div className="column">
                                <div className="row pop-up-text-header">
                                    <LikeButton id={modalPhoto.id} small={false} />
                                    <button className="close-button">
                                        <Link to={{ pathname: `${location.state.pathname}` , state: { pathname: `${location.state.pathname}` }}} onClick={() => {dispatch(hideModal())}}>
                                            <img className="close-button-icon" src="/assets/close-icon.svg" alt="Close icon" />
                                        </Link>
                                    </button>
                                </div>
                                <h2>{modalPhoto.description || 'Untitled...'}</h2>
                                <div className="author-wrapper">
                                    <div className="author-image">
                                        <img src={modalPhoto.user.profile_image.small} alt="profile"/>
                                    </div>
                                    <span className="author-name">{modalPhoto.user.first_name} {modalPhoto.user.last_name}</span>
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

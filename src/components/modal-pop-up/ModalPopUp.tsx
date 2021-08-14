import React, { useEffect } from 'react'
import './modal-pop-up.css';
import { useParams } from 'react-router-dom';

export const ModalPopUp: React.FC = (props) => {

    interface Params {
        id: string
    }

    var {id}: Params = useParams()
    useEffect(() => {
        //dispatch()
    }, [])

    return (
        <div className="modal">
            <div className="pop-up">
                <div className="pop-up-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1620845417458-801676d2f6f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTMxNzJ8MHwxfGNvbGxlY3Rpb258NXwyNzA4MDU5fHx8fHwyfHwxNjI4NzkyMTcz&ixlib=rb-1.2.1&q=80&w=1080" />
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
}

import React from 'react'
import download1 from '../../Assests/images/items/download-1.png'
import download2 from '../../Assests/images/items/download-2.png'

const BoxAttachments = () => {
    return (
        <div>
            <div className="wg-property box-attachments">
                <div className="wg-title text-11 fw-6 text-color-heading">File Attachments</div>
                <div className="row">
                    <div className="col-sm-6">
                        <a href="#" target="_blank" className="attachments-item">
                            <div className="box-icon w-60">
                                <img src={download1} alt="file" />
                            </div>
                            <span>Villa-Document.pdf</span>
                            <i className="icon icon-DownloadSimple"></i>
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a href="#" target="_blank" className="attachments-item">
                            <div className="box-icon w-60">
                                <img src={download2} alt="file" />
                            </div>
                            <span>Villa-Document.pdf</span>
                            <i className="icon icon-DownloadSimple"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxAttachments
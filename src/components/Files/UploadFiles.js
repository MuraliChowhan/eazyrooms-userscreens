import React, { useState } from 'react'
import './files.css';
import ImageUploading from "react-images-uploading";

function UplodFiles(props) {
    const maxNumber = 69;
    let imgUrl;
    const [images, setImages] = useState();
    const [fileName, setFileName] = useState();

    const onChangeSingle = (imageList) => {
        imgUrl = imageList[0].data_url.split(',')[1];
        setImages(imgUrl)
        setFileName(imageList[0].file.name);
        // toast.success('Uploaded successfully')
    };
    return (
        <>
            <div>
                <div className="p-4 mt-4 col-10">
                    <div className="d-flex justify-content-center mt-5">
                        <ImageUploading
                            accept="image/*"
                            onChange={onChangeSingle}
                            maxNumber={maxNumber}
                            // defaultValue={props.params.details.image}
                            dataURLKey="data_url"
                        >
                            {({
                                imageList,
                                onImageUpload,
                                // onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps
                            }) => (
                                <div className="upload__image-wrapper">
                                    <div
                                        className="btn btn-outline-primary"
                                        style={isDragging ? { color: "red" } : null}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        Click or Drop here
                                    </div>
                                    &nbsp;
                                </div>
                            )}
                        </ImageUploading>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UplodFiles;

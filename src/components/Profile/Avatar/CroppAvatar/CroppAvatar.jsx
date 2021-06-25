import React, { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import s from "./CroppAvatar.module.css";


export const CroppAvatar = ({ avatar, reff }) => {

	const [cropData, setCropData] = useState("#");
	const [cropper, setCropper] = useState();
    
	const getCropData = () => {
		if (typeof cropper !== "undefined") {
			setCropData(cropper.getCroppedCanvas().toDataURL());
		}
	};

	return (
		<div className={s.global_wrapper}>
			<div className={s.content_box} ref={reff}>
				
					<Cropper
                        className={s.croppSrc}
						zoomTo={2}
						initialAspectRatio={1}
						preview=".img-preview"
						src={avatar}
						viewMode={1}
						guides={true}
						minCropBoxHeight={10}
						minCropBoxWidth={10}
						background={false}
						responsive={true}
						autoCropArea={1}
						checkOrientation={false}
						onInitialized={(instance) => {
							setCropper(instance);
						}}
					/>
				
				<div className={s.info_container}>
					
					<div className={s.box}>
						<h1>
							<button  onClick={getCropData}>
								Crop Image
							</button>
						</h1>
						<img className={s.cropped} src={cropData} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CroppAvatar;

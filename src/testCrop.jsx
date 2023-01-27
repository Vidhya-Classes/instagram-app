import Cropper from 'react-easy-crop';
import Button from '@mui/material/Button';
import ImgDialog from '@mui/material/Button';
import { useState, useCallback } from 'react';
import getCroppedImg from './getCropImg';
import { createImage } from './getCropImg';
export const Demo = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  let dogImg =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpAnmlE2FTUxNcv4tQ003dQOi2D6OuyUFW3QVPZVAG&s';
  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(dogImg, croppedAreaPixels, rotation);
      console.log('donee', { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);
  return (
    <>
      <Cropper
        image={dogImg}
        crop={crop}
        zoom={zoom}
        aspect={4 / 3}
        rotation={rotation}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
      <Button onClick={showCroppedImage} variant="contained" color="primary">
        Show Result
      </Button>
      <ImgDialog img={croppedImage} />
    </>
  );
};

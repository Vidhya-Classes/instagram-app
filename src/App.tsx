import React, { useState, useEffect, ChangeEvent } from 'react';
import ImageFilter from 'react-image-filter';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import 'react-image-crop/dist/ReactCrop.css';
import Modal from '@mui/material/Modal';
// import ReactCrop from 'react-image-crop';
interface Post {
  id: number;
  photo: string;
  description: string;
  filterChoose: string;
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function MyApp(): JSX.Element {
  const [file, setFile] = useState<File>(); //Handling file
  const [preview, setPreview] = useState<string>(''); //handling Preview
  const [desc, setDesc] = useState<string>(''); //Handling Desc
  const [post, setPost] = useState<Post[]>([]);
  const [filterChoosen, setFilterChoosen] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [crop, setCrop] = useState<Crop>();
  const [cropOutput, setCropOutput] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (file) {
      setPreview(URL.createObjectURL(file));
      console.log('SK@1222', preview);
    }
    console.log('SK@', setCrop(), setImage());
  }, [file]);
  const handleFileChange = (e: ChangeEvent): void => {
    const { files } = e.target as HTMLInputElement;
    if (!files) {
      return;
    }
    setFile(files[0]);
    console.log('SK@10', file);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log('SK@144', preview);

  const cropImageNow = () => {
    console.log('SK@', image);
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    let x = <img id="scream" width="220" height="277" src="g.jpg" alt="The Scream" />;
    console.log('SK@ll', x);
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    // Converting to base64
    const base64Image = canvas.toDataURL('image/jpeg');
    setCropOutput(base64Image);
  };
  const handleUploadClick = () => {
    if (!file) {
      return;
    }
    setPreview('');
    setPost((prevState: Post[]) => [
      ...prevState,
      { id: new Date().getTime(), photo: preview, description: desc, filterChoose: filterChoosen },
    ]);
    handleClose();
  };
  const getFilterImg = (id: string) => {
    setFilterChoosen(id);
  };
  console.log('SK@111', image);
  return (
    <div>
      <h1>Instagram Posts:</h1>
      <Button onClick={handleOpen}>Post</Button>
      {post.map((item) => {
        return (
          <div>
            <ImageFilter
              image={item.photo}
              filter={item.filterChoose}
              style={{ width: '100px', height: '140px' }}
            />
            <div>{item.description}</div>
          </div>
        );
      })}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Please Upload a Image</h2>
          <input type="file" onChange={handleFileChange} />

          <button onClick={cropImageNow}>Croptt</button>
          {cropOutput && <img src={cropOutput} />}
          <div style={{ display: 'flex', gap: '10px' }}>
            <ImageFilter
              image={preview}
              filter={'duotone'} // see docs beneath
              colorOne={[40, 250, 250]}
              colorTwo={[250, 150, 30]}
              style={{ width: '100px', height: '140px' }}
              onClick={() => getFilterImg('duotone')}
            />
            <ImageFilter
              image={preview}
              filter={'sepia'} // see docs beneath
              style={{ width: '100px', height: '140px' }}
              onClick={() => getFilterImg('sepia')}
            />
            <ImageFilter
              image={preview}
              filter={'grayscale'} // see docs beneath
              style={{ width: '100px', height: '140px' }}
              onClick={() => getFilterImg('grayscale')}
            />
            <ImageFilter
              image={preview}
              filter={'invert'} // see docs beneath
              style={{ width: '100px', height: '140px' }}
              onClick={() => getFilterImg('invert')}
            />
          </div>
          <div>{file && `${file.name} - ${file.type}`}</div>
          {preview && filterChoosen && (
            <>
              <ImageFilter
                image={preview}
                filter={filterChoosen}
                style={{ width: '100px', height: '140px' }}
              />
              <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </>
          )}
          <Button variant="contained" onClick={handleUploadClick}>
            Upload
          </Button>

          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Box>
      </Modal>
    </div>
  );
}

import { useState, useEffect, ChangeEvent, useMemo } from 'react';
import ImageFilter from 'react-image-filter';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { v4 } from 'uuid';
import Modal from '@mui/material/Modal';
import { TextareaAutosize } from '@mui/material';
import axios from 'axios';
import { SelectedFile } from './Post.Types';
import { FilePickerModal } from './Post.Styles';
import { loadPostAPI } from './Post.API';

export default function PostUI(): JSX.Element {
  const [selectFilesForUser, setSelectFilesByUser] = useState<File | null>(null);
  const [caption, setCaption] = useState<string>('');
  const [postUpload, setPostUpload] = useState<SelectedFile[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [backendFilter, setBackendFilter] = useState<string[]>([]); //having doubt
  const [open, setOpen] = useState<boolean>(false);
  const [dataFromback, setDataFromback] = useState<string[]>([]);
  const [page] = useState<number>(1);
  const [limit] = useState<number>(10);

  const filePreview = useMemo(() => {
    if (selectFilesForUser) {
      return URL.createObjectURL(selectFilesForUser);
    }
    return '';
  }, [selectFilesForUser]);

  const loadPosts = async () => {
    const postList: any = await loadPostAPI(1234, page, limit);

    if (
      !postList?.data?.data?.results[0].response ||
      postList?.data?.data?.results[0]?.response?.length === 0
    ) {
      return;
    }

    postList?.data?.data?.results[0].response.map((item: any) => {
      setBackendFilter((preState) => [...preState, item.filter]); //backend se jo filter aaya ussko sat kia
      return item.attachments.map((item_nest) => {
        return setDataFromback((prestate) => [...prestate, item_nest.url]);
      });
    });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  /**
   * @description {Method to handle file/image selection by the user}
   * @param {ChangeEvent} e
   * @returns
   */
  const onImageSelection = (e: ChangeEvent): void => {
    const { files } = e.target as HTMLInputElement;
    if (!files) {
      return;
    }
    setSelectFilesByUser(files[0]);
  };
  /**
   * @description {Method to post images to the server}
   * @returns
   */
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onPostImages = () => {
    if (!selectFilesForUser) {
      return;
    }
    setSelectFilesByUser(null);
    setPostUpload((prevState: SelectedFile[]) => [
      ...prevState,
      { id: v4(), photo: filePreview, description: caption, filterChoose: filter },
    ]);
    console.log('SK@55', selectFilesForUser);
    let formData = new FormData();
    formData.append('file', selectFilesForUser);

    axios
      .post('http://localhost:4000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        // console.log('SK@', res.data[0].name);
        axios.post('http://localhost:4000/post', {
          userId: '1234',
          description: caption,
          attachments: res.data,
          filter: filter,
        });
      });

    handleClose();
  };
  const getFilterImg = (id: string) => {
    setFilter(id);
  };
  console.log('SK@checkingfilter', filter);
  console.log('SK@333', dataFromback);
  return (
    <div>
      {/* <h1 style={{display: "flex", color: "black", textAlign: "center", margin: "20px",position: 'absolute' as 'absolute',
  top: '3%',
  left: '35%', }}>Upload A New Post</h1> */}
      <Button
        onClick={handleOpen}
        style={{ position: 'absolute' as 'absolute', top: '15%', left: '20%' }}
      >
        Create
      </Button>

      {postUpload.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              position: 'relative',

              left: '35%',
            }}
          >
            <ImageFilter
              image={item.photo}
              filter={item.filterChoose}
              style={{ width: '200px', height: '240px' }}
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
        <Box sx={{ ...FilePickerModal, width: 600, height: 500 }}>
          {/* <Demo photo={filePreview} /> */}
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden onChange={onImageSelection} />
          </Button>
          <h1 style={{ color: 'white' }}>Upload post</h1>
          {!filter && filePreview && (
            <img src={filePreview} alt="" style={{ width: '200px', height: '240px' }} />
          )}

          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'end',
              flexWrap: 'wrap',
              width: '56%',
              float: 'right',
            }}
          >
            <ImageFilter
              image={filePreview}
              filter={'duotone'} // see docs beneath
              colorOne={[40, 250, 250]}
              colorTwo={[250, 150, 30]}
              style={{ width: '100px', height: '140px' }}
              onClick={() => getFilterImg('duotone')}
            />
            <ImageFilter
              image={filePreview}
              filter={'grayscale'} // see docs beneath
              style={{ width: '100px', height: '140px' }}
              onClick={() => getFilterImg('grayscale')}
            />
            <ImageFilter
              image={filePreview}
              filter={'invert'} // see docs beneath
              style={{ width: '100px', height: '140px' }}
              onClick={() => getFilterImg('invert')}
            />
            <ImageFilter
              image={filePreview}
              filter={'invert'} // see docs beneath
              style={{ width: '100px', height: '140px' }}
              onClick={() => getFilterImg('invert')}
            />
            <ImageFilter
              image={filePreview}
              filter={'sepia'} // see docs beneath
              style={{ width: '100px', height: '140px' }}
              onClick={() => getFilterImg('sepia')}
            />
          </div>

          {filePreview && filter && (
            <>
              <ImageFilter
                image={filePreview}
                filter={filter}
                style={{ width: '200px', height: '240px', border: '1px solid black' }}
              />
              <TextareaAutosize value={caption} onChange={(e) => setCaption(e.target.value)} />
            </>
          )}
          <Button
            variant="contained"
            onClick={onPostImages}
            style={{ position: 'absolute' as 'absolute', top: '80%' }}
          >
            Post Image
          </Button>
        </Box>
      </Modal>
      {dataFromback.map((item, i) => {
        return (
          <>
            <ImageFilter
              image={`http://${item}`}
              filter={backendFilter[i]}
              style={{ width: '200px', height: '240px', border: '1px solid black' }}
            />
          </>
        );
      })}
    </div>
  );
}

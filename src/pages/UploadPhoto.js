import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { uploadImg } from "../features/imageUploadSlice";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { addDelVehDetails } from "../features/deliveryVehicleSlice";

const UploadPhoto = () => {
  let imageState = useSelector((state) => state?.image?.images);

  const { state } = useLocation();
  const { did, vid } = state;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);

  const img = [];
  imageState.forEach((i) => {
    img.push({
      public_id: i?.public_id,
      url: i?.url,
    });
  });

  useEffect(() => {
    setFiles(img);
  }, [imageState]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      addDelVehDetails({
        driver: did,
        vehicle: vid,
        images: files,
      })
    );
    setFiles([]);
    imageState = [];
    navigate("/");
  };

  return (
    <section>
      <div className="w-5/6 mx-auto min-h-[500px] shadow shadow-black flex flex-col justify-center items-center">
        <h3 className="mb-10 mt-10">Upload Image</h3>
        <form onSubmit={formSubmitHandler}>
          <div>
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div
                    {...getRootProps()}
                    className="dropzone flex justify-center items-center"
                  >
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="flex gap-12">
            {imageState &&
              imageState?.map((image, i) => (
                <div className="flex flex-col border-black-all p-5" key={i}>
                  {/* <div
                className="self-end"
                onClick={() =>
                  dispatch(deleteImgFromDropZone(image?.public_id))
                }
              >
                <ImCross />
              </div> */}
                  <div className="w-[200px] h-[200px]">
                    <img
                      src={image?.url}
                      alt="Image"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              ))}
          </div>

          <button
            type="submit"
            className="block p-3 w-[200px] ms-10 mb-10 bg-blue-900 text-white cursor-pointer hover:bg-blue-300 hover:text-red-700"
          >
            UPLOAD
          </button>
        </form>
      </div>
    </section>
  );
};

export default UploadPhoto;

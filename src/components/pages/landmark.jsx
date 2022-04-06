import React, { useEffect, useState } from "react";
import { API_HOST } from "../../consts";
import CrudWrapper from "../crudWrapper";
import MainLayout from "../mainLayout";
import "./tourists.scss";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { getToken } from "../helper/utils";
import { toast } from "react-toastify";
import Modal from "../modal";

const Landmark = () => {
  const [landmark, setLandmark] = useState([]);
  const [postLandmark, setPostLandmark] = useState({});
  const [popup, setPopup] = useState(false);
  const [deletLandmark, setDeleteLandmark] = useState({ id: "" });

  const getAllLandmarks = async () => {
    try {
      const response = await fetch(`${API_HOST}geo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setLandmark(data.data);
    } catch (err) {}
  };

  useEffect(() => {
    getAllLandmarks();
  }, []);

  const handleChange = (item) => {
    setPostLandmark(item);
  };

  const handleDescriptionChange = (value) => {
    setPostLandmark((landmark) => ({ ...landmark, description: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${API_HOST}geo/${postLandmark.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(postLandmark),
      });

      await response.json();
      toast("Landmark Updated", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        type: "success",
      });
      getAllLandmarks();
    } catch (err) {
      console.log(err, "error");
    }
  };

  const handleDeleteModal = (e, id) => {
    e.preventDefault();
    console.log(id, "id");
    setDeleteLandmark((landmark) => ({ ...landmark, id: id }));
    setPopup(true);
  };

  const handleDelete = async () => {
    setPopup(false);
    try {
      const response = await fetch(`${API_HOST}geo/${deletLandmark.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getToken()}`,
        },
      });

      await response.json();
      toast("Deleted Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        type: "success",
      });
      getAllLandmarks();
    } catch (err) {
      console.log(err, "error");
    }
  };

  const read = (
    <div className="list-wrap">
      <h3 className="list-title">All Landmarks</h3>
      <ul className="list">
        <li>
          <div className="sn heading">Sn</div>
          <div className="heading">Name</div>
          <div className="heading">latitude</div>
          <div className="heading">longitude</div>
          <div className="heading">radius</div>
          <div className="heading">action</div>
          <div className="sn-lg"></div>
        </li>
        {landmark.map((item, index) => (
          <li key={item.id} className="list-item">
            <div className="sn">{index + 1}.</div>
            <div>{item.name}</div>
            <div>{item.latitude}</div>
            <div>{item.longitude}</div>
            <div>{item.radius}</div>
            <div
              className="update-btn"
              onClick={() => {
                handleChange(item);
              }}
            >
              Description
            </div>
            <div
              className="sn-lg"
              onClick={(e) => handleDeleteModal(e, item.id)}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAtElEQVRIie2VQQ6CQAxFX8R7uPM4xsPgCTmFSzW6niUGBTezMnawLTIQecks+1+bzgD8G4Wjdg9sgeNAvXzNHah/Fb6L4Z3y1LFWTWWQSaf6JFhZulLSjeCYOQH/foMUntrx2d87p1xiMWOS4ssAYjFjkhNnE4s3UoEpowAa7G+4AdZSeGriJ3CzdBy5Ag+LGHx7TtYu4nc8H5FkbbaJ+9gALfqn1MZaFwd0/+YAlF7pwvx5Abo6e/T2cOSLAAAAAElFTkSuQmCC" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  const write = (
    <div className="quill-wrapper">
      <div className="sn">{postLandmark.name}</div>
      <div className="quill-content">
        {postLandmark.id ? (
          <>
            <ReactQuill
              value={postLandmark.description}
              theme="snow"
              onChange={(value) => handleDescriptionChange(value)}
              modules={{
                toolbar: [
                  ["bold", "italic", "underline"], // toggled buttons
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ header: [1, 2, 3, 4, 5, 6, false] }],
                  [{ font: [] }],
                  [{ align: [] }],
                  ["image"],
                ],
              }}
              formats={[
                "header",
                "font",
                "size",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "link",
                "image",
              ]}
            />
            <div className="update-btn" onClick={handleSubmit}>
              Update
            </div>
          </>
        ) : (
          <div className="empty-quill">Select Description to edit</div>
        )}
      </div>
    </div>
  );

  return (
    <MainLayout>
      <CrudWrapper read={read} create={write} />
      {popup ? (
        <Modal>
          <div className="modal-dialog">
            <div className="modal-header">Are you sure want to delete?</div>
            <div className="modal-body"></div>
            <div className="modal-footer">
              <div className="modal-btn" onClick={handleDelete}>
                Yes
              </div>
              <div className="modal-btn" onClick={() => setPopup(false)}>
                Cancel
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </MainLayout>
  );
};

export default Landmark;

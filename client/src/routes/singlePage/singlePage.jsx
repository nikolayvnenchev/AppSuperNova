import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { useNavigate, useLoaderData, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import ModalDelete from './modal-delete/ModalDelete/ModalDelete.jsx';

function SinglePage() {
  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMessage = async () => {
    
    try {
      const response = await apiRequest.get(`/chats/check`, {
        params: {
          userId1: currentUser.id,
          userId2: post.userId,
        },
      });

      console.log(response);
      

      if (response.data.exists) {
        navigate(`/profile`);
      } else {
        await apiRequest.post("/chats", { receiverId: post.userId})
        navigate(`/profile`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    // AFTER REACT 19 UPDATE TO USEOPTIMISTIK HOOK
    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  const handleUpdate = async () => {
    const postId = post.id;
    if (currentUser && currentUser.id === post.userId) {
    try {
      await apiRequest.get(`/posts/${postId}`);
      navigate(`/${postId}/update`);
    } catch (err) {
      console.log(err); 
    }
  } else {
    console.log("You are not the owner!");
    
  }
  }

  const handleDelete = async () => {
    const postId = post.id;
    if (currentUser && currentUser.id === post.userId) {
    try {
      await apiRequest.delete(`/posts/${postId}`);
      navigate("/profile");
    } catch (err) {
      console.log(err); 
    }
    } else {
      console.log("You are not the owner!");
    
    }
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
}

const handleCancel = () => {
    setIsModalOpen(false);
}

const handleConfirmDelete = async () => {
    setIsModalOpen(false);
    await handleDelete();
}

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images && post.images.length > 0 ? post.images : ["/noimage.jpg"]} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar || "/noavatar.jpg"} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                {post.postDetail.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {post.postDetail.school > 999
                    ? post.postDetail.school / 1000 + "km"
                    : post.postDetail.school + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            {currentUser && currentUser.id !== post.userId && (
              <button onClick={handleMessage}>
                <img src="/chat.png" alt="" />
                Message to {post.user.username}
              </button>
            )}
            {currentUser && currentUser.id !== post.userId && (
            <button
            onClick={handleSave}
            style={{
              backgroundColor: saved ? "#fece51" : "white",
            }}
            >
              <img src="/save.png" alt="" />
              {saved ? "Place Saved" : "Save the Place"}
            </button>
            )}
            {currentUser && currentUser.id === post.userId && (
                <button onClick={handleUpdate}>
                  Update
                </button>
            )}
            {currentUser && currentUser.id === post.userId && (
              <button
                onClick={handleDeleteClick}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
                <ModalDelete
                    onCancel={handleCancel}
                    onConfirm={handleConfirmDelete}
                />
      )}
    </div>
  );
}

export default SinglePage;

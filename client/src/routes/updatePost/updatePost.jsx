import { useState, useEffect } from "react";
import "./updatePost.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

function UpdatePost() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    address: "",
    city: "",
    bedroom: "",
    bathroom: "",
    type: "",
    property: "",
    latitude: "",
    longitude: "",
    utilities: "",
    pet: "",
    income: "",
    size: "",
    school: "",
    bus: "",
    restaurant: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { postId } = useParams();
//   console.log(postId);
  

useEffect(() => {
    const fetchPostData = async () => {
        // const postId = post.id;
        try {
        const response = await apiRequest.get(`/posts/${postId}`); // Fetch the post by ID
        const { postDetail, ...data } = response.data;
        console.log();
        

        // Populate the form with the existing post data
        setFormData({
          title: data.title,
          price: data.price,
          address: data.address,
          city: data.city,
          bedroom: data.bedroom,
          bathroom: data.bathroom,
          type: data.type,
          property: data.property,
          latitude: data.latitude,
          longitude: data.longitude,
          utilities: postDetail.utilities,
          pet: postDetail.pet,
          income: postDetail.income,
          size: postDetail.size,
          school: postDetail.school,
          bus: postDetail.bus,
          restaurant: postDetail.restaurant,
        });
        setValue(postDetail.desc);  // Prefill the post description
        setImages(data.images);  // Prefill the images

      } catch (err) {
        console.error("Error fetching post data", err);
        setError("Failed to load post data.");
      }
    };

    fetchPostData();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/posts/${postId}`, {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetail: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
      navigate(`/${postId}`)
    } catch (err) {
      console.log(err);
      setError(error);
    }
  };

  const handleDescChange = (desc) => {
    setValue(desc);
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Update Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} required />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" name="desc" value={value} onChange={handleDescChange}/>
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} required />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input min={1} id="bedroom" name="bedroom" type="number" value={formData.bedroom} onChange={(e) => setFormData({ ...formData, bedroom: e.target.value })} required />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={1} id="bathroom" name="bathroom" type="number" value={formData.bathroom} onChange={(e) => setFormData({ ...formData, bathroom: e.target.value })} required />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" value={formData.latitude} onChange={(e) => setFormData({ ...formData, latitude: e.target.value })} required />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" value={formData.longitude} onChange={(e) => setFormData({ ...formData, longitude: e.target.value })} required />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} required >
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Property</label>
              <select name="property" value={formData.property} onChange={(e) => setFormData({ ...formData, property: e.target.value })} required >
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities" value={formData.utilities} onChange={(e) => setFormData({ ...formData, utilities: e.target.value })} required >
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet" value={formData.pet} onChange={(e) => setFormData({ ...formData, pet: e.target.value })} required >
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
                value={formData.income} onChange={(e) => setFormData({ ...formData, income: e.target.value })} required 
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input min={0} id="size" name="size" type="number" value={formData.size} onChange={(e) => setFormData({ ...formData, size: e.target.value })} required />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input min={0} id="school" name="school" type="number" value={formData.school} onChange={(e) => setFormData({ ...formData, school: e.target.value })} required />
            </div>
            <div className="item">
              <label htmlFor="bus">bus</label>
              <input min={0} id="bus" name="bus" type="number" value={formData.bus} onChange={(e) => setFormData({ ...formData, bus: e.target.value })} required />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input min={0} id="restaurant" name="restaurant" type="number" value={formData.restaurant} onChange={(e) => setFormData({ ...formData, restaurant: e.target.value })} required />
            </div>
            <button className="sendButton">Update</button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "dxqcqk63m",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default UpdatePost;

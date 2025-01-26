import { defer, useNavigate } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const { id } = params;

// Validate if the id is a valid 24-character hex string (MongoDB ObjectId)
const isValidObjectId = /^[a-fA-F0-9]{24}$/.test(id);

  if (!isValidObjectId) {
    return Response.redirect('/not-found');
  }

  try {
    const res = await apiRequest("/posts/" + params.id);

    if (!res.data || res.data && res.data.user.avatar === "undefined") {
      return Response.redirect('/not-found');
    }

    return res.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return Response.redirect('/not-found');
  }
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = apiRequest("/posts?" + query);
  return defer({
    postResponse: postPromise,
  });
};

export const profilePageLoader = async () => {
  const postPromise = apiRequest("/users/profilePosts");
  const chatPromise = apiRequest("/chats");
  return defer({
    postResponse: postPromise,
    chatResponse: chatPromise,
  });
};

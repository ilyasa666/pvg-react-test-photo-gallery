import axios from "axios";

interface IGetPhotos {
  searchQuery?: string;
  perPage?: number;
  page?: number;
}

const token = "XgWAybqqdPAR-TE3n5Qss-aXw7haN7lT6UsRoyXR8iM";

export const getAllPhotos = async ({ page, perPage }: IGetPhotos) => {
  return await axios.get(
    `https://api.unsplash.com/photos/?page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `Client-ID ${token}`,
      },
    }
  );
};

export const getSearchPhotos = async ({ searchQuery, perPage }: IGetPhotos) => {
  return await axios.get(
    `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `Client-ID ${token}`,
      },
    }
  );
};

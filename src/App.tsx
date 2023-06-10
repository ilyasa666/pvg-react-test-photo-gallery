import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { Box, Skeleton } from "@mui/material";
import { getAllPhotos, getSearchPhotos } from "./services/api";
import Wrapper from "./global";
import { Masonry } from "@mui/lab";
import CardPhoto from "./components/CardPhoto";
import ModalPhoto from "./components/Modal";
import Header from "./components/Header";

interface Photo {
  id: string;
  title: string;
  description: string;
  author: string;
  thumbnailUrl: string;
  fullSizeUrl: string;
  profile: string;
}

const AppWrapper = styled("div")`
  padding: 20px;
`;

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  // const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo>();

  const fetchData = () => {
    setLoading(true);
    getAllPhotos({
      page: 1,
      perPage: perPage,
    })
      .then((res) => {
        if (res.status === 200 && res.data && !error) {
          const photoData = res.data.map((result: any) => ({
            id: result.id,
            title: result.alt_description,
            description: result.description,
            author: result.user.name,
            thumbnailUrl: result.urls.thumb,
            fullSizeUrl: result.urls.regular,
          }));
          setPhotos(photoData);
        } else {
          setPhotos([]);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          setError(true);
        } else {
          console.log(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (photos.length === 0) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (e.message === "ResizeObserver loop limit exceeded") {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      getSearchPhotos({
        searchQuery: searchQuery,
        perPage: 20,
      }).then((res) => {
        const photoData = res.data.results.map((result: any) => ({
          id: result.id,
          title: result.description,
          author: result.user.name,
          thumbnailUrl: result.urls.thumb,
          fullSizeUrl: result.urls.regular,
          profile: result.user.profile_image.small,
        }));

        setPhotos(photoData);
      });
    } catch (error) {
      console.error("Error searching photos:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (
      scrollTop + clientHeight >= scrollHeight - 20 &&
      !loading &&
      !error &&
      perPage <= 100
    ) {
      setLoading(true);
      setPerPage((prevPage) => prevPage + 10);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (perPage > 10 && perPage <= 100) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage]);

  return (
    <Wrapper>
      <ModalPhoto
        open={modal}
        onClose={() => setModal(false)}
        close={() => setModal(false)}
        src={selectedPhoto?.fullSizeUrl}
        author={selectedPhoto?.author}
        title={
          selectedPhoto?.description !== null
            ? selectedPhoto?.description
            : selectedPhoto?.title
        }
        profile={selectedPhoto?.profile}
      />
      <AppWrapper>
        <Header
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <Box sx={{ width: "100%", minHeight: 393, py: 3, px: 0 }}>
          {!loading ? (
            <Masonry
              columns={{ md: 4, sm: 3, xs: 2 }}
              spacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {photos.map((photo) => (
                <CardPhoto
                  key={photo.id}
                  img={photo.thumbnailUrl}
                  title={photo.title}
                  author={photo.author}
                  profile={photo.profile}
                  onClick={() => {
                    setModal(true);
                    setSelectedPhoto(photo);
                  }}
                />
              ))}
            </Masonry>
          ) : (
            <Masonry
              columns={{ md: 4, sm: 3, xs: 2 }}
              spacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {Array.from(Array(10)).map((_, index) => (
                <Box key={index} sx={{ pt: 0.5 }}>
                  <Skeleton height="200px" />
                  <Skeleton width="40%" />
                  <Skeleton width="60%" />
                </Box>
              ))}
            </Masonry>
          )}
        </Box>
        {error && <p>Sorry the server is busy, please try again later</p>}
      </AppWrapper>
    </Wrapper>
  );
};

export default App;

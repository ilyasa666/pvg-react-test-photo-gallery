import { Avatar, Button, IconButton, Modal, Stack } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ShareIcon from "@mui/icons-material/Share";
import ShareModal from "./ShareModal";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Container = styled.div`
  position: absolute;
  max-height: 95vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  background: #ffffff;
  border-radius: 20px;
  overflow: auto;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
  scrollbar-face-color: transparent;
  -ms-overflow-style: none;
  border-color: unset;
  border: unset;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Author = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 39px;
  margin: 0;
  color: #000000;
`;

const Title = styled.p`
  font-family: "Poppins";
  font-style: normal;
  max-width: 700px;
  font-weight: 500;
  font-size: 36px;
  line-height: 46px;
  color: #000000;
`;

export interface ModalProps {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  close?: () => void;
  title?: string;
  src?: string;
  author?: string;
  profile?: string;
}

export const ModalPhoto = ({
  open,
  onClose,
  close,
  title,
  author,
  profile,
  src,
}: ModalProps) => {
  const [share, setShare] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ border: "unset", borderColor: "unset" }}
      closeAfterTransition
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={modalVariants}
        transition={{ duration: 0.3 }}
      >
        <Container>
          <ShareModal
            open={share}
            onClose={() => setShare(false)}
            close={() => setShare(false)}
            url={src}
          />
          <Stack
            padding="10px 20px"
            direction="row"
            alignItems="end"
            justifyContent="end"
          >
            <IconButton onClick={close}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack
            spacing={1}
            direction="column"
            padding={{
              md: "0px 50px 20px",
              sm: "0px 30px 20px",
              xs: "0px 20px 15px",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Stack direction="row" spacing={1}>
                <Avatar src={profile} />
                <Author>{author}</Author>
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={2}
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  sx={{ height: "37px" }}
                  color="warning"
                  onClick={() => setFavourite(!favourite)}
                  startIcon={
                    favourite ? (
                      <StarIcon
                        color="warning"
                        sx={{ width: 25, height: 25 }}
                      />
                    ) : (
                      <StarBorderIcon
                        color="warning"
                        sx={{ width: 25, height: 25 }}
                      />
                    )
                  }
                >
                  Favourite
                </Button>
                <Button
                  variant="outlined"
                  sx={{ height: "37px" }}
                  color="primary"
                  onClick={() => setShare(true)}
                  startIcon={<ShareIcon sx={{ width: 23, height: 23 }} />}
                >
                  Share
                </Button>
              </Stack>
            </Stack>
            <Title>{title}</Title>
            <Stack
              direction="column"
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <LazyLoadImage
                  src={src}
                  alt={`Photo ${src}`}
                  effect="blur"
                  style={{
                    width: "100%",
                    paddingBottom: "10px",
                    maxHeight: "600px",
                    objectFit: "contain",
                  }}
                />
              </motion.div>
            </Stack>
          </Stack>
        </Container>
      </motion.div>
    </Modal>
  );
};

export default ModalPhoto;

import React from "react";
import { Stack, Typography, Modal, IconButton } from "@mui/material";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Container = styled.div`
  position: absolute;
  overflow: auto;
  max-height: 90vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 240px;
  background: #ffffff;
  border-radius: 20px;
  z-index: 5;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export interface ModalProps {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  close?: () => void;
  url?: string;
}

export const ShareModal = ({ open, onClose, close, url }: ModalProps) => {
  const handleShareInstagram = (photoUrl?: string) => {
    const instagramUrl = `https://www.instagram.com/?url=${encodeURIComponent(
      photoUrl ?? ""
    )}`;
    window.open(instagramUrl, "_blank");
  };
  const handleShareFacebook = (photoUrl?: string) => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      photoUrl ?? ""
    )}`;
    window.open(facebookUrl, "_blank");
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Stack
          padding="10px 15px"
          direction="row"
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ margin: "10px" }} />
          <Typography fontWeight="400" fontSize="16px">
            Share to ...
          </Typography>
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack
          style={{
            // justifyContent: "center",
            alignItems: "center",
            padding: "15px 0",
          }}
          direction="column"
        >
          <Stack
            direction="row"
            margin="0 0 30px 0"
            width="fit-content"
            sx={{
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                opacity: 0.8,
              },
              ":active": {
                opacity: 0.5,
              },
            }}
            onClick={() => handleShareFacebook(url)}
          >
            <FacebookIcon />
            <Typography fontWeight="400" fontSize="16px" margin="0 0 0 13px">
              Facebook
            </Typography>
          </Stack>
          <Stack
            direction="row"
            margin="0 0 30px 0"
            width="fit-content"
            sx={{
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                opacity: 0.8,
              },
              ":active": {
                opacity: 0.5,
              },
            }}
            onClick={() => handleShareInstagram(url)}
          >
            <InstagramIcon />
            <Typography fontWeight="400" fontSize="16px" margin="0 0 0 13px">
              Instagram
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Modal>
  );
};

export default ShareModal;

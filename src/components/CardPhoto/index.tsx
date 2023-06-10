import { Avatar, Stack, styled } from "@mui/material";

const Image = styled("img")`
  border-radius: 20px;
  width: 100%;
  padding-bottom: 10px;
`;
const TextTitle = styled("p")`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  margin: 0;
  color: #000000;
`;
const TextAuthor = styled("p")`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  margin: 0;
  color: #000000;
`;
interface IPhoto {
  img?: string;
  title?: string;
  author?: string;
  profile?: string;
  onClick?: () => void;
}

const CardPhoto = ({ img, title, author, profile, onClick }: IPhoto) => {
  return (
    <Stack
      sx={{ cursor: "pointer", "&:hover": { opacity: 0.8 } }}
      direction="column"
      onClick={onClick}
    >
      <Image src={img} />
      <TextTitle>{title}</TextTitle>
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar sx={{ width: 30, height: 30 }} alt={author} src={profile} />
        <TextAuthor>{author}</TextAuthor>
      </Stack>
    </Stack>
  );
};

export default CardPhoto;

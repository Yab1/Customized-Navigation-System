// Material UI components
import { useState, useContext } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "tss-react/mui";
import { red } from "@mui/material/colors";

export default function Details({ product, handleClose }) {
  const { classes } = useStyles();

  return (
    <Card sx={{ p: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={product.title}
        subheader={product.category}
        subheaderTypographyProps={{
          fontStyle: "oblique",
        }}
        sx={{ width: "85%" }}
      />
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 50,
          top: 40,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <CardContent sx={{ padding: 0, position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: "contain", pt: "0.5em" }}
        />

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ position: "absolute", right: 25, bottom: 5 }}
        >
          $ {product.price}
        </Typography>
      </CardContent>
      <Divider
        role="presentation"
        variant="middle"
        textAlign="left"
        sx={{ marginTop: 1 }}
      >
        Description
      </Divider>
      <CardContent className="d-f js-center al-center">
        <Typography
          component="h2"
          variant="caption"
          sx={{ paddingInline: 1, textAlign: "left" }}
        >
          {product.description}
        </Typography>
      </CardContent>
      <Stack className="d-f al-center" direction="row">
        <CardActions
          className="d-f al-center column"
          sx={{ padding: 0, marginLeft: 2 }}
        >
          <IconButton aria-label="add to cart">
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton aria-label="add to wishlist">
            <BookmarkAddIcon />
          </IconButton>
        </CardActions>
        <Rating
          name="half-rating-read"
          defaultValue={product.rating.rate}
          precision={0.5}
          readOnly
          sx={{ marginLeft: "auto", marginRight: 3 }}
        />
      </Stack>
    </Card>
  );
}

const useStyles = makeStyles()({
  cardcontent: {
    padding: 0,
    margin: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
});
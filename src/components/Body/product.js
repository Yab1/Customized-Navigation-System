import { useState, useEffect } from "react";
import { makeStyles } from "tss-react/mui";
// Custom Components
import Details from "./details";
// MUI Layouts
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
// MUI Data Display
import Avatar from "@mui/material/Avatar";
// MUI Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import CableIcon from "@mui/icons-material/Cable";
import DiamondIcon from "@mui/icons-material/Diamond";

// MUI Colors
import { red, yellow } from "@mui/material/colors";

export default function Product({ product }) {
  // states
  const [item, setItem] = useState([]);
  const [open, setOpen] = useState(false);

  // variables
  const { classes } = useStyles();

  // functions
  const handleClose = () => {
    setOpen(!open);
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Card
      raised
      sx={{
        maxWidth: 340,
        margin: 0,
        paddingInline: "0em",
        position: "relative",
      }}
    >
      <CardContent
        sx={{
          p: 0,
          left: 12,
          top: 4,
          position: "absolute",
          zIndex: "modal",
        }}
      >
        <Avatar bgcolor={red[500]} sx={{ width: 20, height: 20 }}>
          <ManIcon fontSize="small" />
        </Avatar>
      </CardContent>
      <CardHeader
        action={
          <IconButton aria-label="add product to wishlist">
            <BookmarkAddIcon />
          </IconButton>
        }
        sx={{ p: 0, position: "absolute", right: 12, zIndex: "modal" }}
      />
      <CardActionArea sx={{ paddingInline: "0.5em" }} onClick={handleOpen}>
        <CardMedia
          component="img"
          height="180"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: "contain", pt: "1.5em" }}
        />
      </CardActionArea>
      <Dialog
        open={open}
        onClose={handleClose}
        className={classes.br}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.modal + 1,
          borderRadius: "50%",
        }}
      >
        <Details product={product} handleClose={handleClose} />
      </Dialog>
      <CardContent className={classes.cardcontent}>
        <Typography
          className="d-f al-center"
          component="p"
          variant="caption"
          sx={{ paddingInline: 1, height: 40 }}
        >
          {product.title}
        </Typography>
      </CardContent>
      <CardContent
        className={classes.cardcontent}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ paddingLeft: 1 }}
        >
          $ {product.price}
        </Typography>
        <CardActions disableSpacing>
          <IconButton aria-label="add to cart">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles()({
  cardcontent: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  br: {
    borderRadius: "20%",
  },
});

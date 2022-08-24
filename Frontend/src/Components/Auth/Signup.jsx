// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import { TextField, Button } from "@material-ui/core";

// import "./auth.module.css";

// function getModalStyle() {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     display: "flex",
//     flexDirection: "column",
//     position: "absolute",
//     width: 250,
//     backgroundColor: theme.palette.background.paper,
//     border: "1px solid #adadad",
//     borderRadius: "5px",

//     boxShadow: theme.shadows[3],
//     padding: theme.spacing(2, 4, 3),
//   },
//   title: {
//     textAlign: "center",
//     fontFamily: "Poppins",
//   },
//   imageGoogle: {
//     width: "200px",
//     padding: "20px 20px 10px 0px",
//   },
//   imageFacebook: {
//     width: "200px",
//     padding: "0px 20px 10px 0px",
//   },
//   btn: {
//     margin: "20px 0px 10px 15px",
//     width: "140px",
//     color: "white",
//     backgroundColor: "#4ABBBB",
//     "&:hover": {
//       background: "#4ABBBB",
//       boxShadow: "3px 3px 2px #949393",
//     },
//   },
// }));

// export default function Signup() {
//   const classes = useStyles();

//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);
//   const [email, setEmail] = React.useState("");
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const body = (
//     <div style={modalStyle} className={classes.paper}>
//       <h5 className={classes.title}>Sign Up</h5>
//       <img
//         className={classes.imageGoogle}
//         src="https://www.revv.co.in/imgs/google-login.png"
//       />
//       <img
//         className={classes.imageFacebook}
//         src="https://www.revv.co.in/imgs/facebook-icon.png"
//       />
//       <TextField
//         placeholder="Please enter your email"
//         label="Email ID"
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//       />
//       <Button className={classes.btn} variant="filled">
//         Proceed
//       </Button>
//     </div>
//   );
//   return (
//     <div>
//       <button type="button" onClick={handleOpen}>
//         Open Modal
//       </button>
//       <Modal open={open} onClose={handleClose}>
//         {body}
//       </Modal>
//     </div>
//   );
// }

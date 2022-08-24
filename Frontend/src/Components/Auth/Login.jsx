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
//     width: 300,
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
//     margin: "10px 0px 0px 25px",
//   },
//   imageFacebook: {
//     width: "200px",
//     padding: "0px 20px 10px 0px",
//     margin: "0px 0px 0px 25px",
//   },
//   input: {
//     margin: "5px 0px",
//   },
//   btn: {
//     margin: "50px 0px 10px 40px",
//     width: "140px",
//     color: "white",
//     backgroundColor: "#4ABBBB",
//     "&:hover": {
//       background: "#4ABBBB",
//       boxShadow: "3px 3px 2px #949393",
//     },
//   },
//   newpass: {
//     color: "#4ABBBB",
//     fontFamily: "Poppins",
//     fontSize: "12px",
//   },
//   donthaveAccount: {
//       fontFamily: "Poppins",
//       fontSize: "12px",
//       color: "#7F7F7F"
//   },
//   span: {
//       color: "#4ABBBB",
//         fontSize: "16px"
//   }
// }));

// export default function Login() {
//   const classes = useStyles();

//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const body = (
//     <div style={modalStyle} className={classes.paper}>
//       <h5 className={classes.title}>Login</h5>
//       <TextField
//         className={classes.input}
//         label="Enter Email"
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//       />
//       <TextField type="password"
//         className={classes.input}
//         label="Password"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//       />
//       <p className={classes.newpass}>Set a new password to my emial id</p>
//       <Button className={classes.btn} variant="filled">
//         Login
//       </Button>
//       <p className={classes.donthaveAccount}>don't have an account yet? <span className={classes.span}>Sign Up</span></p>
//       <img
//         className={classes.imageGoogle}
//         src="https://www.revv.co.in/imgs/google-login.png"
//       />
//       <img
//         className={classes.imageFacebook}
//         src="https://www.revv.co.in/imgs/facebook-icon.png"
//       />
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

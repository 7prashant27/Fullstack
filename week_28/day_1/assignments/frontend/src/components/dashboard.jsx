import React, { useEffect, useState } from "react";
import axios from "axios";
import AddForm from "./addForm";
import EditForm from "./editForm";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import {
  AppBar,
  Avatar,
  Typography,
  Grid,
  Divider,
  Button,
  Snackbar,
  Modal,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Card,
  CardHeader,
  CardContent,
  Toolbar,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EmailIcon from "@material-ui/icons/Email";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WcIcon from "@material-ui/icons/Wc";
import Pagination from "@material-ui/lab/Pagination";

let x;
let y;
let z;
let name = [];

const createAvater = (student_name) => {
  x = Math.floor(Math.random() * 256);
  y = Math.floor(Math.random() * 150);
  z = Math.floor(Math.random() * 256);
  name = student_name.split(" ");
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card_media: {
    height: 190,
  },
  card: {
    borderRadius: "10px",
    background: "#fdf9f7",
    boxShadow: `3px 3px 6px #908e8d,-3px -3px 6px #ffffff`,
    margin: "10px 10px",
  },
  title: {
    flexGrow: 1,
  },
  student_img: {
    width: "200px",
    height: "150px",
  },
  divider: {
    margin: "5px 10px",
  },
  button: {
    margin: theme.spacing(1),
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  model: {
    width: "60%",
    margin: "auto",
    borderRadius: "2px",
    background: "#e3e0d4",
    boxShadow: `inset 6px 6px 12px #787770, 
            inset -6px -6px 12px #ffffff`,
    padding: "10px 10px 10px 100px",
    marginTop: "50px",
    border: "none",
  },
  app_bar: {
    display: "flex",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Dashboard() {
  const classes = useStyles();

  const [is_Loading, setLoading] = useState(true);
  const [is_error, seterror] = useState(false);
  const [message, setMessage] = useState("");
  const [massage_status, setMassageStatus] = useState(false);
  const [edit_modal_status, setEditModalStatus] = useState(false);
  const [add_model_status, setAddModalStatus] = useState(false);
  const [active_page, setActivePage] = useState(1);
  const [total_data, setTotalData] = useState(0);
  const [limit] = useState(6);

  const [students_data, setStudents_data] = useState([]);
  const [single_student_data, setsingle_student_data] = useState({});

  const get_Student_data = async () => {
    await axios
      .get(
        `http://localhost:5000/api/students?page=${active_page}&limit=${limit}`
      )
      .then((res) => {
        setStudents_data(res.data.current);
        setTotalData(res.data.totalItem);
      })
      .catch((err) => {});
    setLoading(false);
  };

  const delete_student_Data = (student_email) => {
    fetch("http://localhost:5000/api/students/" + student_email, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        handleMessageOpen();
        get_Student_data();
      })
      .catch((err) => {
        setMessage(err);
      });
  };

  const get_single_student_data = (student_data) => {
    setsingle_student_data(student_data);
  };

  const edit_student_data = (student_data) => {
    fetch("http://localhost:5000/api/students/" + student_data.email, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(student_data),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        handleMessageOpen();
        handleEditModelClose();
        get_Student_data();
      })
      .catch((err) => {});
  };

  const handleNewStudent = (data) => {
    fetch("http://localhost:5000/api/students", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        handleMessageOpen();
        handleAddModelClose();
        get_Student_data();
      })
      .catch((err) => {});
  };

  useEffect(() => {
    get_Student_data();
  }, []);

  const handleMessageOpen = () => {
    setMassageStatus(true);
  };

  const handleMessageClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMassageStatus(false);
    setMessage("");
  };

  const handleEditModelOpen = (elem) => {
    if (elem) {
      get_single_student_data(elem);
    }
    setEditModalStatus(true);
  };

  const handleEditModelClose = () => {
    setEditModalStatus(false);
  };

  const handlePageChange = (e, page) => {
    setActivePage(page);
    get_Student_data();
  };

  const edit_model_body = (
    <div className={classes.model}>
      <h2 id="simple-modal-title">Edit</h2>

      <EditForm
        modal_status={edit_modal_status}
        set_status={handleEditModelClose}
        student_data={single_student_data}
        handle_edit={edit_student_data}
      />
    </div>
  );

  const handleAddModelOpen = (elem) => {
    setAddModalStatus(true);
  };

  const handleAddModelClose = () => {
    setAddModalStatus(false);
  };

  const add_model_body = (
    <div className={classes.model}>
      <h2 id="simple-modal-title">Add New Student</h2>

      <AddForm
        modal_status={add_model_status}
        set_status={handleAddModelClose}
        handle_add={handleNewStudent}
      />
    </div>
  );

  const loading_component = (<Grid
  item
  md={4}
  lg={3}
  xs={12}
  sm={6}
  className={classes.paper}
>
  <Card className={classes.card}>
    <CardHeader
      avatar={
        <Skeleton
          animation="wave"
          variant="circle"
          width={40}
          height={40}
        />
      }
      title={
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        />
      }
      subheader={
        <Skeleton animation="wave" height={10} width="40%" />
      }
    />

    <Skeleton
      animation="wave"
      variant="rect"
      className={classes.media}
    />

    <CardContent>
      <React.Fragment>
        <Skeleton
          animation="wave"
          height={10}
          style={{ marginBottom: 6 }}
        />
        <Skeleton animation="wave" height={10} width="80%" />
      </React.Fragment>
    </CardContent>
  </Card>
</Grid>)

  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              APACHE SEARCH
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<AddIcon />}
              onClick={handleAddModelOpen}
            >
              ADD STUDENT
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      {is_Loading ? (
        <Grid container spacing={3}>
          {loading_component}
          {loading_component}
          {loading_component}
          {loading_component}
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {students_data.map((elem) => (
            <Grid
              item
              md={4}
              lg={3}
              xs={12}
              sm={6}
              key={elem.email}
              className={classes.paper}
            >
              {createAvater(elem.name)}

              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar
                      style={{
                        backgroundColor: "rgb(" + x + "," + y + "," + z + ")",
                      }}
                      aria-label="init"
                    >
                      {name[0][0]}
                      {name[name.length - 1][0]}{" "}
                    </Avatar>
                  }
                  title={
                    <Typography variant="h6" gutterBottom>
                      {elem.name}
                    </Typography>
                  }
                />

                <img
                  src={elem.image_link}
                  alt={elem.name + " photo"}
                  className={classes.student_img}
                />

                <CardContent>
                  <Divider className={classes.divider} />

                  <List className={classes.root}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          style={{
                            backgroundColor: "white",
                            color: "rgb(" + x + "," + y + "," + z + ")",
                          }}
                        >
                          <PermIdentityIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="NAME" secondary={elem.name} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          style={{
                            backgroundColor: "white",
                            color: "red",
                          }}
                        >
                          <EmailIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Email" secondary={elem.email} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          style={{
                            backgroundColor: "white",
                            color: "black",
                          }}
                        >
                          <WcIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="GENDER" secondary={elem.gender} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          style={{
                            backgroundColor: "white",
                            color: "blue",
                          }}
                        >
                          <LocationOnIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="LOCATION" secondary={elem.city} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          style={{
                            backgroundColor: "white",
                            color: "red",
                          }}
                        >
                          <InvertColorsIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="BLOOD GROUP"
                        secondary={elem.blood_group}
                      />
                    </ListItem>
                  </List>

                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => delete_student_Data(elem.email)}
                  >
                    Delete
                  </Button>

                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    startIcon={<EditIcon />}
                    onClick={() => handleEditModelOpen(elem)}
                  >
                    Edit
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}

          <Grid md={12}>
            <Pagination
              style={{ marginLeft: "45%" , marginTop:"20px"}}
              count={Math.ceil(total_data / limit)}
              onChange={handlePageChange}
              color="secondary"
              page={active_page}
            />
          </Grid>

          <Modal
            open={edit_modal_status}
            onClose={handleEditModelClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {edit_model_body}
          </Modal>

          <Modal
            open={add_model_status}
            onClose={handleAddModelClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {add_model_body}
          </Modal>

          <Snackbar
            open={massage_status}
            autoHideDuration={5000}
            onClose={handleMessageClose}
          >
            <Alert
              onClose={handleMessageClose}
              severity={is_error ? "error" : "success"}
            >
              {message}
            </Alert>
          </Snackbar>
        </Grid>
      )}
      <Grid md={12}>
        <img src="wave.svg" alt=""/>
      </Grid>
    </div>
  );
}

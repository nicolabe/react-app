import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import Popover from "@material-ui/core/Popover";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Chat from "@material-ui/icons/Chat";
import CallEnd from "@material-ui/icons/CallEnd";
import Email from "@material-ui/icons/Email";

// React router
import { Link } from "react-router-dom";

const styles = theme => ({
  card: {
    margin: 20
  },
  media: {
    height: 250,
    width: 150,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20
  },
  typography: {
    margin: theme.spacing.unit * 2
  }
});

class BookItem extends Component {
  constructor() {
    super();
    this.state = {
      anchorElPopover: null
    };
  }

  handleClickShare = event => {
    this.setState({
      anchorElPopover: event.currentTarget
    });
  };

  handleCloseShare = () => {
    this.setState({
      anchorElPopover: null
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorElPopover } = this.state;

    return (
      <Grow in={true}>
        <Card>
          <Link to={`/books/${this.props.book.id}`}>
            <CardMedia
              className={classes.media}
              image={this.props.book.image}
              title={this.props.book.title}
            />
          </Link>
          <CardContent>
            <Typography
              gutterBottom
              variant="headline"
              component="h2"
              align="center"
            >
              {this.props.book.title}
            </Typography>
            <Typography variant="subheading" component="h2" align="center">
              {this.props.book.author}
            </Typography>
            <hr />
            <Typography component="p" align="left">
              {this.props.book.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={this.handleClickShare}
            >
              Del
            </Button>
            {!this.props.detailed && (
              <Button
                size="small"
                color="primary"
                component={Link}
                to={`/books/${this.props.book.id}`}
              >
                Detaljer
              </Button>
            )}
            <Popover
              open={Boolean(anchorElPopover)}
              anchorEl={anchorElPopover}
              onClose={this.handleCloseShare}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <Tabs
                fullWidth
                indicatorColor="primary"
                textColor="primary"
                value={false}
              >
                <Tab icon={<Chat />} />
                <Tab icon={<CallEnd />} />
                <Tab icon={<Email />} />
              </Tabs>
            </Popover>
          </CardActions>
        </Card>
      </Grow>
    );
  }
}

export default withStyles(styles)(BookItem);

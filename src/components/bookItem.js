import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";

// React router
import { Link } from "react-router-dom";

const styles = {
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
  }
};

class BookItem extends Component {
  render() {
    const { classes } = this.props;
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
            <Button size="small" color="primary">
              Del
            </Button>
            <Button
              size="small"
              color="primary"
              component={Link}
              to={`/books/${this.props.book.id}`}
            >
              Detaljer
            </Button>
          </CardActions>
        </Card>
      </Grow>
    );
  }
}

export default withStyles(styles)(BookItem);

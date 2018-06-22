import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import BookItem from './bookItem.js'
import CircularProgress from '@material-ui/core/CircularProgress';

class BookList extends Component {
	constructor() {
		super();
		this.state = {
			books: []
		}
	}

	componentWillMount() {
		this.settingState();
		// Promise.all(urls.map(url =>
		// 	fetch(url).then(res => res.json())
		// )).then(data => {
		// 	this.setState({books: data});
		// })
	}

	// The following block of code is just to simulate an API request
	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async settingState() {
		await this.sleep(1500);
		this.setState({
			books: [{
				id: 1,
				title: "The Lord of the Rings",
				author: "J.R.R. Tolkien",
				description: "Presents the epic depicting the Great War of the Ring, a struggle between good and evil in Middle-earth, following the odyssey of Frodo the hobbit and his companions on a quest to destroy the Ring of Power, in a special anniversary volume containing the corrected text of all three volumes of the seminal fantasy trilogy, complemented by maps and cover art by acclaimed artist Alan Lee. Simultaneous.",
				image: "https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg"
			},
			{
				id: 2,
				title: "Crime and Punishment",
				author: "Fyodor Dostoyevsky",
				description: "Raskolnikov, a conflicted former student, lives in a tiny, rented room in Saint Petersburg. He refuses all help, even from his friend Razumikhin, and devises a plan to murder and rob an elderly pawn-broker and money-lender, Alyona Ivanovna. His motivation comes from the overwhelming sense that he is predetermined to kill the old woman by some power outside of himself.",
				image: "https://images-na.ssl-images-amazon.com/images/I/51WVKaGAS-L._SX331_BO1,204,203,200_.jpg"
			},
			{
				id: 3,
				title: "The Old Man and the Sea",
				author: "Ernest Hemingway",
				description: "The last novel Ernest Hemingway saw published, The Old Man and the Sea has proved itself to be one of the enduring works of American fiction. It is the story of an old Cuban fisherman and his supreme ordeal: a relentless, agonizing battle with a giant marlin far out in the Gulf Stream. Using the simple, powerful language of a fable, Hemingway takes the timeless themes of courage in the face of defeat and personal triumph won from loss and transforms them into a magnificent twentieth-century classic.",
				image: "https://images-na.ssl-images-amazon.com/images/I/411pakPjvdL._SX326_BO1,204,203,200_.jpg"
			}]
		});
	}
	// End of simulation

  render() {
  	const books = this.state.books.map(book => {
  		return (
  			<BookItem key={book.id} book={book} />
  		);
  	});

  	const paperStyle = {
  		padding: 30,
  		textAlign: 'center'
  	}

    return(
    	<div>
	    	<Typography variant="display1" align="center">Vi anbefaler</Typography>
	    	<br/>
	    	{
	    		this.state.books.length?
	    			<div className="book-grid-container">
	    				{books}
	    			</div>
	    		:
						<div style={paperStyle}>
		    			<CircularProgress />
		    			<Typography variant="subheading">Henter bøker</Typography>
		    		</div>
	    	}
    	</div>
    )
  }
}

export default BookList;
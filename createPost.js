var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pw');

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
    console.log(db.name);
});

var postSchema = mongoose.Schema({
	title: String,
	text: String,
	date: String,
	post_id: Number,
	github: String,
	link: String,
	image_path: String,
	category: String
}, { collection: 'posts' });

var Post = mongoose.model("Post",postSchema);

var newPost = new Post({
    title: 'Uterine MRI Segmentation',
	text: 'Created software in Matlab to identify anatomical structures in MRI images of uterine fibroids with minimal user input, for an internship in Dr. Kullervo Hynynen\'s Focused Ultrasound Lab at Sunnybrook Research Institute. Greatly improved efficiency of segmentation process.',
	date: '2017/08/08',
	post_id: 11,
	github: '',
	link: '',
	image_path: '/static/images/uterinefibroid.jpg',
	category: 'Research'
});
		
newPost.save(function(error){ 
	if (error) {
		console.log("Error");
		return;
	}
	console.log("Post saved");
	mongoose.connection.close();
});

//variable used to store the complete data of all news channels
let fullData = ' ';
let data1 = [];
//variable used to store the popup content
let modalData = `<div id="myModal" class="modal">
					<div class="modal-content">
						<div class="modal-header">
							<span class="close" onclick="closepopup()">&times;</span>
							<h2 id="popup_head"></h2>
						</div>
						<div class="modal-body">
							<p id="popup_content" class="popup_content"></p>
						</div>
						<div class="modal-footer">
							<h3 id="popup_foot">&copy; NewsFeed 2019</h3>
						</div>
					</div>
				</div>`;

//Function to display the selected news category
var selectCategoryNews = () => {
	console.log(data1);
	let selectedCategory = document.getElementById('sel-category').value;
	let display = " ";
	let indexDisplay = [];
	if (selectedCategory !== 'All') {
		let selectedData = data1.filter(function (e, index) {
			if (selectedCategory === e.source.name)
				indexDisplay.push(index);
			return selectedCategory === e.source.name;
		});
		console.log(selectedData);
		let popupIndex = 0;
		selectedData.forEach(currentItem => {
			console.log(currentItem.urlToImage);
			display += `<div class='content' id='content'>
					<div class='content__sub' id='content__display'>
					<img src='${currentItem.urlToImage}' class='content__img' ></img>
					<h3 class='content__modifier content__head'>
					${currentItem.title}
					</h3> 
					<p class='content__modifier content__date'>
					${currentItem.publishedAt}
					</p> 
					<p class='content__modifier content__matter'>
					${currentItem.description}
					</p>
					<a href='#' class='content__modifier btn btn--pink' id='myBtn' onclick='showpopup(${indexDisplay[popupIndex++]})'>Continue Reading</a>
					</div><hr></div>`;
		});

		document.getElementById('displaynews').innerHTML = display;
	} else if (selectedCategory === 'All') {
		document.getElementById('displaynews').innerHTML = fullData;
	}
}

//On Load Function Call

var displayPage = () => {
	header();
	footer();
	displayForm();
	displayNews();
}

var header = () => {
	let html = `<h1 class="header__heading">NEWSFEED</h1><p class="header__caption">Yet another newsfeed</p>`;
	document.getElementById('header').innerHTML = html;
}

var footer = () => {
	let html = `<p class="footer__copyright">&copy; NewsFeed 2019</p>`;
	document.getElementById('footer').innerHTML = html;
}

var displayForm = () => {
	let url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=9fdb04ee4078412b82f9dd7f760464f8';
	let req = new Request(url);
	fetch(req).then((res) => res.json()).then((data) => {
		data1 = data.articles;

		let channels = [];
		data1.forEach((e) => {
			channels.push(e.source.name);
		});
		channels = [...new Set(channels)];

		let formDivision = document.createElement('div');
		formDivision.setAttribute('id', 'iamform');
		let mainDivision = document.getElementById('main');
		mainDivision.appendChild(formDivision);

		let allChannels = '';
		for (let i = 0; i < channels.length; i++) {
			allChannels += `<option value='${channels[i]}'>${channels[i]}</option>`;
		}

		document.getElementById('iamform').innerHTML = `<div class='form'>
		<label for='sel-category' class='form__select-label'><b>SELECT CATEGORY</b></label>
		<select id='sel-category' class='form__select-box' onchange='selectCategoryNews()'>
		// If the select is changed selectCategoryNews() is called
		<option value='All' selected>All</option>
		${allChannels} 
		</select>
		<label for='subscribe' class='form__subscribe-label'><b>SUBSCRIBE</b></label>
		<input type='text' id='subscribe' class='form__subscribe-textbox' placeholder='Email Address'/>
		<button class='form__subscribe-button' onclick='validate()'>Subscribe</button>
		</div>`;
	});
}

var displayNews = () => {
	let url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=9fdb04ee4078412b82f9dd7f760464f8';
	let req = new Request(url);
	fetch(req).then((res) => res.json()).then((data) => {
		// console.log(data);
		data = data.articles;
		// console.log(data[0].source.name);
		let displayNews = document.createElement('div');
		displayNews.setAttribute('id', 'displaynews');
		let main = document.getElementById('main');
		main.appendChild(displayNews);

		for (let index = 0; index < data.length; index++) {
			fullData += `<div class='content' id='content'>
			<div class='content__sub' id='content__display'>
			<img src='${data[index].urlToImage}' class='content__img' ></img>
			<h3 class='content__modifier content__head' id='myBtn'>
			${data[index].title}
			</h3>
			<p class='content__modifier content__date'>
			${data[index].publishedAt}
			</p>
			<p class='content__modifier content__matter'>
			${data[index].description}
			</p>
			<a href='#!' class='content__modifier btn btn--pink' id='myBtn' 
			onclick='showpopup(${index})'>Continue Reading</a>
			</div>
			<hr>`;
		}
		document.getElementById('displaynews').innerHTML = fullData;
	});
}
//For Validation of Email Address
let email = [];
var validate = () => {
	if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(document.getElementById('subscribe').value)) {
		let loc = localStorage.getItem('iamkey');
		if (loc) {
			email = JSON.parse(loc);
		}
		email.push(document.getElementById('subscribe').value);
		localStorage.setItem('iamkey', JSON.stringify(email));
		console.log(localStorage.getItem('iamkey'));
		alert('You have entered a valid email address!');
		return true;
	}
	alert('You have entered an invalid email address!');
	return false;
}

//When the user clicks the button, open the modal (for one news channel)
var showpopup = (i) => {

	let modelDivision = document.createElement('div');
	modelDivision.setAttribute('id', 'iammodal');
	let contentDivision = document.getElementById('content');
	contentDivision.appendChild(modelDivision);
	document.getElementById('iammodal').innerHTML = modalData;

	document.getElementById('popup_head').innerHTML = data1[i].title;
	document.getElementById('popup_content').innerHTML = data1[i].content;
	let modal = document.getElementById('myModal');
	modal.style.display = 'block';

}

//When the user clicks on <span> (x), close the modal
var closepopup = () => {
	let modal = document.getElementById('myModal');
	modal.style.display = 'none';
}

//When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	let modal = document.getElementById('myModal');
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

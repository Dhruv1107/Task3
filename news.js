//variable used to store the complete data of all news channels
let news;
window.onload = () => {
	news = new News();
};
class News {
	constructor() {
		this.fullData = '';
		// this.email = [];
		this.displayPage();
	}

	//On Load Function Call
	displayPage = () => {
		this.header();
		this.footer();
		this.response();
	};

	header = () => {
		let html = `<h1 class="header__heading">NEWSFEED</h1><p class="header__caption">Yet another newsfeed</p>
				<input type='text' id='subscribe' class='form__subscribe-textbox' placeholder='Email Address'/>
				<button class='form__subscribe-button' id='subBtn'>Subscribe</button>`;
		document.getElementById('header').innerHTML = html;
		document.getElementById('subBtn').addEventListener('click', validate);
	};

	footer = () => {
		let html = `<p class="footer__copyright">&copy; NewsFeed 2019</p>`;
		document.getElementById('footer').innerHTML = html;
	};

	response = () => {
		let url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=9fdb04ee4078412b82f9dd7f760464f8';
		let req = new Request(url);
		fetch(req).then((res) => res.json()).then((data) => {
			// this.dataJSON = data.articles;
			this.displayForm(data.articles);
			this.displayNews(data.articles);
		});
	}

	displayForm = (dataJSON) => {
		let channels = [];
		dataJSON.forEach((e) => {
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
				<select id='sel-category' class='form__select-box'>
				${allChannels} 
				</select>
				</div>`;
		document.getElementById('sel-category').addEventListener('change', function () {
			selectCategoryNews(dataJSON);
		});

	};

	displayNews = (dataJSON) => {
		let displayNews = document.createElement('div');
		displayNews.setAttribute('id', 'displaynews');
		let main = document.getElementById('main');
		main.appendChild(displayNews);

		for (let index = 0; index < dataJSON.length; index++) {
			this.fullData += `<div class='content' id='content'>
			<div class='content__sub' id='content__display'>
			<img src='${dataJSON[index].urlToImage}' class='content__img' ></img>
			<h3 class='content__modifier content__head' id='myBtn'>
			${dataJSON[index].title}
			</h3>
			<p class='content__modifier content__date'>
			${dataJSON[index].publishedAt}
			</p>
			<p class='content__modifier content__matter'>
			${dataJSON[index].description}
			</p>
			<a href='#!' class='content__modifier btn btn--pink' id='myBtn${index}'>Continue Reading</a>
			</div>
			<hr>`;
		}
		document.getElementById('displaynews').innerHTML = this.fullData;

		for (let index = 0; index < dataJSON.length; index++) {
			document.getElementById(`myBtn${index}`).addEventListener('click', function () {
				showpopup(index, dataJSON);
			});
		}

	};
}

//Function to display the selected news category
let selectCategoryNews = (dataJSON) => {
	let selectedCategory = document.getElementById('sel-category').value;
	let display = ' ';
	let indexDisplay = [];
	let data = dataJSON;

	let selectedData = data.filter(function (e, index) {
		if (selectedCategory === e.source.name) {
			indexDisplay.push(index);
		}
		return selectedCategory === e.source.name;
	});

	let popupIndex = 0;
	selectedData.forEach((currentItem, index) => {
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
				<a href='#' class='content__modifier btn btn--pink' id='myBtn${index}'>Continue Reading</a>
				</div><hr></div>`;
	});

	document.getElementById('displaynews').innerHTML = display;
	for (let index = 0; index < selectedData.length; index++) {
		document.getElementById(`myBtn${index}`).addEventListener('click', function () {
			console.log(data);
			showpopup(indexDisplay[index], data);
		});
	}
};

//For Validation of Email Address
let validate = () => {
	let email = [];
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
};

//When the user clicks the button, open the modal (for one news channel)
let showpopup = (index, data) => {
	let modalData = `<div id="myModal">
					<div class="modal-content">
						<div class="modal-header">
							<span class="close" id="spanClose">&times;</span>
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

	let modelDivision = document.createElement('div');
	modelDivision.setAttribute('id', 'iammodal');
	let contentDivision = document.getElementById('content');
	contentDivision.appendChild(modelDivision);
	document.getElementById('iammodal').innerHTML = modalData;
	document.getElementById('spanClose').addEventListener('click', closepopup);

	document.getElementById('popup_head').innerHTML = data[index].title;
	document.getElementById('popup_content').innerHTML = data[index].content;
	document.getElementById('myModal').classList.add('modal')
};

//When the user clicks on <span> (x), close the modal
let closepopup = () => {
	document.getElementById('myModal').classList.remove('modal');
};

//When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	let modal = document.getElementById('myModal');
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

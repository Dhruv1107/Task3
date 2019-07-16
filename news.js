//data in JSON Format
// let data = [
// 	{
// 		image: "<div class='content__img'></div>",
// 		heading: 'BBC',
// 		date: 'Posted on 29 June, 2019 //Category: Category One',
// 		content: `Iranian boats tried to impede a British oil tanker near the Gulf - before being driven off by a Royal Navy ship, a UK government spokesman has said. HMS Montrose positioned itself between the three boats and the tanker British Heritage before issuing verbal warnings to the Iranian vessels.`,
// 		popup: `A UK Government spokesman said: "Contrary to international law, three Iranian vessels attempted to impede the passage of a commercial vessel, British Heritage, through the Strait of Hormuz. "We are concerned by this action and continue to urge the Iranian authorities to de-escalate the situation in the region."`
// 	},
// 	{
// 		image: "<div class='content__img'></div>",
// 		heading: 'Aaj Tak',
// 		date: 'Posted on 11 July, 2019 //Category: Category One',
// 		content: `Some videos are becoming viral on the social media about the match, in which people are blaming the wrong decision of the umpire for the defeat of India from New Zealand.`,
// 		popup: `It is being said on social media that Mahendra Singh Dhoni should have given a no ball to the ball which was run out. Twitter users say that the umpire ignored fielding rules during the power play in Dhoni's run out decision. People say that in the third power play, only 5 players can live outside the scope of thirty yards, but at the run out of Dhoni, six players were out of the circle.`
// 	},
// 	{
// 		image: "<div class='content__img'></div>",
// 		heading: 'NDTV',
// 		date: 'Posted on 11 July, 2019 //Category: Category One',
// 		content: `"MS Dhoni Coming In At No. 5 Would've Made A Difference": Sachin Tendulkar After India's World Cup Exit`,
// 		popup: `After the match, India's batting legends Sachin Tendulkar and Sourav Ganguly expressed shock at MS Dhoni's batting position in such a crucial match. "Instead of Hardik, may be Dhoni coming in at No. 5 would have made a difference. Dhoni would have for sure done something and made sure on either side of him," Sachin Tendulkar told a news channel. "In a crunch moment like this you would think of promoting Dhoni and control the game. Towards the end he was talking to Jadeja and controlling the proceedings. Very smartly he was rotating the strike," Tendulkar added. Former India batsman VVS Laxman termed the change in batting order a "tactical blunder".`
// 	},
// 	{
// 		image: "<div class='content__img'></div>",
// 		heading: 'Republic',
// 		date: 'Posted on 29 June, 2019 //Category: Category One',
// 		content: 'ISRO Calls Off Chandrayaan-2 Launch Due To Technical Snag',
// 		popup:
// 			"ISRO on July 15, announced that the launch of Chandrayaan 2 has been postponed for the day as a measure of abundant precaution. ISRO said that there was a technical snag observed in launch vehicle system at T-56 and 24 seconds, after which first the countdown was stopped and then the launching of India's moon mission was delayed. "
// 	},
// 	{
// 		image: "<div class='content__img'></div>",
// 		heading: 'NBC',
// 		date: 'Posted on 29 June, 2019 //Category: Category One',
// 		content: 'Nine dead after small plane carrying parachutists crashes in Sweden',
// 		popup:
// 			'HELSINKI — Swedish officials said a small plane carrying parachutists crashed in northern Sweden soon after takeoff on Sunday and all nine people on board were killed. The accident took place a little after 2 p.m. local time on Storsandskar island. Swedish media quoted witnesses reporting that some of the parachutists were seen trying to jump off the plane just before the crash.'
// 	},
// 	{
// 		image: "<div class='content__img'></div>",
// 		heading: 'TV9',
// 		date: 'Posted on 29 June, 2019 //Category: Category One',
// 		content: 'Novak Djokovic Saves Match Points To Claim Fifth Wimbledon Title In Record-breaking Final',
// 		popup:
// 			"Novak Djokovic saved two match points to clinch a fifth Wimbledon title and 16th major on Sunday, shattering Roger Federer's bid to become the oldest Grand Slam champion in the longest final ever played at the tournament. Despite being outplayed by the 37-year-old Swiss for large parts of the knife-edge encounter, the world number one triumphed 7-6 (7/5), 1-6, 7-6 (7/4), 4-6, 13-12 (7/3). At 4 hours and 57 minutes, it was the longest Wimbledon final ever played and settled by a final set tiebreak for the first time."
// 	},
// 	{
// 		image: "<div class='content__img'></div>",
// 		heading: 'India Today',
// 		date: 'Posted on 29 June, 2019 //Category: Category One',
// 		content: "Hrithik Roshan's Super 30 full movie leaked by Tamilrockers, made available for free download",
// 		popup:
// 			"Hrithik Roshan's Super 30, which is based on the life of mathematician Anand Kumar, has been leaked online by piracy website Tamilrockers. The film was released on July 12 and has been doing a good business at the box office. Severe actions have been taken against the website, which is notorious to leak every latest release, but it continues to affect the business of films by leaking them online. Its latest piracy victims include Kabir Singh, Article 15, Oh Baby and Spider-Man Far From Home"
// 	},
// 	{
// 		image: "<div class='content__img'></div>",
// 		heading: 'Times Now',
// 		date: 'Posted on 29 June, 2019 //Category: Category One',
// 		content: "A haunting deflection and un-'fortunate' four runs - How New Zealand were denied glory at Lord's",
// 		popup:
// 			"A throw from deep caught an edge of Stokes' bat and the ball raced away for a four. It's hard to imagine a batsman scoring runs with the bat while sliding down to save himself from getting run-out. But that's what happened in the epic finale. Stunned by what just happened, New Zealand players saw their worst nightmare come true as England got six runs (two by running and four extra). Despite just three runs needed off the final two balls, the Kiwis were as spirited as ever and thanks to their nerves, England could only manage to get two of the remaining two balls to end the contest in a tie."
// 	},
// 	{
// 		image: "<div class='content__img'></div>",
// 		heading: 'Fox News',
// 		date: 'Posted on 29 June, 2019 //Category: Category One',
// 		content: 'Djokovic reveals ‘silly’ mental trick to help him deal with crowd at Wimbledon',
// 		popup: `Djokovic revealed a mental trick, according to the Times. After winning the match, after nearly five hours, he told reporters that when the crowd chanted “Roger! Roger,” he said he heard “Novak.”“It sounds silly, but it is like that. I try to convince myself that it’s like that.” The sets were 7-6 (5), 1-6, 7-6 (4), 4-6 and 13-12 (3). The final lasted nearly five hours, longer than any other Wimbledon final. Djokovic has now won Wimbledon five times.`
// 	},
// 	{
// 		image: "<div class='content__img'></div>",
// 		heading: 'CNN',
// 		date: 'Posted on 29 June, 2019 //Category: Category One',
// 		content: "'Silverstone, I love you': Lewis Hamilton wins record sixth British Grand Prix",
// 		popup: `Lewis Hamilton claimed a thrilling victory at Silverstone on Sunday to win a record-breaking sixth British Grand Prix. It looked as though teammate Valtteri Bottas would spoil the party for the 141,000 visiting fans, but a timely safety car intervention gifted Hamilton first place. Ferrari's Charles Leclerc claimed an impressive third place after an intense, wheel-to-wheel battle with Max Verstappen throughout the race.`
// 	}
// ];
//Channels present in the dropdown list
let channels = ['BBC', 'Aaj Tak', 'NBC', 'NDTV', 'Republic', 'TV9', 'India Today', 'Times Now', 'Fox News', 'CNN'];
//variable used to store the complete data of all news channels
let fullData = ' ';
//variable used to store the popup content
let modalData = `<div id="myModal" class="modal">
					<div class="modal-content">
						<div class="modal-header">
							<span class="close" onclick="closepopup()">&times;</span>
							<h2 id="popup_head"></h2>
						</div>
						<div class="modal-body">
							<p id="popup_content"></p>
						</div>
						<div class="modal-footer">
							<h3 id="popup_foot">&copy; NewsFeed 2019</h3>
						</div>
					</div>
				</div>`;

//Function to display the selected news category
function myFunction() {
	let selectedCategory = document.getElementById('sel-category').value;
	let display;
	let indexDisplay;
	if (selectedCategory !== 'All') {
		let singleData = data.filter(function (e, index) {
			if (selectedCategory === e.heading)
				indexDisplay = index;
			return selectedCategory === e.heading;
		});
		display = `<div class='content' id='content'>
					<div class='content__sub' id='content__display'>
					${singleData[0].image}
					<h3 class='content__modifier content__head'>
					${singleData[0].heading}
					</h3> 
					<p class='content__modifier content__date'>
					${singleData[0].date}
					</p> 
					<p class='content__modifier content__matter'>
					${singleData[0].content}
					</p>
					<a href='#' class='content__modifier btn btn--pink' id='myBtn' onclick='showpopup(${indexDisplay})'>Continue Reading</a>
					</div></div>`;
		document.getElementById('displaynews').innerHTML = display;
	}
	else if (selectedCategory === 'All') {
		document.getElementById('displaynews').innerHTML = fullData;
	}

}


//On Load Function Call

function displayPage() {
	header();
	footer();
	displayForm();
	displayNews();
}

function header() {
	let html = `<h1 class="header__heading">NEWSFEED</h1><p class="header__caption">Yet another newsfeed</p>`;
	document.getElementById('header').innerHTML = html;
}

function footer() {
	let html = `<p class="footer__copyright">&copy; NewsFeed 2019</p>`;
	document.getElementById('footer').innerHTML = html;
}

function displayForm() {
	let url = 'https://newsapi.org/v2/top-headlines?' +
		'country=us&' +
		'apiKey=9fdb04ee4078412b82f9dd7f760464f8';
	let req = new Request(url);
	fetch(req)
		.then(res => res.json())
		.then(data => {
			data = data.articles;
			let formDivision = document.createElement('div');
			formDivision.setAttribute('id', 'iamform');
			let mainDivision = document.getElementById('main');
			mainDivision.appendChild(formDivision);

			let allChannels = '';
			for (let i = 0; i < channels.length; i++) {
				allChannels += `<option value='${channels[i]}'>${channels[i]}</option>`;
			}

			document.getElementById('iamform').innerHTML =
				`<div class='form'>
		<label for='sel-category' class='form__select-label'><b>SELECT CATEGORY</b></label>
		<select id='sel-category' class='form__select-box' onchange='myFunction()'>
		// If the select is changed myFunction() is called
		<option value='All' selected>All</option>
		${allChannels} 
		</select>
		<label for='subscribe' class='form__subscribe-label'><b>SUBSCRIBE</b></label>
		<input type='text' id='subscribe' class='form__subscribe-textbox' placeholder='Email Address'/>
		<button class='form__subscribe-button' onclick='validate()'>Subscribe</button>
		</div>`;
		}
		);
}


function displayNews() {
	let url = 'https://newsapi.org/v2/top-headlines?' +
		'country=us&' +
		'apiKey=9fdb04ee4078412b82f9dd7f760464f8';
	let req = new Request(url);
	fetch(req)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			data = data.articles;
			let displayNews = document.createElement('div');
			displayNews.setAttribute('id', 'displaynews');
			let main = document.getElementById('main');
			main.appendChild(displayNews);

			for (let index = 0; index < data.length; index++) {
				fullData +=
					`<div class='content' id='content'>
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
		}
		)
};
//For Validation of Email Address
let email = [];
function validate() {
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
function showpopup(i) {
	let modelDivision = document.createElement('div');
	modelDivision.setAttribute('id', 'iammodal');
	let contentDivision = document.getElementById('content');
	contentDivision.appendChild(modelDivision);
	document.getElementById('iammodal').innerHTML = modalData;

	document.getElementById('popup_head').innerHTML = data[i].heading;
	document.getElementById('popup_content').innerHTML = data[i].popup;
	let modal = document.getElementById('myModal');
	modal.style.display = 'block';
}

//When the user clicks on <span> (x), close the modal
function closepopup() {
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

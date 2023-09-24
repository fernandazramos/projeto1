const scrollLeft = document.querySelector(".scroll-left");
const scrollRight = document.querySelector(".scroll-right");
const heroDiv = document.querySelector(".hero-img");
const sectionContainer = document.querySelector("section");
const bodyContainer = document.querySelector("body");
const emblemDiv = document.querySelector(".emblem");
const albumTitleSpan = document.querySelector(".album-title");
const texts = document.querySelectorAll(".text");
const albumNum = document.querySelector(".album-num");
const spotifyWidget = document.querySelector(".spotify-widget iframe");
const albums = [
	{
		album: "Que se chama amor",
		emblem: "Só pra contrariar",
		"bg-color": ["#727272", "#0D1827"],
		"accent-color": "#727272",
		url:"https://upload.wikimedia.org/wikipedia/pt/b/bf/S%C3%B3_pra_Contrariar_-_1997.jpg",
		spotify:
		"https://open.spotify.com/embed/track/6t5JVIK5NLb12nqnB49Ayn?utm_source=generator"
	},
    {
		album: "Eu menti",
		emblem: "Alexandre Pires",
		"bg-color": ["#727272", "#0D1827"],
		"accent-color": "#727272",
		url:"https://i1.sndcdn.com/artworks-UzDZM1T4Jcdq-0-t500x500.jpg",
		spotify:
		"https://open.spotify.com/embed/track/20oJRGD2UinF4AHzIg1FSH?utm_source=generator"
	},
	{
		album: "EVA",
		emblem: "Banda Eva",
		"bg-color": ["#727272", "#0D1827"],
		"accent-color": "#727272",
		url: "https://images-americanas.b2w.io/produtos/3097441354/imagens/cd-banda-eva-hora-h/3097441434_1_large.jpg",
		spotify:
		"https://open.spotify.com/embed/track/7EScnp28wyS0UH8Gybs8qq?utm_source=generator"
	},
	{
		album: "Lancinho",
		emblem: "Turma do Pagode",
		"bg-color": ["#727272", "#0D1827"],
		"accent-color": "#727272",
		url:
			"https://i1.sndcdn.com/artworks-000022786726-jlghp7-t500x500.jpg",
		spotify:
		"https://open.spotify.com/embed/track/6CeeLpwJUYA4b0xL7eSvzn?utm_source=generator"
	},
	{
		album: "Tá vendo aquela lua",
		emblem: "Exaltasamba",
		"bg-color": ["#727272", "#0D1827"],
		"accent-color": "#727272",
		url:
			"https://akamai.sscdn.co/uploadfile/letras/albuns/1/a/2/1/28872.jpg",
		spotify:
		"https://open.spotify.com/embed/track/6DjKWVAqXUvMaAzO4U4CIo?utm_source=generator"
	},
	{
		album: "Morango do Nordeste",
		emblem: "Karametade",
		"bg-color": ["#727272", "#0D1827"],
		"accent-color": "#727272",
		url:
			"https://akamai.sscdn.co/uploadfile/letras/albuns/e/5/d/d/451411438712526.jpg",
		spotify:
		"https://open.spotify.com/embed/track/7EjqwqoZbsuTrWYckzZGfX?utm_source=generator"
	},
	{
		album: "Refém",
		emblem: "Dilsinho",
		"bg-color": ["#727272", "#0D1827"],
		"accent-color": "#727272",
		url:
			"https://i1.sndcdn.com/artworks-000197159421-k1hawq-t500x500.jpg",
		spotify:
		"https://open.spotify.com/embed/track/4muZ1PUxmss4cVmYnpLrvs?utm_source=generator"
	},
	{
		album: "Sua mãe vai me amar",
		emblem: "Turma do Pagode",
		"bg-color": ["#727272", "#0D1827"],
		"accent-color": "#727272",
		url:
			"https://a10.gaanacdn.com/images/albums/69/2176869/crop_480x480_2176869.jpg",
		spotify:
		"https://open.spotify.com/embed/track/4fMjqKYYsvtT6Fvca8lGFl?utm_source=generator"
	},
	{
		album: "Sozinho",
		emblem: "Raça Negra",
		"bg-color": ["#727272", "#0D1827"],
		"accent-color": "#727272",
		url:
			"https://akamai.sscdn.co/uploadfile/letras/albuns/8/a/1/3/1127491628187311.jpg",
		spotify:
		"https://open.spotify.com/embed/track/1gu02s0KLvXU2iBJZDlyRu?utm_source=generator"
	},
	{
		album: "Dou a vida por um beijo",
		emblem: "Raça Negra",
		"bg-color": ["#727272", "#0D1827"],
		"accent-color": "#727272",
		url:
			"https://www.vagalume.com.br/raca-negra/discografia/a-vida-por-um-beijo.jpg",
		spotify:
		"https://open.spotify.com/embed/track/1evGz6jhUfj0YHuSRMKh00?utm_source=generator"
	},
];

scrollLeft.addEventListener("click", () => handleClickScroll(-1));
scrollRight.addEventListener("click", () => handleClickScroll(1));
heroDiv.addEventListener("animationend", () => {
	heroDiv.classList.remove("album-transition");
	document.addEventListener("keydown", handleKeyScroll);
	scrollLeft.disabled = false;
	scrollRight.disabled = false;
	scrollLeft.classList.remove("key-press-hover-left");
	scrollRight.classList.remove("key-press-hover-right");

	for (const text of texts) text.classList.add("show-texts");
});

const handleClickScroll = (val) => {
	if (index + val >= 0 && index + val < albums.length) {
		updateDisplay((index += val));
	}
};

const handleKeyScroll = (e) => {
	if (e.key == "ArrowLeft") {
		scrollLeft.classList.add("key-press-hover-left");
		handleClickScroll(-1);
	}
	if (e.key == "ArrowRight") {
		scrollRight.classList.add("key-press-hover-right");
		handleClickScroll(1);
	}
};
let index = 0;

const updateDisplay = (index) => {
	let DELIMITER = "";

	const album = albums[index];

	for (const text of texts) text.classList.remove("show-texts");
	emblemDiv.innerHTML = "";
	scrollLeft.disabled = true;
	scrollRight.disabled = true;
	document.removeEventListener("keydown", handleKeyScroll);

	sectionContainer.id = `hero-${album.album.toLowerCase().replace(" ", "-")}`;
	bodyContainer.style.background = `linear-gradient(180deg, ${album["bg-color"][0]} 0%, ${album["bg-color"][1]} 100%)`;
	heroDiv.style.backgroundImage = `url(${album.url})`;
	albumTitleSpan.textContent = album.album;
	spotifyWidget.src = album.spotify;

	const number = index + 1;
	albumNum.innerText = number >= 10 ? number + "." : `0${number}.`;
	albumNum.style.color = album["accent-color"];

	if (index === 10) scrollRight.classList.add("hide-arrow");
	else scrollRight.classList.remove("hide-arrow");

	createEmblem(album.emblem, DELIMITER[0] || undefined).forEach((node) =>
		emblemDiv.append(node)
	);

	heroDiv.classList.add("album-transition");
};

const createEmblem = (string, delimiter = "•") => {
	const spans = [];

	string = string.trim().replaceAll(" ", delimiter) + delimiter;
	const numChars = string.length;
	const degVal = 90 / (numChars / 4);

	string.split("").forEach((char, idx) => {
		const span = document.createElement("span");
		span.innerText = char;
		span.style.transform = `rotate(${180 - degVal * idx}deg)`;
		if (char === delimiter) span.style.color = albums[index]["accent-color"];
		spans.push(span);
	});

	return spans;
};

updateDisplay(index);

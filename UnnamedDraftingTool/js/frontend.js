backend = new Backend();
class Frontend {
	constructor() {
		this.request = {
			source: "default_data",
			team: "all",
			role: "all",
			search: "",
		};
		this.renderingData = {
			visibleChampions: [],
			pickedChampions: [],
			bannedChampions: [],
		};
		this.selectedChampion = "";
		this.picks = document.querySelectorAll(".champion-pick");
		this.bans = document.querySelectorAll(".champion-ban");
		this.picks.forEach((current) => {
			current.addEventListener("click", this.placeChampion);
			current.childNodes[1].dataset.champion = "";
		});
		this.bans.forEach((current) => {
			current.addEventListener("click", this.placeChampion);
			current.childNodes[1].dataset.champion = "";
		});

		this.championsContainer = document.querySelector(
			"#champions-container",
		);
		this.logos = document.querySelectorAll(".team-logo");
		this.logos.forEach((current) => {
			current.addEventListener("click", () => {
				this.request.team = current.id;
				this.render();
			});
		});

		this.roleIcons = document.querySelectorAll(".role-icon");
		this.roleIcons.forEach((current) => {
			current.addEventListener("click", () => {
				if (this.request.role == current.id) {
					this.request.role = "all";
				} else if (this.request.role != current.id)
					this.request.role = current.id;
				this.render();
			});
		});
		this.searchBar = document.querySelector(".search-bar");
		this.searchBar.addEventListener("input", () => {
			frontend.request.search = frontend.searchBar.value;
			frontend.render();
		});
		this.defaultDataSwitch = document.querySelector("#default_data");
		this.defaultDataSwitch.addEventListener("click", () => {
			frontend.request.source = "default_data";
			frontend.render();
		});
		this.userDataSwitch = document.querySelector("#user_data");
		this.userDataSwitch.addEventListener("click", this.showUserDataForm);
	}

	render() {
		this.renderingData.visibleChampions = backend.requestVisibleChampions(
			this.request,
		);
		this.requestPickedChampions();
		this.requestBannedChampions();
		this.renderVisibleChampions();
		this.renderPickedChampions();
		this.renderBannedChampions();
	}

	renderVisibleChampions() {
		while (this.championsContainer.hasChildNodes()) {
			this.championsContainer.removeChild(
				this.championsContainer.firstChild,
			);
		}
		for (let i = 0; i < this.renderingData.visibleChampions.length; i++) {
			const newChampion = this.renderingData.visibleChampions[i];
			const newNode = document.createElement("div");
			newNode.classList += "champion-container";
			const championIcon = document.createElement("img");
			championIcon.classList += "champion-icon";
			championIcon.src =
				"./img/champion_icons/tiles/" +
				capitalize(newChampion) +
				"_0.jpg";
			championIcon.alt = this.renderingData.visibleChampions[i];
			championIcon.dataset.champion = newChampion;
			if (
				this.renderingData.pickedChampions.includes(newChampion) ||
				this.renderingData.bannedChampions.includes(newChampion)
			) {
				championIcon.style.opacity = "0.4";
			}
			newNode.appendChild(championIcon);
			this.championsContainer.appendChild(newNode);
			championIcon.addEventListener("click", this.selectChampion);
		}
	}
	requestPickedChampions() {
		for (let i = 0; i < 10; i++) {
			let img = this.picks[i].childNodes[1];
			this.renderingData.pickedChampions[i] = img.dataset.champion;
		}
	}
	requestBannedChampions() {
		for (let i = 0; i < 10; i++) {
			let img = this.bans[i].childNodes[1];
			this.renderingData.bannedChampions[i] = img.dataset.champion;
		}
	}
	renderPickedChampions() {
		for (let i = 0; i < 10; i++) {
			let img = this.picks[i].childNodes[1];
			if (this.renderingData.pickedChampions[i] == "") {
				img.src = "./img/pick_icon.png";
				img.dataset.champion = "";
				continue;
			}
			img.src =
				"./img/champion_icons/centered/" +
				capitalize(this.renderingData.pickedChampions[i]) +
				"_0.jpg";
			img.dataset.champion = this.renderingData.pickedChampions[i];
		}
	}
	renderBannedChampions() {
		for (let i = 0; i < 10; i++) {
			let img = this.bans[i].childNodes[1];
			if (this.renderingData.bannedChampions[i] == "") {
				img.src = "./img/pick_icon.png";
				img.dataset.champion = "";
				continue;
			}
			img.src =
				"./img/champion_icons/tiles/" +
				capitalize(this.renderingData.bannedChampions[i]) +
				"_0.jpg";
			img.dataset.champion = this.renderingData.bannedChampions[i];
		}
	}
	//calling frontend. instead of this. is necessary due to how the "this"
	//keyword works in javascript
	selectChampion(event) {
		frontend.selectedChampion = event.target.dataset.champion;
		if (
			frontend.renderingData.pickedChampions.includes(
				frontend.selectedChampion,
			) ||
			frontend.renderingData.bannedChampions.includes(
				frontend.selectedChampion,
			)
		) {
			frontend.selectedChampion = "";
		}
	}
	placeChampion(event) {
		if (frontend.selectedChampion == "") {
			event.target.src = "./img/pick_icon.png";
		}
		event.target.dataset.champion = frontend.selectedChampion;
		frontend.selectedChampion = "";
		frontend.render();
	}
	showUserDataForm() {
		const form_container = document.querySelector(
			"#user_data_form_container",
		);
		if (form_container) form_container.classList.remove("hidden");
		else {
			frontend.createUserDataForm();
		}
	}
	createUserDataForm() {
		const container = document.querySelector("#data");
		const form_container = document.createElement("div");
		form_container.id = "user_data_form_container";
		const textarea = document.createElement("textarea");
		textarea.name = "user_data_input";
		textarea.cols = "80";
		textarea.rows = "10";
		const label = document.createElement("label");
		label.innerHTML =
			'Read the <a href="https://github.com/aCertainProgrammer/UnnamedDraftingTool?tab=readme-ov-file#data-specification">input data specification</a>';
		label.for = "user_data_input";
		const button_container = document.createElement("div");
		button_container.style.display = "flex";
		button_container.style.flexDirection = "row";
		const save = document.createElement("button");
		save.innerText = "Save and load";
		save.classList += "source-button";
		const hide = document.createElement("button");
		hide.innerText = "Hide";
		hide.classList += "source-button";
		button_container.appendChild(save);
		button_container.appendChild(hide);
		form_container.appendChild(label);
		form_container.appendChild(textarea);
		form_container.appendChild(button_container);
		container.appendChild(form_container);
		save.addEventListener("click", () => {
			saveData("user_data", textarea.value);
			frontend.request.source = "user_data";
			frontend.render();
		});
		hide.addEventListener("click", () => {
			form_container.classList += "hidden";
		});
	}
}

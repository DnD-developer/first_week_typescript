// styles
import styles from "./buttonWeatherSound.module.scss"

export default class ButtonWeatherSound {
	buttonWeatherSoundDomElement!: HTMLDivElement

	constructor(
		private wrapper: string,
		private icon: string,
		private background: string,
		private sound?: string
	) {}

	init() {
		this.createButtonWeatherSound()

		document.querySelector(this.wrapper)!.appendChild(this.buttonWeatherSoundDomElement)

		this.addEvents()
	}

	createButtonWeatherSound() {
		this.buttonWeatherSoundDomElement = document.createElement("div")
		this.buttonWeatherSoundDomElement.classList.add(styles["weather-sound-item"])

		const buttonWeatherSoundIconDomElement = document.createElement("img")
		buttonWeatherSoundIconDomElement.classList.add(styles["weather-sound-item_icon"])
		buttonWeatherSoundIconDomElement.src = this.icon

		this.buttonWeatherSoundDomElement.appendChild(buttonWeatherSoundIconDomElement)
		this.buttonWeatherSoundDomElement.style.backgroundImage = `url(${this.background})`
	}

	addEvents() {
		this.buttonWeatherSoundDomElement.addEventListener("click", () => this.changeBackground())
	}

	changeBackground() {
		document.body.style.backgroundImage = `url(${this.background})`
	}
}

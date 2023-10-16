// styles
import styles from "./buttonWeatherSound.module.scss"
// components
import AudioWeatherSound from "../audioWeatherSound/audioWeatherSound"
import RangeWeatherSound from "../rangeWeatherSound/rangeWeatherSound"
// globalIcon
import stopIcon from "../../../layout/assets/img/icons/pause.svg"

export default class ButtonWeatherSound {
	buttonWeatherSoundDomElement!: HTMLDivElement

	buttonWeatherSoundIconDomElement!: HTMLImageElement

	buttonWeatherSoundStopIconDomElement!: HTMLImageElement

	isSoundPlaying: boolean = false

	soundDomElement!: AudioWeatherSound

	constructor(
		private wrapper: string,
		private icon: string,
		private background: string,
		private sound: string,
		private rangeSoundWeather: RangeWeatherSound
	) {}

	init() {
		this.createButtonWeatherSound()
		this.createSound()

		document.querySelector(this.wrapper)!.appendChild(this.buttonWeatherSoundDomElement)

		this.addEvents()
	}

	createButtonWeatherSound() {
		this.buttonWeatherSoundDomElement = document.createElement("div")
		this.buttonWeatherSoundDomElement.classList.add(styles["weather-sound-item"])

		this.buttonWeatherSoundIconDomElement = document.createElement("img")
		this.buttonWeatherSoundIconDomElement.classList.add(styles["weather-sound-item_icon"])
		this.buttonWeatherSoundIconDomElement.src = this.icon

		this.buttonWeatherSoundStopIconDomElement = document.createElement("img")
		this.buttonWeatherSoundStopIconDomElement.classList.add(
			styles["weather-sound-item_icon"],
			styles["icon-hidden"]
		)
		this.buttonWeatherSoundStopIconDomElement.src = stopIcon

		this.buttonWeatherSoundDomElement.appendChild(this.buttonWeatherSoundIconDomElement)
		this.buttonWeatherSoundDomElement.appendChild(this.buttonWeatherSoundStopIconDomElement)

		this.buttonWeatherSoundDomElement.style.backgroundImage = `url(${this.background})`
	}

	addEvents() {
		this.buttonWeatherSoundDomElement.addEventListener("click", this.toggleSound.bind(this))
		this.soundDomElement.audioWeatherSoundDomElement.addEventListener(
			"play",
			this.changesWhenPlayingSound.bind(this)
		)
		this.soundDomElement.audioWeatherSoundDomElement.addEventListener(
			"pause",
			this.changesWhenStoppingSound.bind(this)
		)
	}

	changeBackground() {
		document.body.style.backgroundImage = `url(${this.background})`
	}

	createSound() {
		this.soundDomElement = new AudioWeatherSound(
			this.sound,
			this.buttonWeatherSoundDomElement,
			this.rangeSoundWeather
		)
		this.soundDomElement.init()
	}

	toggleSound() {
		if (!this.isSoundPlaying) {
			this.soundDomElement
				.playSound()
				.then(() => {})
				.catch(error => console.error(error))
		} else {
			this.soundDomElement.stopSound()
		}
	}

	changesWhenPlayingSound() {
		this.changeBackground()
		this.isSoundPlaying = true
		this.buttonWeatherSoundStopIconDomElement.classList.remove(styles["icon-hidden"])
		this.buttonWeatherSoundIconDomElement.classList.add(styles["icon-hidden"])
	}

	changesWhenStoppingSound() {
		this.isSoundPlaying = false
		this.buttonWeatherSoundStopIconDomElement.classList.add(styles["icon-hidden"])
		this.buttonWeatherSoundIconDomElement.classList.remove(styles["icon-hidden"])
	}
}

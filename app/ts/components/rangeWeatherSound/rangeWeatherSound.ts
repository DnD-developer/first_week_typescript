import styles from "./rangeWeatherSound.module.scss"

export default class RangeWeatherSound {
	rangeWeatherSoundDomElement!: HTMLInputElement

	constructor(private wrapper: string) {}

	init() {
		this.createRange()
		document.querySelector(this.wrapper)!.appendChild(this.rangeWeatherSoundDomElement)
	}

	createRange() {
		this.rangeWeatherSoundDomElement = document.createElement("input")
		this.rangeWeatherSoundDomElement.type = "range"
		this.rangeWeatherSoundDomElement.classList.add(styles["weather-sound-range"])
	}

	getSliderPosition(): string {
		return this.rangeWeatherSoundDomElement.value
	}
}

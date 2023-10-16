// components
import RangeWeatherSound from "../rangeWeatherSound/rangeWeatherSound"
// styles
import style from "./audioWeatherSound.module.scss"

export default class AudioWeatherSound {
	audioWeatherSoundDomElement!: HTMLAudioElement

	constructor(
		private sound: string,
		private wrapper: HTMLDivElement,
		private rangeSoundWeather: RangeWeatherSound
	) {}

	init() {
		this.createAudioWeatherSound()
		this.wrapper.appendChild(this.audioWeatherSoundDomElement)
		this.addEvents()
	}

	createAudioWeatherSound() {
		this.audioWeatherSoundDomElement = document.createElement("audio")
		this.audioWeatherSoundDomElement.classList.add(style["weather-sound-audio"])
		this.audioWeatherSoundDomElement.src = this.sound
		this.audioWeatherSoundDomElement.loop = true
		this.audioWeatherSoundDomElement.preload = "metadata"

		this.audioWeatherSoundDomElement.volume = +this.rangeSoundWeather.getSliderPosition() * 0.01
	}

	addEvents() {
		this.rangeSoundWeather.rangeWeatherSoundDomElement.addEventListener("change", () => {
			this.audioWeatherSoundDomElement.volume = +this.rangeSoundWeather.getSliderPosition() * 0.01
		})
	}

	async playSound() {
		await this.audioWeatherSoundDomElement.play()
		;[...document.querySelectorAll("audio")]
			.filter(ad => ad !== this.audioWeatherSoundDomElement)
			.forEach(ad => ad.pause())
	}

	stopSound() {
		this.audioWeatherSoundDomElement.pause()
	}
}

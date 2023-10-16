// components
import ButtonWeatherSound from "./components/buttonWeatherSound/buttonWeatherSound "
import RangeWeatherSound from "./components/rangeWeatherSound/rangeWeatherSound"
// icons
import cloudRainIcon from "../layout/assets/img/icons/cloud-rain.svg"
import cloudSnowIcon from "../layout/assets/img/icons/cloud-snow.svg"
import sunIcon from "../layout/assets/img/icons/sun.svg"
// bg
import cloudRainBg from "../layout/assets/img/bg/rainy-bg.jpg"
import cloudSnowBg from "../layout/assets/img/bg/winter-bg.jpg"
import sunBg from "../layout/assets/img/bg/summer-bg.jpg"
// sound
import sunSound from "../layout/assets/sounds/summer.mp3"
import snowSound from "../layout/assets/sounds/winter.mp3"
import rainSound from "../layout/assets/sounds/rain.mp3"

const rangeWeatherSound = new RangeWeatherSound(".range-weather-sounds")
rangeWeatherSound.init()

const sunButtonWeatherSound = new ButtonWeatherSound(
	".list-weather-sounds",
	sunIcon,
	sunBg,
	sunSound,
	rangeWeatherSound
)
const rainButtonWeatherSound = new ButtonWeatherSound(
	".list-weather-sounds",
	cloudRainIcon,
	cloudRainBg,
	rainSound,
	rangeWeatherSound
)
const snowButtonWeatherSound = new ButtonWeatherSound(
	".list-weather-sounds",
	cloudSnowIcon,
	cloudSnowBg,
	snowSound,
	rangeWeatherSound
)

sunButtonWeatherSound.init()
snowButtonWeatherSound.init()
rainButtonWeatherSound.init()

// components
import ButtonWeatherSound from "./components/buttonWeatherSound/buttonWeatherSound "
// icons
import cloudRainIcon from "../layout/assets/img/icons/cloud-rain.svg"
import cloudSnowIcon from "../layout/assets/img/icons/cloud-snow.svg"
import sunIcon from "../layout/assets/img/icons/sun.svg"
// bg
import cloudRainBg from "../layout/assets/img/bg/rainy-bg.jpg"
import cloudSnowBg from "../layout/assets/img/bg/winter-bg.jpg"
import sunBg from "../layout/assets/img/bg/summer-bg.jpg"

const rainButtonWeatherSound = new ButtonWeatherSound(".list-weather-sounds", cloudRainIcon, cloudRainBg)
const snowButtonWeatherSound = new ButtonWeatherSound(".list-weather-sounds", cloudSnowIcon, cloudSnowBg)
const sunButtonWeatherSound = new ButtonWeatherSound(".list-weather-sounds", sunIcon, sunBg)

sunButtonWeatherSound.init()
snowButtonWeatherSound.init()
rainButtonWeatherSound.init()
sunButtonWeatherSound.buttonWeatherSoundDomElement.click()

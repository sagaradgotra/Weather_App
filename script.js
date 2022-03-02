let weather = {
    apikey: "b0d8e1a2d31c2a92f411f10d6f3b764e",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey,

        ).then((response) => response.json())
            .then((data) => this.display(data));
    },


    display: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        //document.querySelector(".icon").src = "https://openweather.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "humidity:" + humidity + "%";
        document.querySelector(".wind").innerText = "wind speed:" + speed + "kmph";


    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
})


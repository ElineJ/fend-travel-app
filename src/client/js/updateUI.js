function updateUI(data) {
    // hide form
    const formElement = document.getElementById('travel-form');
    formElement.style.display = "none";
    console.log(data);

    // change text based on whether the trip is within 16 days
    let weatherText = "The current weather is:";
    if(data.isSoon) {
        weatherText = "The weather forecast then is:"
    }

    // Add travel data to box
    const box = document.getElementById('box');
    box.innerHTML = `
        <div class="results" id="results">
            <div class="results__image">
                <img src="${data.image_url}" alt="${data.city}">
            </div>
            <div class="results__text">
                <h2 class="results__header">My trip to <strong>${data.city}</strong></h2>
                <h2 class="results__header">Leaving on ${data.depart}</h2>
                <p class="results__countdown">Your trip is ${data.countdown} days away. You'll be in ${data.city} for ${data.duration} days.</p>
                <p class="results__weather">
                    <span class="results__weather-header">${weatherText}</span><br>
                    High of ${data.high_temp}&deg;C, low of ${data.low_temp}&deg;C<br>
                    ${data.forecast}
                </p>
                <!-- <button onclick='Client.refresh()'>Plan another trip!</button> -->
            </div>
        </div>
    `
}

function refresh() {
    // hide results, show form
    document.getElementById('results').style.display = "none";
    document.getElementById('travel-form').style.display = "block";
}

export { updateUI };
export { refresh };
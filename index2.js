function LatLng(lat, lng) {
    if (lat < -90 || lat > 90) throw new Error("wrong latitude")
    if (lng < -180 || lng > 180) throw new Error("wrong longitude")

    this.lat = lat
    this.lng = lng
}

function randomIntFromInterval(min, max) // min and max included
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var locations = []

for (var i = 0; i < 10000; i++) {
    locations.push(
        new LatLng(randomIntFromInterval(-90, 90), randomIntFromInterval(-180, 180))
        )
}

console.log(locations)

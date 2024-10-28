async function getCountryBoundingBox (name) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?country=${name}&format=json`)
        const data = await response.json()
        return data
    } catch (error) {
        console.warn(error)
    }
}

const box = await getCountryBoundingBox('romania')
console.log(box)
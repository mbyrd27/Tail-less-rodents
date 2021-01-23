let locations = []

export const getLocations = () => {
    return fetch('http://localhost:8088/locations')
        .then(resp => resp.json())
        .then(data => locations = data)
}

export const useLocations = () => locations.slice()
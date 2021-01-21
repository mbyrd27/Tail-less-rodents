let computers = []

export const getComputers = () => {
    return fetch('http://localhost:8088/computers')
        .then(resp => resp.json())
        .then(comps => computers = comps)
}

export const useComputers = () => computers.slice()
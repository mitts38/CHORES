let people = []

export const useFamilyMembers = () => people.slice()

export const getFamilyMembers = () => fetch("http://localhost:3000/familymembers")
    .then(res => res.json())
    .then(data => people = data)
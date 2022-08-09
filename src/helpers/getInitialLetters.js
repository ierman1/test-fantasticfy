export const getInitialLetters = (breedList) => {
    const letters = [];

    breedList.map(breed => {
        if (!letters.includes(breed.key[0]))
            letters.push(breed.key[0])
    })

    return letters;
}
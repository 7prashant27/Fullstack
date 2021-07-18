const getDots = num => new Array(num).fill(".").join("")

const getZeroes = num => new Array(num).fill("O").join(".")


const getPattern = (size, offset = 0) => {
    const out = []
    for (let i = 0; i < size - offset; i++) {
        out[i] = getDots(size - i) + getZeroes(i + 1) + getDots(size - i)
    }
    //console.log(out)
    return out
}

const makePryamid = size => getPattern(size).join("\n")

const makeInversePyramid = size => getPattern(size).reverse().join("\n")

const makeRhombus = size => [...getPattern(size), ...getPattern(size, 1).reverse()].join("\n")


const pyramid = input => {
    let [size, type] = input.split(" ")
    size = Number(size)
    console.log(size,type+"\n")
    switch (type) {
        case "pyramid":
            return makePryamid(size)
        case "inverse_pyramid":
            return makeInversePyramid(size)
        case "rhombus":
            return makeRhombus(size)
    }
}




["4 pyramid", "4 inverse_pyramid", "4 rhombus"].forEach(test => console.log(pyramid(test) + "\n"))
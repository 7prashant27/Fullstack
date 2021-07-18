function program(income, savings) {
    var rebate
    var income_tax

    if (income <= 500000) {
        rebate = 0.5 * savings
    }

    else if (income <= 1000000) {
        rebate = 0.3 * savings
    }

    else if (income > 1000000) {
        rebate = 0.1 * savings
        if (rebate > 50000) {
            rebate = 50000
        }
    }
    else { rebate = 0 }


    if (income <= 250000) {
        income_tax = 0
    }
    else if (income > 250000 && income <= 500000) {
        income_tax = 0.1 * (income - (250000 + rebate))
    }
    else if (income > 500000 && income <= 1000000) {
        income_tax = 0.2 * (income - (250000 + rebate))
        income_tax = income_tax - 25000
    }
    else {
        income_tax = 0.3 * (income - (250000 + rebate))
        income_tax = income_tax - 100000
    }

    if (income_tax < 0) { income_tax = 0 }
    return income_tax
}

module.exports = program
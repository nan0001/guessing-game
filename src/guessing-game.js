class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        console.log(this.min, this.max)
    }

    guess() {
        let guess_res = Math.round((this.max - this.min) / 2) + this.min
        console.log(guess_res)
        this.res = guess_res
        return this.res;
    }

    lower() {
        this.max = this.res;
        console.log(this.min, this.max)
        return this.max
    }

    greater() {
        this.min = this.res;
        console.log(this.min, this.max)
        return this.min
    }
}

module.exports = GuessingGame;

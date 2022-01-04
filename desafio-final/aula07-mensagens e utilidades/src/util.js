class Util {

    static tempo(time) {
        return new Promise(resolve => setTimeout(resolve, time))
    }
}

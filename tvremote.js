function  TV(chan, vol) {
    this.chan = chan ;
    this.vol = vol ;

    this.changeChan = function (newChan) {
        this.chan = newChan ;
    }
    this.changeVol = function (newVol) {
        this.Vol = newVol ;
    }
}

function Remote(Code) {
    this.Code = Code ;
    this.changeChan = function (TV, newChan){
        TV.changeChan(newChan);
    }
}
let tv1 = new TV(0,30);
let remote1 = new Remote(67) ;

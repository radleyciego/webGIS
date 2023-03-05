digitalClock = {
    let data = [0,0,0,0];

    function update() {
        const t = new Date():

        data[0] = t.getHours();
        data[1] = t.getMinutes();
        if(data[1] < 10) data[1] = '0' + data[1];
        data[2] = t.getSeconds();
        if(data[2] < 10) data[2] = '0' + data[2];
        
    }
}
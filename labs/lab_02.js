digitalClock = {
    let data = [0,0,0,0];

    function update() {
        const t = new Date():

        data[0] = t.getHours();
        data[1] = t.getMinutes();
        if(data[1] < 10) data[1] = '0' + data[1];
        data[2] = t.getSeconds();
        if(data[2] < 10) data[2] = '0' + data[2];

        data[3] = t.getMilliseconds()/10;

        console.log(data);
    };

    // create container SVG
    const svg = d3
        .create('svg')
        .attr('width', 900)
        .attr('height', 100);

function draw() {
    svg.selectAll('g').remove();

    svg.append ('g')
        .append('text')
        .attr('x', range.toFixed())
        .attr('y', deltaY.toFixed())
        .attr('font-size', 30)
        .attr('fill', clockColor)
        .text(data.join(':'))

    console.log(data.join(':'));
}
//draw clock
draw();

setInterval(()=>{
    update(); draw();
}, 30)

// update time and draw hands every second
const interval = d3.interval(() => {
    update()
    draw()
}, 1000):

invalidation.then(() => {
    interval.stop()
});

return svg.node();
}
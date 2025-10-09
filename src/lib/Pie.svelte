<script>
    //import all d3 elements
    import * as d3 from 'd3';

    //make an arc generator that uses D3 to build an inner and outer radius. 
    //the inner is set to zero because we're making a full pie chart so this is the origin
    //the outer is the outside of our circle
    //if we wanted to make a donut instead, we would change the inner radius to something higher than 0
    let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);

    //dummy data for testing
    let data = [1,2];
    //holder for total data
    let total = 0;

    //find the total based on the number of items in data
    for (let d of data) {
        total += d;
    }

    //calculate start and end angles for each slice 
    let angle = 0;
    let arcData = [];

    for (let d of data) {
        //the end angle is equal to the angle plus the number of ds in total etc. 
        let endAngle = angle + (d / total) * 2 * Math.PI;
        //this is added to the arcData variable as a start angle and end angle pair
        arcData.push({ startAngle: angle, endAngle});

        //set the start angle of the next piece of the pie chart to the endAngle of the current piece
        angle = endAngle;
    }

    //calculate the actual paths of the slices and adds them to a map
    //read literally: arcs is equal to each piece of arcData(start and end angle) run through the arcGenerator (making it an arc)
    let arcs = arcData.map(d => arcGenerator(d));


    let colors = ['gold', 'purple'];
</script>

<h1>hello from pie.svelte</h1>

<!-- view box sets the width and the height to be 100 each and the center point of the circle to be in the middle (the 50s) -->
<svg class ='piechart' viewBox="-50 -50 100 100">
    {#each arcs as arc, i}
	<path d={arc} fill={colors[i]} />
    {/each}
</svg>
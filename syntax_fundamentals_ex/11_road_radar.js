function solve(speed, area) {
    speedLimits = {
        city: 50,
        residential: 20,
        motorway: 130,
        interstate: 90,
    };

    const limit = speedLimits[area];
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
        return;
    }

    const diff = speed - limit;
    let status;

    if (diff <= 20) {
        status = 'speeding';
    } else if (diff <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    console.log(
        `The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`
    );
}

// solve(40, 'city');
// solve(21, 'residential');
// solve(120, 'interstate');
// solve(200, 'motorway');

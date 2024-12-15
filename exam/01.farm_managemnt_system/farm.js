function solve(input) {
    const n = input.shift();

    const farmersInfo = input.splice(0, n).reduce((acc, farmer) => {
        const [farmerName, area, tasks] = farmer.split(' ');
        acc[farmerName] = { area, tasks: tasks.split(',') };
        return acc;
    }, {});

    input.forEach((line) => {
        const commandList = line.split(' / ');
        const command = commandList.shift();
        const farmerName = commandList.shift();

        switch (command) {
            case 'Execute':
                const [area, task] = commandList;

                if (
                    farmersInfo[farmerName].area != area ||
                    !farmersInfo[farmerName].tasks.includes(task)
                ) {
                    console.log(
                        `${farmerName} cannot execute the task: ${task}.`
                    );
                } else {
                    console.log(
                        `${farmerName} has executed the task: ${task}!`
                    );
                }

                break;

            case 'Change Area':
                const [newArea] = commandList;

                farmersInfo[farmerName].area = newArea;
                console.log(
                    `${farmerName} has changed their work area to: ${newArea}`
                );

                break;

            case 'Learn Task':
                const [newTask] = commandList;

                if (farmersInfo[farmerName].tasks.includes(newTask)) {
                    console.log(
                        `${farmerName} already knows how to perform ${newTask}.`
                    );
                } else {
                    farmersInfo[farmerName].tasks.push(newTask);
                    console.log(
                        `${farmerName} has learned a new task: ${newTask}.`
                    );
                }

                break;
        }
    });

    Object.keys(farmersInfo).forEach((farmerName) => {
        const area = farmersInfo[farmerName].area;
        const tasks = farmersInfo[farmerName].tasks
            .sort((a, b) => a.localeCompare(b))
            .join(', ');

        console.log(`Farmer: ${farmerName}, Area: ${area}, Tasks: ${tasks}`);
    });
}

solve([
    '2',
    'John garden watering,weeding',
    'Mary barn feeding,cleaning',
    'Execute / John / garden / watering',
    'Execute / Mary / garden / feeding',
    'Learn Task / John / planting',
    'Execute / John / garden / planting',
    'Change Area / Mary / garden',
    'Execute / Mary / garden / cleaning',
    'End',
]);

console.log('\n///////////////////////////////////////////////\n');
console.log('\n///////////////////////////////////////////////\n');

solve([
    '3',
    'Alex apiary harvesting,honeycomb',
    'Emma barn milking,cleaning',
    'Chris garden planting,weeding',
    'Execute / Alex / apiary / harvesting',
    'Learn Task / Alex / beeswax',
    'Execute / Alex / apiary / beeswax',
    'Change Area / Emma / apiary',
    'Execute / Emma / apiary / milking',
    'Execute / Chris / garden / watering',
    'Learn Task / Chris / pruning',
    'Execute / Chris / garden / pruning',
    'End',
]);

console.log(Number(false));

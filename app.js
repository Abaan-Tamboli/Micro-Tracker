const micros = [];
const microList = document.getElementById("microList");
const barChart = document.getElementById("barChart").getContext("2d");
const donutChart = document.getElementById("donutChart").getContext("2d");
let microPoints = 0;

// Initialize the bar chart
const barChartInstance = new Chart(barChart, {
    type: "bar",
    data: {
        labels: [],
        datasets: [{
            label: 'Micro Points',
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                font: {
                    size: 12
                }
            }
        }
    }
});

// Initialize the donut chart
const donutChartInstance = new Chart(donutChart, {
    type: "doughnut",
    data: {
        labels: [],
        datasets: [{
            label: 'Micro Points',
            data: [],
            backgroundColor: [],
            hoverOffset: 4
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: {
                        size: 12
                    }
                }
            }
        }
    }
});

function addMicro() {
    const microInput = document.getElementById("Input");
    const micro = microInput.value.trim();

    if (micro !== "") {
        micros.push({ name: micro, done: 0 });
        microInput.value = "";
        displayMicros();
        updateCharts();
    }
}

function displayMicros() {
    microList.innerHTML = "";
    micros.forEach((micro) => {
        const li = document.createElement("li");
        li.textContent = `${micro.name} (${micro.done} times)`;
        const addButton = document.createElement("button");
        addButton.textContent = "Increase Points";
        addButton.addEventListener("click", () => increasePoints(micro));
        li.appendChild(addButton);
        microList.appendChild(li);
    });
}

function updateCharts() {
    const microNames = micros.map((micro) => micro.name);
    const microDoneCount = micros.map((micro) => micro.done);

    // Update bar chart
    barChartInstance.data.labels = microNames;
    barChartInstance.data.datasets[0].data = microDoneCount;
    barChartInstance.data.datasets[0].backgroundColor = micros.map(() => randomColor());
    barChartInstance.data.datasets[0].borderColor = micros.map(() => randomColor());

    // Update donut chart
    updateDonutChart();
    
    // Update bar chart
    barChartInstance.update();
}

function updateDonutChart() {
    const microNames = micros.map((micro) => micro.name);
    const microDoneCount = micros.map((micro) => micro.done);

    donutChartInstance.data.labels = microNames;
    donutChartInstance.data.datasets[0].data = microDoneCount;
    donutChartInstance.data.datasets[0].backgroundColor = micros.map(() => randomColor());

    donutChartInstance.update();
}

function increasePoints(micro) {
    micro.done++;
    microPoints++;
    displayMicros();
    updateCharts();
    // You can add additional logic here based on micro points
}

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

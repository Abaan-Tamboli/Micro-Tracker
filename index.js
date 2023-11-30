<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <title>Micro Tracker</title>
</head>
<body class="bg-dark text-light">
    <div id="app" class="container">
        <h1 class="mt-3 mb-3">Micro Tracker</h1>
        <div id="left-container" class="col-lg-6">
            <div class="form-group">
                <label for="Input">Add Micro:</label>
                <input type="text" id="Input" class="form-control">
                <button onclick="addMicro()" class="btn btn-primary mt-2">Add</button>
            </div>
            <div>
                <h2>My Micro's</h2>
                <ul id="microList" class="list-group"></ul>
            </div>
        </div>
        <div id="right-container" class="col-lg-6">
            <h2 class="mt-3">Results</h2>
            <div class="d-flex justify-content-between">
                <canvas id="donutChart" width="40%" height="40%"></canvas>
                <canvas id="barChart" width="40%" height="40%"></canvas>
            </div>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>

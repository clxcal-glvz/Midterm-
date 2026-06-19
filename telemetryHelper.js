// FIXED: Fixed multi-line backticks and getContext spelling
const generateTelemetryShell = function() {
    return `<!DOCTYPE html>
    <html>
    <head>
        <title>Network Telemetry System Hub</title>
        <style>
            body { background-color: #0b0f19; color: #39ff14; font-family: monospace; padding: 30px; }
        </style>
    </head>
    <body>
        <h2>METRICS CORE: ACTIVE TRACKING</h2>
        <h4>Operator: [YOUR FULL NAME] | ID: [STUDENT ID] | Section: [YOUR SECTION]</h4>
        
        <canvas id="telemetryCanvas" width="600" height="300" style="background-color: #010409; border: 2px dashed #39ff14;"></canvas>
        <script>
            const canvasElement = document.getElementById('telemetryCanvas');
            const drawCtx = canvasElement.getContext('2d');
    `;
};

module.exports = generateTelemetryShell;
// script.js
class DPSKSimulation {
    constructor() {
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.startButton = document.getElementById('startSimulation');
        this.downloadButton = document.getElementById('downloadReport');
        this.numBitsInput = document.getElementById('numBits');
        this.snrInput = document.getElementById('snr');
    }

    bindEvents() {
        this.startButton.addEventListener('click', () => this.runSimulation());
        this.downloadButton.addEventListener('click', () => this.generateReport());
    }

    generateRandomBits(n) {
        return Array.from({length: n}, () => Math.random() > 0.5 ? 1 : 0);
    }

    differentialEncode(bits) {
        let encoded = [bits[0]];
        for (let i = 1; i < bits.length; i++) {
            encoded[i] = encoded[i-1] ^ bits[i];
        }
        return encoded;
    }

    dpskModulate(encodedBits) {
        // Simplified DPSK modulation
        const samplesPerBit = 16;
        const carrier = 2 * Math.PI * 2; // 2 Hz carrier frequency
        let modulated = [];
        
        encodedBits.forEach(bit => {
            for (let i = 0; i < samplesPerBit; i++) {
                const t = i / samplesPerBit;
                modulated.push(
                    Math.cos(carrier * t + (bit ? Math.PI : 0))
                );
            }
        });
        
        return modulated;
    }

    plotWaveform(canvasId, data, options = {}) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({length: data.length}, (_, i) => i),
                datasets: [{
                    label: options.label || '',
                    data: data,
                    borderColor: options.color || '#3498db',
                    borderWidth: 2,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'linear',
                        display: true
                    },
                    y: {
                        display: true
                    }
                }
            }
        });
    }

    async runSimulation() {
        const numBits = parseInt(this.numBitsInput.value);
        const snr = parseFloat(this.snrInput.value);

        // Generate and plot random data
        const randomBits = this.generateRandomBits(numBits);
        this.plotWaveform('randomDataPlot', randomBits, {
            label: 'Random Binary Data',
            color: '#2ecc71'
        });

        // Differential encoding
        const encodedBits = this.differentialEncode(randomBits);
        
        // DPSK modulation
        const modulatedSignal = this.dpskModulate(encodedBits);

        // Update displays and plots for each stage
        document.getElementById('binaryData').textContent = 
            randomBits.join('');
    }

    generateReport() {
        // Implementation for PDF report generation
        alert('Generating simulation report...');
        // Would typically use a PDF generation library here
    }
}

// Initialize simulation when page loads
document.addEventListener('DOMContentLoaded', () => {
    new DPSKSimulation();
});

const binaryCtx = document.getElementById('binaryChart').getContext('2d');
const fskCtx = document.getElementById('fskChart').getContext('2d');
const demodCtx = document.getElementById('demodChart').getContext('2d');
const outputCtx = document.getElementById('outputChart').getContext('2d');

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    elements: { line: { tension: 0 } }
};

const binaryChart = new Chart(binaryCtx, {
    type: 'line',
    data: { datasets: [{ label: 'Binary Input', borderColor: 'blue', data: [], borderWidth: 1, pointRadius: 0 }] },
    options: { ...chartOptions, scales: { y: { min: -0.1, max: 1.1 } } }
});
const fskChart = new Chart(fskCtx, {
    type: 'line',
    data: { datasets: [{ label: 'FSK Signal', borderColor: 'green', data: [], borderWidth: 1, pointRadius: 0 }] },
    options: { ...chartOptions, scales: { y: { min: -1.5, max: 1.5 } } }
});
const demodChart = new Chart(demodCtx, {
    type: 'line',
    data: { datasets: [
        { label: 'f1 Path', borderColor: 'red', data: [], borderWidth: 1, pointRadius: 0 },
        { label: 'f0 Path', borderColor: 'purple', data: [], borderWidth: 1, pointRadius: 0 }
    ]},
    options: chartOptions
});
const outputChart = new Chart(outputCtx, {
    type: 'line',
    data: { datasets: [{ label: 'Recovered Binary', borderColor: 'orange', data: [], borderWidth: 1, pointRadius: 0 }] },
    options: { ...chartOptions, scales: { y: { min: -0.1, max: 1.1 } } }
});

document.getElementById('noiseLevel').oninput = function() {
    document.getElementById('noiseValue').textContent = this.value;
};

const binaryInput = document.getElementById('binaryInput');
const binaryInputError = document.getElementById('binaryInputError');

binaryInput.addEventListener('input', function() {
  if (/^[01]*$/.test(this.value)) {
    binaryInputError.style.display = 'none';
  } else {
    binaryInputError.style.display = 'block';
    binaryInputError.textContent = 'Invalid input! Only 0 and 1 are allowed.';
  }
});

function runSimulation() {
    const binaryData = document.getElementById('binaryInput').value;
    if (!/^[01]+$/.test(binaryData)) {
        binaryInputError.style.display = 'block';
        binaryInputError.textContent = 'Invalid input! Please enter only binary digits (0s and 1s).';
        binaryInput.focus();
        return;
    }
    binaryInputError.style.display = 'none';

    const bitDuration = parseInt(document.getElementById('bitDuration').value);
    const freqMark = parseInt(document.getElementById('freqMark').value);
    const freqSpace = parseInt(document.getElementById('freqSpace').value);
    const noiseLevel = parseFloat(document.getElementById('noiseLevel').value);
    const sampleRate = 10000;
    const samplesPerBit = Math.round(bitDuration * sampleRate / 1000);
    const totalSamples = binaryData.length * samplesPerBit;
    const time = Array.from({length: totalSamples}, (_, i) => i * 1000 / sampleRate);

    const binarySignal = [];
    for (let i = 0; i < binaryData.length; i++) {
        const bit = parseInt(binaryData[i]);
        binarySignal.push(...Array(samplesPerBit).fill(bit));
    }

    const fskSignal = [];
    for (let i = 0; i < binaryData.length; i++) {
        const freq = binaryData[i] === '1' ? freqMark : freqSpace;
        for (let j = 0; j < samplesPerBit; j++) {
            const t = (i * samplesPerBit + j) / sampleRate;
            let signal = Math.sin(2 * Math.PI * freq * t);
            signal += (Math.random() - 0.5) * noiseLevel;
            fskSignal.push(signal);
        }
    }

    const f1Path = [], f0Path = [];
    let f1Env = 0, f0Env = 0, alpha = 0.05;
    for (let i = 0; i < fskSignal.length; i++) {
        const t = i / sampleRate;
        const f1Comp = fskSignal[i] * Math.sin(2 * Math.PI * freqMark * t);
        const f0Comp = fskSignal[i] * Math.sin(2 * Math.PI * freqSpace * t);
        f1Env = alpha * Math.abs(f1Comp) + (1 - alpha) * f1Env;
        f0Env = alpha * Math.abs(f0Comp) + (1 - alpha) * f0Env;
        f1Path.push(f1Env);
        f0Path.push(f0Env);
    }

    const outputBinary = [];
    let errorCount = 0;
    for (let i = 0; i < binaryData.length; i++) {
        const startIdx = i * samplesPerBit;
        const endIdx = startIdx + samplesPerBit;
        const f1Avg = f1Path.slice(startIdx, endIdx).reduce((a,b) => a + b, 0) / samplesPerBit;
        const f0Avg = f0Path.slice(startIdx, endIdx).reduce((a,b) => a + b, 0) / samplesPerBit;
        const detectedBit = f1Avg > f0Avg ? 1 : 0;
        outputBinary.push(...Array(samplesPerBit).fill(detectedBit));
        if (detectedBit !== parseInt(binaryData[i])) errorCount++;
    }

    const ber = (errorCount / binaryData.length * 100).toFixed(2);
    document.getElementById('berDisplay').textContent = `Bit Error Rate: ${ber}%`;

    updateChart(binaryChart, time, binarySignal, 'Binary Input', 'blue');
    updateChart(fskChart, time, fskSignal, 'FSK Modulated Signal', 'green');
    updateMultiChart(demodChart, time, [f1Path, f0Path], ['f1 Path', 'f0 Path'], ['red', 'purple']);
    updateChart(outputChart, time, outputBinary, 'Recovered Binary', 'orange');

    const recovered = outputBinary.filter((_, i) => i % samplesPerBit === 0).join('');
    document.getElementById('reportContent').innerHTML = `
        <p><strong>Date & Time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Binary Input:</strong> ${binaryData}</p>
        <p><strong>Bit Duration:</strong> ${bitDuration} ms</p>
        <p><strong>Frequencies:</strong> f1 = ${freqMark} Hz, f0 = ${freqSpace} Hz</p>
        <p><strong>Noise Level:</strong> ${noiseLevel}</p>
        <p><strong>Bit Error Rate:</strong> ${ber}%</p>
        <p><strong>Recovered Output:</strong> ${recovered}</p>
    `;
}

function updateChart(chart, labels, data, label, color) {
    chart.data.labels = labels;
    chart.data.datasets = [{
        label: label, data: data, borderColor: color, borderWidth: 1, pointRadius: 0
    }];
    chart.update();
}

function updateMultiChart(chart, labels, dataArray, labelsArray, colorsArray) {
    chart.data.labels = labels;
    chart.data.datasets = dataArray.map((data, i) => ({
        label: labelsArray[i], data: data, borderColor: colorsArray[i], borderWidth: 1, pointRadius: 0
    }));
    chart.update();
}

function clearAll() {
    [binaryChart, fskChart, demodChart, outputChart].forEach(chart => {
        chart.data.labels = [];
        chart.data.datasets.forEach(ds => ds.data = []);
        chart.update();
    });
    document.getElementById('berDisplay').textContent = 'Bit Error Rate: 0%';
    document.getElementById('reportContent').innerHTML = '<p>No simulation run yet.</p>';
}

async function downloadReport() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    let y = 10;

    pdf.setFontSize(18);
    pdf.text("FSK Modulation & Demodulation Report", 10, y);
    y += 10;

    pdf.setFontSize(12);
    const reportText = document.getElementById("reportContent").innerText;
    const lines = pdf.splitTextToSize(reportText, 180);
    pdf.text(lines, 10, y);
    y += lines.length * 6 + 5;

    const addChartImage = async (canvasId, label) => {
        const canvas = document.getElementById(canvasId);
        const imgData = canvas.toDataURL("image/png");
        if (y > 250) { pdf.addPage(); y = 10; }
        pdf.setFontSize(12);
        pdf.text(label, 10, y);
        y += 5;
        pdf.addImage(imgData, "PNG", 10, y, 180, 40);
        y += 45;
    };

    await addChartImage("binaryChart", "Binary Input Signal");
    await addChartImage("fskChart", "FSK Modulated Signal");
    await addChartImage("demodChart", "Demodulated Paths");
    await addChartImage("outputChart", "Recovered Binary Signal");

    pdf.save("FSK_Report.pdf");
}

document.addEventListener('DOMContentLoaded', function() {
  // Close modals on outside click
  window.onclick = function(event) {
    if (event.target === document.getElementById('labInstructionsModal')) {
      document.getElementById('labInstructionsModal').style.display = 'none';
    }
    if (event.target === document.getElementById('howToModal')) {
      document.getElementById('howToModal').style.display = 'none';
    }
  };

  // Interactive highlight for SVG blocks
  const svg = document.getElementById('fskBlockDiagram');
  if(svg) {
    const highlight = svg.getElementById('highlightBox');
    const blocks = [
      {x:10, y:35, w:80, h:40}, // Binary Data
      {x:130, y:25, w:110, h:60}, // FSK Modulator
      {x:290, y:30, w:70, h:50}, // AWGN
      {x:420, y:25, w:110, h:60}, // FSK Demodulator
      {x:630, y:85, w:110, h:70}  // Output
    ];
    svg.querySelectorAll('g.block').forEach((g, i) => {
      g.addEventListener('mouseenter', () => {
        highlight.setAttribute('x', blocks[i].x-4);
        highlight.setAttribute('y', blocks[i].y-4);
        highlight.setAttribute('width', blocks[i].w+8);
        highlight.setAttribute('height', blocks[i].h+8);
        highlight.style.display = '';
      });
      g.addEventListener('mouseleave', () => {
        highlight.style.display = 'none';
      });
    });
  }
});


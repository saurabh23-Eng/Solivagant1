## Theory

### 1. Introduction to Digital Modulation
In digital communication, data is transmitted in binary form (0s and 1s). To transmit this data over analog channels like radio or telephone lines, it must be converted into a format suitable for such transmission. This process is called modulation.

One common type of digital modulation is **Frequency Shift Keying** (FSK).
### 2. What is Frequency Shift Keying (FSK)?
FSK is a digital modulation technique in which the frequency of a carrier signal is varied according to the digital input data.
- **Binary '1'** is represented by a **high-frequency** (f1)  carrier wave.
- **Binary '0'** is represented by a **low-frequency** (f0) carrier wave.
> This creates a waveform where the frequency of the signal "shifts" between two discrete values based on the binary data, hence the name **Frequency Shift Keying**.
> It is a type of continuous-phase frequency modulation, meaning the phase of the carrier signal is not interrupted.
### 3. Mathematical Representation
An FSK signal can be represented as:

s(t) = Acos(2πf₁t)  for binary **1**  
s(t) = Acos(2πf₀t)  for binary **0**

Where:

A = amplitude

f₁ and f₀ = carrier frequencies

t = time
### 4.FSK Modulation – Working Principle
✅ Step-by-Step:

1. **Input Signal**: A binary data stream (10110…) is given as input.

2. **Carrier Generator**: Two sine wave generators (or a single VCO – Voltage-Controlled Oscillator) produce f1 and f0.

3.**Switching Logic**:

When bit is 1 → output is frequency f1

When bit is 0 → output is frequency f0

4. **FSK Signal**: The output is a continuous waveform that switches between f0 and f1 based on the bit stream.
### 5. FSK Demodulation – Working Principle
Demodulation is the reverse process—extracting the binary data from the modulated signal.
✅ Step-by-Step:
1. **Receiving FSK Signal**:
The demodulator receives the signal containing frequency variations.
2. **Band-Pass Filters**:
The signal is passed through two filters:
One tuned to **f1**

One tuned to **f0**

Each filter only allows its specific frequency to pass.
3. **Envelope Detection**:
Each filtered output goes to an envelope detector to convert it into a voltage level.
4. **Decision Logic**:
A comparator compares the strength (amplitude) of the two signals:
Higher f1 → Output bit is **1**

Higher f0 → Output bit is **0**
5. **Recovered Digital Data**:
The output is a reconstructed binary sequence, ideally matching the input.
### 6. Block Diagram (Conceptual)

Input Binary Data
        |
   FSK Modulator 
        |
   FSK Signal (f0/f1)
        |
   FSK Demodulator
        |
Reconstructed Binary Output

![Untitled Diagram drawio](https://github.com/user-attachments/assets/b43c09c6-97f6-435c-bc31-b5f451cc28a9)



6. **Recovered Digital Signal**: The demodulated binary sequence is reconstructed.
  
  



### 4. Waveform Illustration (Include Diagram)

> 🔽 Include an image like `fsk-waveform.png` showing:
> - Input binary signal (e.g., 1011001)
> - Corresponding FSK modulated signal
> - Label the high frequency \( f_1 \) and low frequency \( f_2 \)

---

### 5. Demodulation of FSK

The **demodulator** detects the frequencies of the received signal and translates them back into digital bits.

**Two common demodulation techniques:**
- **Coherent detection**: Requires a reference signal for comparison.
- **Non-coherent detection**: Based on frequency measurement without needing phase information.

In simple non-coherent FSK demodulators:
- Bandpass filters are used to separate \( f_1 \) and \( f_2 \).
- Envelope detectors or zero-crossing detectors are used to detect the presence of a frequency.
- Decision logic interprets the detected frequency as 1 or 0.

---

### 6. Types of FSK

| Type | Description |
|------|-------------|
| **Binary FSK (BFSK)** | Uses two frequencies to represent binary 0 and 1 |
| **Multiple FSK (MFSK)** | Uses more than two frequencies to transmit more bits per symbol |
| **Continuous Phase FSK (CPFSK)** | Ensures phase continuity between symbols |

---

### 7. Advantages of FSK

- **High noise immunity**: Better performance in noisy environments compared to ASK.
- **Less susceptible to signal amplitude variation**.
- **Widely used in low-speed digital data transmission**.

---

### 8. Disadvantages of FSK

- **Requires larger bandwidth** than ASK and PSK.
- **More complex hardware** for modulation and demodulation.
- **Not suitable for high-speed data transmission** over narrow-band channels.

---

### 9. Applications of FSK

- Data transmission in modems
- Caller ID systems
- Radio frequency identification (RFID)
- Telemetry and remote control
- Low-frequency radio communication (e.g., RTTY – Radio Teletype)

---

### 10. Comparison Table

| Feature        | ASK                  | FSK                   | PSK                  |
|----------------|----------------------|------------------------|----------------------|
| Carrier Varies | Amplitude            | Frequency              | Phase                |
| Noise Immunity | Low                  | High                   | Moderate to High     |
| Complexity     | Low                  | Moderate               | High                 |
| Bandwidth      | Low                  | High                   | Moderate             |

---

### 11. Summary

FSK is a foundational digital modulation technique essential in communication systems. By varying the frequency of a carrier wave to represent binary data, it achieves reliable data transmission, especially in low-bandwidth and high-noise conditions.

Understanding FSK is crucial for students exploring digital communication and wireless systems, as it provides the basis for advanced modulation techniques.

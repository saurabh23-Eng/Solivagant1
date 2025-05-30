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

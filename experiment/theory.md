## Theory

### 1. Introduction to Digital Modulation
Digital modulation techniques convert digital data into an analog signal suitable for transmission over communication channels. Among various techniques, **Frequency Shift Keying (FSK)** is one of the most widely used digital modulation schemes.

### 2. What is Frequency Shift Keying (FSK)?
Frequency Shift Keying is a **form of frequency modulation** in which the frequency of the carrier wave is varied in accordance with the binary data (1s and 0s).

- **Binary '1'** is represented by a **high-frequency** carrier wave.
- **Binary '0'** is represented by a **low-frequency** carrier wave.

This creates a waveform where the frequency of the signal "shifts" between two discrete values based on the binary data, hence the name **Frequency Shift Keying**.

---

### 3. Mathematical Representation

Let the binary data signal be \( b(t) \), where:
- \( b(t) = 1 \) represents logic high,
- \( b(t) = 0 \) represents logic low.

Let:
- \( f_1 \) = Frequency for binary 1
- \( f_2 \) = Frequency for binary 0
- \( A \) = Amplitude of the signal

Then, the FSK signal \( s(t) \) can be represented as:

\[
s(t) = 
\begin{cases}
A \cos(2\pi f_1 t), & \text{if } b(t) = 1 \\
A \cos(2\pi f_2 t), & \text{if } b(t) = 0
\end{cases}
\]

You can also describe FSK as switching between two different sinusoidal signals depending on the binary input.

---

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

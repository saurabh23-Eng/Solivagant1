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

3. **Band-Pass Filters**:

The signal is passed through two filters:

One tuned to **f1**

One tuned to **f0**

Each filter only allows its specific frequency to pass.

3. **Envelope Detection**:
 
Each filtered output goes to an envelope detector to convert it into a voltage level.

5. **Decision Logic**:

A comparator compares the strength (amplitude) of the two signals:The **demodulator** detects the frequencies of the received signal and translates them back into digital bits.

7. **Recovered Digital Data**:
 
The output is a reconstructed binary sequence, ideally matching the input.

The **demodulator** detects the frequencies of the received signal and translates them back into digital bits.

**Two common demodulation techniques:**

- **Coherent detection**: Requires a reference signal for comparison.

- **Non-coherent detection**: Based on frequency measurement without needing phase information.

In simple non-coherent FSK demodulators:
- Bandpass filters are used to separate(f1) and (f0).
- Envelope detectors or zero-crossing detectors are used to detect the presence of a frequency.
- Decision logic interprets the detected frequency as 1 or 0.


### 6. Block Diagram 




### 7. Types of Frequency Shift Keying (FSK):

1. Binary FSK (BFSK):

Uses two frequencies:

One for binary ‘1’

One for binary ‘0’

Most basic form of FSK.

2. Multiple FSK (MFSK):

Uses more than two frequencies to represent multiple bits per symbol.

Increases data rate without increasing bandwidth proportionally.


3. Continuous-phase FSK (CPFSK):

Maintains phase continuity between symbol transitions.

Reduces spectral sidebands, making it more bandwidth-efficient.


4. Gaussian FSK (GFSK):

A type of CPFSK where the signal is passed through a Gaussian filter before modulation.

### 8. Advantage of Frequency Shift Keying (FSK) MOdulator and Demodulator.

1. **High Noise Immunity**

FSK is less affected by amplitude noise, making it reliable in noisy environments.


3. **Simple Implementation**

Easy to design and implement using basic filters and oscillators.


5. **Constant Amplitude Signal**
 
FSK signals have constant amplitude, reducing the risk of signal distortion in nonlinear channels.


7. **Efficient for Low-Speed Communication**

Well-suited for applications like telemetry, paging systems, and RFID.


9. **Low Error Rate**
 
Offers lower bit error rates (BER) compared to amplitude-based modulation like ASK.High Noise Immunity

FSK is less affected by amplitude noise, making it reliable in noisy environments.

### 8. Disadvantages of Frequency shift keying Modulation and Demodulation

1. **Larger Bandwidth Requirement **

FSK needs more bandwidth than other modulation techniques like ASK or PSK.

2.  **Complex Filter Design **

Accurate frequency filtering is required in the demodulator, increasing circuit complexity.

3.  **Lower Spectral Efficiency **

FSK is less efficient in utilizing bandwidth compared to PSK or QAM.

4.  **Difficult High-Speed Implementation **

At higher data rates, maintaining accurate frequency shifts and detection becomes challenging.

5.  **Susceptible to Doppler Shift **

In mobile or wireless environments, frequency shifts due to motion can affect accuracy.

### 9. Applications of FSK

1. Modems

2. RFID systems

3. Bluetooth (GFSK)

4. Paging systems

5. Telemetry systems

### 10. Summary

FSK (Frequency Shift Keying) is a digital modulation technique where binary ‘1’ and ‘0’ are transmitted using two different frequencies. The modulator converts digital data into a frequency-varying signal, while the demodulator detects these frequencies to recover the original data. It is simple, noise-resistant, and widely used in digital communication systems.

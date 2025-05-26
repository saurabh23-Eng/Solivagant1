## Procedure

###  Part A: FSK Modulation

Step 1: Launch the Simulation  
- Open the `index.html` file from the simulation folder in a modern web browser.  
- Ensure the user interface loads with binary input and waveform output sections.

Step 2: Enter Binary Data  
- Input a binary sequence (e.g., `1011001`) into the designated input box.  
- Press the **“Modulate”** button to begin the modulation process.

Step 3: Observe the Modulated Signal  
- The system will generate an FSK modulated waveform based on the input binary data.  
- Binary '1' will be represented using a high frequency (e.g., \( f_1 = 10 \text{ kHz} \))  
- Binary '0' will be represented using a lower frequency (e.g., \( f_2 = 5 \text{ kHz} \))  
- Observe the waveform and ensure that frequency shifts occur at correct bit intervals.

Step 4: Analyze the Signal  
- Identify transitions in frequency corresponding to changes in the binary sequence.  
- Verify the time duration for each bit (symbol period).  
- Optionally, download or screenshot the waveform for reporting.

---

###  Part B: FSK Demodulation

Step 5: Start Demodulation  
- Click on the **“Demodulate”** button in the simulation interface.  
- The system will attempt to recover the original binary data from the modulated waveform.

Step 6: Observe Demodulated Output  
- The demodulated binary data will be displayed.  
- Compare the original input sequence and demodulated output to check accuracy.

Step 7: Understand the Internal Working  
- View the internal process diagram or block diagram (if available) showing:
  - Bandpass filters separating \( f_1 \) and \( f_2 \)
  - Detectors (envelope or zero-crossing)
  - Decoder logic translating frequency to bits

---

###  Part C: Repeat and Verify

Step 8: Experiment with Different Inputs  
- Try multiple binary sequences of different lengths and patterns (e.g., `110011`, `000111000`).  
- Observe and analyze how the waveform changes.  
- Verify demodulated results for each sequence.

Step 9: Test Noise Robustness (Optional)  
- If the simulation includes a noise toggle, add noise to the signal.  
- Observe how FSK performs under noisy conditions.  
- Note any errors in demodulated output and record observations.

---

### Result and Conclusion

Step 10: Record Observations  
- Document:
  - Input binary data
  - Modulated waveform characteristics (frequencies, transitions)
  - Demodulated output
  - Any errors observed

Step 11: Conclude  
- Analyze the effectiveness of FSK for digital communication.  
- Discuss its noise resistance and bandwidth usage compared to other modulation techniques like ASK and PSK.

---

### Safety & Precautions (in Virtual Lab Context)

- Ensure your browser supports JavaScript and canvas rendering.
- Clear cache or reload simulation in case of glitches.
- Always double-check the binary input format (must be 0s and 1s only).

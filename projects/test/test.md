# OpenFlight

**OpenFlight** is a modular and customizable open-source flight controller firmware developed for Arduino-based microcontrollers.

## Goals

- **Modularity**: I wanted to build flight control software that I could use not only on drones and airplanes but also on rovers and boats. OpenFlight was based on an unmaintained single purpose flight controller. In open flight, you can easily reconfigure the system to control and stabalize any RC vehical.
- **Inexpensive**: I designed openflight to run on any Arduino-based microcontroller. This makes it super cheap and easy to integrate with an autopilot computer.

## Challenges

- **Hardware Compatibility**: Supporting many receiver, sensor, and actuator configurations.
- **Precision and Responsiveness**: Implementing accurate real-time flight control requires fast cycles while handling the limited resources of a microcontroller.

## Solutions

- Used preprocessor flags to toggle settings and sensor configurations at compile time. Even though the repository hsa pleanty of configurations, the compiled version running on the micro controller is striped down to only what is needed. This reduces cycle times and the latency from controller input to the vehical responding.
<!-- - Tuned IMU parameters and control loop behavior for smooth flight with adjustable gyro and accelerometer scaling. -->

## Tech Stack

- **PlatformIO** for development and build automation
- **Arduino Framework** for embedded compatibility
- **C++** for low-level performance and control

---

This project demonstrates my ability to tackle embedded systems, hardware-software integration, and real-time control logic—skills valuable in robotics, aerospace, and systems engineering.

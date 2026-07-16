---
title: Field Robot Systems
question: >-
  What does it take to move a robot from a simulation result to a machine
  that works outdoors, in public, on a schedule?
summary: >-
  Complete robot systems — perception, control, communication, and
  deployment — built and field-tested on real robots, from hexapods to
  air–ground inspection teams.
methods: [System Integration, ROS, Field Deployment]
pubTags: [Field Robotics, Inspection, Aerial Robots]
order: 5
icon: systems
---

Algorithms are only half of robotics. The other half is the unglamorous,
essential work of building systems that survive contact with the real world:
sensor drivers, state estimation, remote operation, safety layers, batteries,
and weather.

## Representative deployments

**EnRicH 2025 — nuclear power plant inspection.** With the RAICAM team, I
built a low-cost aerial + ground robot system in three weeks and fielded it
inside the Zwentendorf nuclear power plant at the European Robotics
Hackathon: SLAM in a GNSS-denied containment structure, mesh networking
through heavy shielding, and real-time radiation monitoring. Published at
IEEE SSRR 2025 with a full open-source release.

**Beijing 2022 Winter Olympics torch relay robots.** We modified hexapod
robots for skating and skiing, designed the control algorithms for both
sports, and built the environment-perception and remote-control stack. The
robots were tested outdoors at real skating rinks and ski resorts — an
end-to-end exercise in making learned and model-based controllers reliable in
freezing, unstructured conditions.

**Qingzhui hexapod research platform.** The capability-learning and
locomotion-control research in my other themes runs on Qingzhui, which our
group maintains as a complete experimental system: simulation environment,
controller stack, and hardware.

## Engineering philosophy

I write most systems in Python and C/C++ on ROS, simulate in MuJoCo and
CoppeliaSim, and treat the simulation-to-hardware pipeline as a product in
itself: if an experiment cannot be reproduced from a clean checkout, it is not
finished. This theme is less about individual papers and more about the
engineering standards that make the papers possible.

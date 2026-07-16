---
title: "EnRicH 2025: Air–Ground Robots for Nuclear Plant Inspection"
summary: >-
  A low-cost drone and ground vehicle team, built in three weeks and
  field-tested inside the Zwentendorf nuclear power plant at the European
  Robotics Hackathon.
date: 2025-06-01
dateRange: "2025"
status: completed
featured: true
order: 2
variant: split
themes: [Field Robot Systems]
platforms: [Custom quadrotor, Ackermann UGV, ROS 2]
methods: [SLAM, Radiation Mapping, Mesh Networking]
collaborators: [RAICAM doctoral network team]
media:
  hero: /images/projects/enrich_ugv.webp
  heroAlt: >-
    RAICAM team members preparing the sensor-equipped ground vehicle on a
    workbench inside the Zwentendorf facility during the EnRicH hackathon.
links:
  paper: https://doi.org/10.1109/SSRR68451.2025.11391258
---

## Overview

EnRicH — the European Robotics Hackathon — puts robots inside the
never-commissioned Zwentendorf nuclear power plant in Austria and asks teams
to inspect, map, and find radiation sources in a real, GNSS-denied
industrial environment. For the 2025 edition, our RAICAM team built a
complete heterogeneous system — an aerial drone plus a ground vehicle — in
roughly **three weeks**, prioritizing low cost, off-the-shelf components,
and open-source software.

## The system

- **Aerial**: a quadrotor with a 3D-printed airframe for fast iteration.
- **Ground**: an Ackermann-steering UGV carrying LiDAR, IMU, and radiation
  detection modules.
- **Autonomy**: ROS 2 throughout, with SLAM and a hybrid autonomy paradigm to
  cope with GNSS denial inside the containment structures.
- **Communication**: a modular mesh network with signal repeaters to punch
  through the plant's heavily shielded interior.

<figure>
  <img src="/images/publications/low_cost.webp" alt="System overview of the air-ground robotic solution: drone, ground vehicle, sensor suite, and communication architecture" loading="lazy" decoding="async" />
  <figcaption>System overview from the SSRR 2025 paper.</figcaption>
</figure>

## The mission

One of the hackathon missions was 3D-mapping the facility — a massive
structure over 100 m long and 120 m wide, with two levels separated by more
than 15 m in height. Field trials demonstrated robust localization, reliable
communication despite severe attenuation, and real-time radiation
monitoring.

<figure>
  <img src="/images/projects/enrich_team.webp" alt="The RAICAM team standing in front of the Zwentendorf nuclear power plant's chimney next to the EnRicH 2025 hackathon banner" loading="lazy" decoding="async" />
  <figcaption>The RAICAM team at the Zwentendorf plant during EnRicH 2025.</figcaption>
</figure>

## Outcome

The full system — mechanical designs, bills of materials, firmware, and the
ROS 2 software stack — was released open source, and the work was published
at IEEE SSRR 2025. For me, it was field robotics at its most honest: a
hard deadline, a real plant, and no second chances on integration.

## Publications

- **Low-Cost Rapid-Development Air-Ground Robotic Solution for Nuclear Power
  Plant Inspection.** Changda Tian et al. IEEE SSRR 2025, pp. 84–89.
  [DOI](https://doi.org/10.1109/SSRR68451.2025.11391258)

---
title: Hierarchical RL Locomotion for a Six-Legged Robot
summary: >-
  An early sim-to-real system: a reinforcement-learning planner on top of a
  trajectory-optimization gait controller for a hexapod.
date: 2020-04-01
dateRange: Sep 2019 – Apr 2020
status: completed
featured: false
order: 8
variant: compact
themes: [Learning-Based Locomotion Control]
platforms: [Hexapod robot, Simulation]
methods: [Reinforcement Learning, Trajectory Optimization, Sim-to-Real]
collaborators: [Yue Gao (SJTU)]
media:
  hero: /images/projects/hexpod2.webp
  heroAlt: The six-legged robot used for the sim-to-real locomotion experiments
links:
  paper: https://doi.org/10.1109/CYBER46603.2019.9066720
---

## Overview

My first legged-robot system, built during my undergraduate years at SJTU: a
two-level locomotion controller for a six-legged robot that separates *where
to go* from *how to step*.

## System

- A **top-level controller** based on reinforcement learning performs path
  planning.
- A **low-level controller** based on trajectory optimization plans gaits and
  foot positions.
- Training happens entirely in simulation; the trained policy then drives the
  physical hexapod — an early, hands-on lesson in the sim-to-real gap.

## Legacy

The layered structure of this project — learning on top, optimization below —
became the template for my later work on capability-aware locomotion, where
the interface between the layers is itself a learned model.

## Publications

- **Sim-to-Real: Designing Locomotion Controller for Six-Legged Robot.**
  Chenyu Yang, Yue Gao, Changda Tian, QingShan Yao. IEEE CYBER 2019,
  pp. 746–751. [DOI](https://doi.org/10.1109/CYBER46603.2019.9066720)

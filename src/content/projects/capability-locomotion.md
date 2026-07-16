---
title: Capability-Aware Locomotion for Hexapod Robots
summary: >-
  A hierarchical learning system that teaches the Qingzhui hexapod what it can
  traverse — and plans long-range paths it can actually execute.
date: 2022-12-01
dateRange: 2020 – 2023
status: completed
featured: true
order: 4
variant: landscape
themes: [Capability-Aware Planning, Learning-Based Locomotion Control]
platforms: [Qingzhui hexapod, CoppeliaSim]
methods: [Reinforcement Learning, Capability Abstraction, Path Planning]
collaborators: [Yue Gao (SJTU)]
media:
  hero: /images/projects/qz_cap.webp
  heroAlt: >-
    Layered learning framework of the capability system: terrain encoding,
    low-level capability maximizing, high-level capability abstraction, and
    capability-based global path planning.
links:
  paper: /files/capplanner.pdf
---

## Overview

A legged robot's ability to cross terrain depends on its structure, its
topology, and its locomotion controller. Existing planners ignore this: they
produce paths without asking whether the robot behind them can execute the
motion. This project makes the robot's **traverse capability** — its terrain-
and controller-dependent success rate — a learned, queryable model at the
heart of both control and planning.

## Research problem

Two coupled questions drive the work:

1. Given the current terrain, which control strategy and body topology
   *maximize* the robot's chance of getting through?
2. Given a learned picture of that capability, how should a global planner
   choose long-range paths?

## System

The system has three learned components on top of a classical control stack:

- **Capability maximizing** — a reinforcement-learning agent picks the best
  motion-control strategy and topology for the current terrain and foothold
  state. The chosen controller generates torso and feet trajectories, executed
  through inverse kinematics and joint PD control.
- **Capability abstraction** — a supervised network predicts traverse
  capability from encoded terrain maps and foothold states, trained on large
  numbers of simulated locomotion trials produced by the low-level layer.
- **Capability-based path planning** — classic planners are augmented with the
  capability model so that global guidance paths conform to what the robot can
  do.

The first version of this pipeline, **CapPlanner**, was published at ROBIO
2022 and was a finalist for the Best Paper in Biomimetics award. The extended
system adds capability maximizing and was published at IEEE RCAR 2024.

![CapPlanner two-layer framework: the top-level controller learns the traverse ability of the bottom-level-controller-plus-robot system and issues commands that conform to it.](/images/projects/capplanner_framework.webp)

## Results

We trained the framework in simulation and ran long-range locomotion
experiments both in simulation and on the physical Qingzhui hexapod. Across
terrains of varying complexity, capability-aware planning substantially
improved global locomotion success compared to capability-blind baselines —
the robot chooses routes it can survive, and switches topology when the
terrain demands it.

<figure>
  <img src="/images/projects/hexpod1.webp" alt="Animated clip of the hexapod robot walking" loading="lazy" decoding="async" />
  <figcaption>Qingzhui traversing terrain with the learned locomotion stack.</figcaption>
</figure>

## Publications

- **CapPlanner: Adaptable to Various Topology and Locomotion Capability for
  Hexapod Robots.** Changda Tian, Yue Gao. IEEE ROBIO 2022, pp. 519–524 —
  *Best Paper in Biomimetics finalist*.
  [DOI](https://doi.org/10.1109/ROBIO55434.2022.10011967)
- **Learning Capability to Enhance Locomotion Control and Planning for Legged
  Robots.** Yue Gao, Changda Tian, Yang Zhang. IEEE RCAR 2024, pp. 25–30.
  [DOI](https://doi.org/10.1109/RCAR61438.2024.10671189)

---
title: Adversarial Motion Balancing for Legged Robots
summary: >-
  Stance and swing legs as two adversarially-trained agents — whole-body
  control for tracking, reinforcement learning for balance.
date: 2023-06-01
dateRange: 2021 – 2023
status: completed
featured: true
order: 6
variant: compact
themes: [Learning-Based Locomotion Control]
platforms: [Legged robot simulation]
methods: [Whole-Body Control, Reinforcement Learning, Adversarial Training]
collaborators: [Yue Gao (SJTU)]
media:
  hero: /images/projects/adversial.webp
  heroAlt: >-
    System framework separating balance control into stance-leg and swing-leg
    agents trained adversarially.
links: {}
---

## Overview

Balance control for legged robots usually treats the whole body as one control
problem. This project splits it in two: **stance legs** and **swing legs**
become separate agents with different jobs and different tools — and they are
trained *against* each other.

## Core idea

- The **stance legs** are controlled with a whole-body control (WBC) method
  and are responsible for generating the accelerations that track the target
  velocity.
- The **swing legs** are controlled with a reinforcement-learning policy and
  are responsible for keeping the robot balanced.
- **Adversarial training** couples the two: each agent learns in the presence
  of the other's evolving behavior, which pushes the pair toward controllers
  that track desired velocities quickly while staying stable.

## Why it matters

The decomposition assigns the well-modeled part of the problem (force
distribution through stance contacts) to model-based control, and the
hard-to-model part (dynamic balance through leg swing) to learning. The
adversarial coupling means neither agent overfits to a frozen partner — a
recurring failure mode when model-based and learned components are trained
separately and only composed at deployment time.

---
title: Ball-Balancing Locomotion on a Quadruped
summary: >-
  A Unitree Go2 walks while keeping a free-rolling ball balanced on a plate
  mounted on its back — learned in simulation, transferred to the real robot.
date: 2026-07-01
dateRange: 2025 – 2026
status: completed
featured: true
order: 3
variant: split
themes: [Learning-Based Locomotion Control]
platforms: [Unitree Go2]
methods: [Reinforcement Learning, Sim-to-Real Transfer, Domain Randomization]
collaborators: [Hamidreza Raei (IIT), Arash Ajoudani (IIT), Panos Trahanias (FORTH)]
media:
  hero: /images/projects/ball_balancing_card.webp
  heroAlt: >-
    A Unitree Go2 quadruped balancing a small blue ball on a flat plate
    mounted on its back.
  video: /files/ball_balancing.mp4
  videoPoster: /images/projects/ball_balancing_poster.webp
links:
  paper: https://aim2026.com/index.php
  video: /files/ball_balancing.mp4
---

## Overview

Carrying a payload is easy; carrying an **unstable** payload is a control
problem. In this project a quadruped robot walks while keeping a
free-rolling ball balanced on a flat plate mounted on its back — a task that
couples base motion, body attitude, and the ball's dynamics at every step.

## Approach

The controller is trained with reinforcement learning entirely in
simulation, where the robot experiences thousands of randomized variations
of the task, and is then transferred to a real **Unitree Go2** — the
sim-to-real recipe applied to a dynamics problem where the "payload" fights
back. The task is a sharp benchmark for whole-body steadiness: any abrupt
attitude change, foot slip, or jerky velocity tracking immediately shows up
as ball motion.

## Demo

The video below shows the real robot balancing the ball.

## Publications

- **Sim-to-Real Reinforcement Learning for Ball-Balancing Locomotion on
  Quadruped Robots.** Changda Tian, Hamidreza Raei, Arash Ajoudani, Panos
  Trahanias. IEEE/ASME AIM 2026, Genova.

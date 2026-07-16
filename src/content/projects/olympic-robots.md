---
title: Skating & Skiing Robots for the Beijing 2022 Winter Olympics
summary: >-
  Hexapod robots modified for skating and skiing, field-tested at real winter
  resorts, and built for the Olympic torch relay.
date: 2022-02-01
dateRange: Nov 2020 – Feb 2022
status: completed
featured: false
order: 7
variant: split
themes: [Field Robot Systems]
platforms: [Modified hexapod robots]
methods: [Locomotion Control, Environment Perception, Remote Operation]
collaborators: [Feng Gao (SJTU Mechanical Engineering)]
media:
  hero: /images/projects/ski.webp
  heroAlt: The modified hexapod robot skiing on snow with ski attachments
links: {}
---

## Overview

For the Beijing 2022 Winter Olympic torch relay, we converted hexapod walking
robots into machines that **skate and ski**. This was a complete-system
project: mechanism modification, control algorithm design, perception, and
remote operation, all validated outdoors in real winter conditions.

## What we built

- **Mechanism**: modified hexapod platforms for skating and for skiing —
  two very different contact regimes, both far outside normal walking
  assumptions.
- **Control**: skating and skiing locomotion controllers, where propulsion
  comes from blade/edge interaction rather than discrete footholds.
- **Perception and teleoperation**: an environment-perception and
  remote-control framework so operators could supervise the robots safely on
  ice and snow.

## Field deployment

The robots were tested in real skating rinks and ski resorts — freezing
temperatures, glare, uneven snow, and spectators. Very few learned or
model-based controllers survive that environment unchanged; the engineering
lessons from these deployments shaped how I think about
[robot systems](/research/robot-systems/) research.

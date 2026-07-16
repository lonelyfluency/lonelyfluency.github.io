---
title: "Modbot: Reconfigurable Legged Robot Modules"
summary: >-
  An 8-DoF biped module that walks alone or links into a quadruped — built to
  measure what modularity really costs in reliability, control, and energy.
date: 2026-06-01
dateRange: 2026 – present
status: active
featured: true
order: 1
variant: compact
themes: [Modular Legged Robots]
platforms: [Modbot (custom biped module), MuJoCo]
methods: [Context-Conditioned RL, Domain Randomization, Cost-of-Transport Benchmarking]
collaborators: [Panos Trahanias (FORTH)]
# No design imagery on purpose: the hardware design is unpublished.
media: {}
links: {}
---

## Overview

Modbot is my current research platform at FORTH: a compact **8-DoF biped
locomotion module** that is self-sufficient on its own and can link with a
partner module into a quadruped. The project's goal is not another universal
modular platform — it is the measurement the field has skipped: treating
modularity as *generality purchased at a cost*, and quantifying that cost.

## Research problem

Every degree of modular freedom is taxed three times: mechanically (each
interface is a new failure point), computationally (each configuration axis
is another dimension the controller must cover), and energetically (unused
optionality is permanent mass and watts). These three currencies are almost
never put on one ledger, and the decisive benchmark — a linked-biped
quadruped raced head-to-head against a monolithic equivalent — does not exist
in the published literature. Modbot is built to run that race.

## System

- **Hardware model**: an 8-DoF biped with hip, thigh, and calf links per leg,
  designed in CAD and exported to URDF/MJCF for large-scale simulation.
- **Control**: configuration-conditioned reinforcement-learning policies
  trained in GPU simulation across the module family — single modules, foot
  and payload variants, and linked-quadruped configurations.
- **Evaluation**: a common ledger of velocity tracking, disturbance
  rejection, and cost of transport across the configuration ladder — the
  *generality–cost frontier*.

## Context

The project sits inside the [RAICAM doctoral network](http://raicam.eu/)
(Robotics and AI for Critical Asset Monitoring), where mobile robots inspect
and maintain critical infrastructure — a mission profile in which one
adaptable platform competing against several purpose-built ones is a real
procurement question, not a thought experiment.

## Status

Active. The module family is modeled and training in simulation; a
manuscript on the generality–cost frontier and the biped-linkage benchmark is
in preparation (2026).

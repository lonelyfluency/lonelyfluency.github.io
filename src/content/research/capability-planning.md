---
title: Capability-Aware Planning
question: >-
  What can this robot actually traverse — and how should a planner use that
  knowledge?
summary: >-
  Learning a robot's traverse capability and using it to plan long-range
  paths the robot can actually execute.
methods: [Capability Learning, Path Planning, Terrain Understanding]
pubTags: [Planning]
order: 3
icon: planning
---

A path planner that ignores what its robot can physically do produces plans
that fail at execution time. A quadrupled step height, a topology change from
six legs to four, a different low-level controller — each changes which
terrains are traversable. I formalize this as the robot's **traverse
capability**: the probability that a robot, with its current morphology and
controller, successfully crosses a given piece of terrain.

## Approach

My work turns capability into a first-class, *learned* quantity with three
components:

1. **Capability maximizing** — reinforcement learning selects the control
   strategy and body topology that maximize traverse capability for the
   terrain at hand.
2. **Capability abstraction** — a supervised network predicts the robot's
   capability from terrain and foothold state, trained on large numbers of
   simulated locomotion trials.
3. **Capability-based planning** — classic path planners are augmented with
   the learned capability model, so long-range guidance paths conform to what
   the robot can execute.

## Evidence

The CapPlanner system (ROBIO 2022, Best Paper in Biomimetics finalist) and its
journal extension demonstrate the full pipeline on the Qingzhui hexapod:
long-range locomotion experiments in simulation and the real world show large
improvements in global locomotion success rate compared to capability-blind
planning.

## Where this is going

Capability models are a natural interface between perception, control, and
planning — a compact summary of "what my body can do here." I want to extend
them to dynamic skills, degraded hardware (missing legs, weak motors), and as
priors for exploration in new environments.

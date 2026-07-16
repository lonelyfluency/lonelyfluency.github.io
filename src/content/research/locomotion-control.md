---
title: Learning-Based Locomotion Control
question: >-
  How can legged robots learn control policies that are fast, stable, and
  robust enough to run on real hardware?
summary: >-
  Reinforcement learning and model-based control combined into layered
  controllers for multi-legged robots.
methods: [Reinforcement Learning, Whole-Body Control, Adversarial Training]
pubTags: [Legged Robots]
order: 2
icon: locomotion
---

Legged robots promise mobility where wheels fail — rubble, stairs, ice, soft
ground. Delivering on that promise requires controllers that handle contact-rich,
underactuated dynamics in real time. Pure model-based control is precise but
brittle outside its assumptions; pure learning is flexible but hard to certify
on hardware. My work sits deliberately at the interface of the two.

## Approach

I build **layered controllers** that assign each layer the tool it is best
suited for:

- **Model-based layers** (whole-body control, trajectory optimization) handle
  the well-understood physics: tracking body accelerations, distributing
  contact forces, respecting joint limits.
- **Learned layers** (PPO-style policy optimization, adversarial training)
  handle what is hard to model: terrain uncertainty, gait selection, recovery
  behaviors.

A representative example is my adversarial balancing work, which splits the
control problem between two agents — stance legs driven by whole-body control
to track velocity commands, and swing legs driven by a reinforcement-learning
policy to keep the robot balanced. The two agents are trained adversarially,
which produces faster and more stable velocity tracking than either method
alone.

## Representative systems

- **Qingzhui**, an electrically-actuated hexapod, is the primary hardware
  platform for locomotion experiments.
- Skating and skiing variants of the hexapod platform were deployed outdoors
  at real winter-sport venues for the Beijing 2022 Winter Olympics torch relay.

## Open challenges

Sim-to-real transfer for contact-rich skills remains the central bottleneck.
I am interested in controllers that quantify their own reliability — knowing
*when* a learned gait will fail is as valuable as the gait itself, and it links
this theme directly to my work on [capability-aware
planning](/research/capability-planning/).

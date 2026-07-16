---
title: Modular Legged Robots
question: >-
  When does a reconfigurable legged robot beat a purpose-built one — and what
  does that flexibility actually cost?
summary: >-
  Designing reconfigurable leg modules and the learned controllers that let
  one robot family walk in many bodies.
methods: [Reconfigurable Design, Context-Conditioned RL, Cost-of-Transport Analysis]
pubTags: []
order: 1
icon: systems
---

Modularity is usually sold as a free virtue: swap a payload, change a foot,
link two bipeds into a quadruped. My current research — the core of my PhD at
FORTH — treats it instead as **generality purchased at a cost**, and asks the
question the field has debated for thirty years without measuring: what is
that cost, in concrete engineering units?

## Approach

The work is built around **Modbot**, a compact 8-DoF biped module designed to
operate alone or linked with a partner into a quadruped:

- **Design**: the module family is a controlled ladder of configurations —
  feet, payloads, and linked bodies — so that each added degree of modular
  freedom can be measured, not argued about.
- **Control**: configuration-conditioned reinforcement-learning policies are
  trained at scale in GPU simulation. A single conditioned controller serves
  the whole family; a proprioceptive student can even infer the current
  configuration without being told.
- **Measurement**: every configuration is scored on the same ledger —
  reliability, control performance, and energy (cost of transport) — to map
  the *generality–cost frontier*: which modular axes pay for themselves, and
  which are dead weight.

## Why it matters

Legged locomotion learning is now mature; what the field lacks is an honest
account of whether reconfigurable machines deliver more useful field-hours
than purpose-built ones. Within the [RAICAM network](http://raicam.eu/) —
mobile robots for inspection and maintenance of critical infrastructure —
that question is practical, not aesthetic: one adaptable platform versus five
specialized ones is a procurement decision.

## Status

Modbot is designed, modeled, and training in simulation; a manuscript on the
generality–cost frontier and the biped-linkage benchmark is in preparation
(2026). This theme also connects back to my earlier hexapod work, where
[topology switching](/projects/capability-locomotion/) was already part of
the capability model.

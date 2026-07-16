---
title: Learning from Human Motion
question: >-
  Can robots acquire task-oriented manipulation skills by imitating the
  style — not just the goal — of human motion?
summary: >-
  Adversarial motion priors that transfer the style of human tool use to
  robot arms.
methods: [Adversarial Motion Priors, Imitation Learning, Sim-to-Real]
pubTags: [Manipulation, Learning from Humans]
order: 4
icon: manipulation
---

Robots that share space with people should move in ways people can read and
predict. Standard reinforcement learning optimizes task success and produces
motions that are effective but alien. Human demonstrations carry a second
signal — *style* — that is worth learning in its own right.

## Approach

In the HMAMP project (Human-style Manipulation with Adversarial Motion
Priors), we extract arm and tool keypoints from human manipulation videos,
align them to the robot's kinematics, and train a discriminator to tell
policy-generated motion apart from human motion. The discriminator's score
becomes a style reward added to the task reward, so the policy learns to
*succeed at the task while moving like a person*.

## Evidence

We evaluated on hammering, nail clawing, and ball throwing-catching. The
learned policies outperform state-of-the-art baselines on benchmark tasks and
transfer to a real Kinova Gen3 arm, which hammers nails with recognizably
human-like strikes.

## Where this is going

Motion priors are a bridge between video-scale human data and robot skills. I
am interested in extending them from single-arm tool use to whole-body skills
for legged robots — where my locomotion and manipulation research meet.

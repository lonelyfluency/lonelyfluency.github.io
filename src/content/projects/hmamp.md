---
title: "HMAMP: Manipulate as Human"
summary: >-
  Task-oriented manipulation skills learned from human motion with adversarial
  motion priors, deployed on a real Kinova Gen3 arm.
date: 2023-09-01
dateRange: Mar 2023 – Sep 2023
status: completed
featured: true
order: 5
variant: split
themes: [Learning from Human Motion]
platforms: [Kinova Gen3, Simulation]
methods: [Adversarial Motion Priors, Reinforcement Learning, Keypoint Alignment]
collaborators: [Ziqi Ma (SJTU), Yue Gao (SJTU)]
media:
  hero: /images/projects/amp_arm_frame.webp
  heroAlt: >-
    HMAMP architecture: human video keypoints are aligned to the robot arm,
    and an AMP discriminator provides a style reward combined with the task
    reward for reinforcement learning.
  video: /files/ziqi_video.mp4
  videoPoster: /images/projects/ziqi_video_front.webp
links:
  paper: https://doi.org/10.1017/S0263574725001444
  video: /files/ziqi_video.mp4
---

## Overview

Robots that work alongside people should manipulate tools the way people do —
not only reaching the goal, but moving with recognizably human style. HMAMP
(Human-style Manipulation with Adversarial Motion Priors) learns
task-oriented manipulation skills whose *style* comes from human video and
whose *competence* comes from reinforcement learning.

## Core idea

From human manipulation video clips we extract keypoints of the arm and the
tool, then align them to the robot arm's kinematics in simulation. An **AMP
discriminator** is trained to distinguish real human motion sequences from
policy-generated ones; its output becomes a style reward. The policy is
trained with the sum of the style reward and the task reward, so it must
accomplish the task *and* fool the discriminator with human-like motion.

## Experiments

We evaluated HMAMP on tasks where style and dynamics interact strongly:

- hammering a nail;
- clawing a nail out;
- ball throwing and catching.

The learned policies outperform state-of-the-art baselines on benchmark
tasks and generalize to novel objects.

![Real robot experiment: human knocking motion clips used as priors (top), the policy in simulation, and the deployed Kinova Gen3 hammering a nail (bottom rows).](/images/projects/amp_arm_exp.webp)

## Real-world deployment

The policy transfers to a physical **Kinova Gen3** arm, which completes the
hammering task with the strike trajectory we designed for. The video below
shows the human priors, the simulated policy, and the real arm side by side.

## Publications

- **Manipulate as Human: Learning Task-oriented Manipulation Skills by
  Adversarial Motion Priors.** Ziqi Ma, Changda Tian, Yue Gao. *Robotica*,
  43(6):2320–2332, 2025.
  [DOI](https://doi.org/10.1017/S0263574725001444)

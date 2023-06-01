---
title: "Adversarial-based Algorithm for Motion Balancing Control of Legged Robots"
collection: research
type: "Legged robot control"
permalink: /research/adversial
venue: "Shanghai Jiao Tong University"
date: 2021.5-Now
---

Separate legged robot balance control into two separate agents, stance and swing legs.
Stance legs controlled with WBC method are responsible for generating acceleration to track target velocity. While swing legs controlled with RL method are responsible for balance the robot.

Use adversarial training for stance and swing legs to control the legged robot track the desired velocity fast and stable.

### System Framework

![](../images/adversial.PNG)
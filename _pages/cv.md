---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<h1 style="text-align:center">Changda Tian</h1>
<!-- th rowspan="5"><img src="/images/yangcy-300x300.png" width="180" height="180" /></th -->
* **Birth of Date: 11/19/1997**
* **Email: tianchangda97@gmail.com**
* **Cell: +86 18916906856**
* **Address： Shanghai Jiao Tong University No.800 Dongchuan Road, Shanghai 200240, China.**


# AREAS OF INTERESTS

- **Robotics**, **Reinforcement Learning**


# EDUCATION


* **School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, China &ensp;&ensp;&ensp;&ensp; 09/2016 to 06/2020**
  * Major: Automation + Computer Science
  
* **Zhiyuan College, Shanghai Jiao Tong University &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 09/2016 to 06/2020**
  * Zhiyuan Honors Program of Engineering (Top 5%)

* **School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, China &ensp;&ensp;&ensp;&ensp; 09/2020 to present**
  * Major: Control Engineering

# SKILLS

- **Programming: C/C++, Python**
- **Robotic systems: ROS**
- **ML systems: Pytorch**
- **Physical Simulation Plantforms: Mujoco, CoppeliaSim**
- **Data Acquisition & Processing: Matlab, Mathematica**
- **FPGA Developing: Verilog HDL, Quartus II**
- **Modeling and analyzing control systems and design controllers**


# HONORS & AWARDS

- **National Scholarship (1%) Oct.2017**
- **CASC Aerospace Science and Technology Award (5%) Oct.2018**
- **Zhiyuan Exellent Scholarship (10%) (4 times) Dec.2016/ Dec.2017 / Dec.2018 / Dec.2019**
- **B Prize of Shanghai Jiao Tong University (15%) (3 times) Oct.2017/ Oct.2018 / Oct.2019**
- **H Prize in 2019 MCM April.2019**
- **Second Prize in East China Area NXP Smart Car Competition August.2019**
- **Graduate Student Academic Scholarship (3 times) Nov.2020/ Nov.2021 / Nov.2022**


# LABORATORY EXPERIENCE

**Adversarial-based Algorithm for Motion Balancing Control of Legged Robots**  Dec. 2021-Now
- Advisor: Yue Gao (Professor of AI Institute, Shanghai Jiao Tong University)
- Separate legged robot balance control into two separate agents, stance and swing legs.
- Stance legs controlled with WBC method are responsible for generating acceleration to track target velocity. While swing legs controlled with RL method are responsible for balance the robot.
- Use adversarial training for stance and swing legs to control the legged robot track the desired velocity fast and stable.


**Capability-based Locomotion Control of Legged Robots** 2020.09-2022.05
- Advisor: Yue Gao (Professor of AI Institute, Shanghai Jiao Tong University)
- Propose a definition of the traverse capability of legged robots, that is the traverse success rate of the robot, which is relevant to its surrounding terrain, topology and motion controller.
- Generate plenty of locomotion tasks in simulation to train our legged robot, Qingzhui. A layered control strategy
maximizes its capability, at the same time learns its capability.
- Use the learned capability model to optimize long-range locomotion guidance algorithms


**Designing Skating and Skiing Robot for Beijing Winter Olympic Torch Relay** 2020.11-2022.02
- Advisor: Feng Gao (Professor of Mechanical Engineering School, Shanghai Jiao Tong University) 
- Modify hexapod robots for skating and skiing. Design control algorithms for skating and skiing robots.
- Design environment perception and remote-control framework for skating and skiing robots.
- Conducted outdoor skating and skiing experiments in real skating and skiing resorts.

**Designing Locomotion Controller for Six-Legged Robot** 2019.09-2020.04
- Advisor: Yue Gao (Professor of Automation Department, Shanghai Jiao Tong University)
- Design a top-level controller based on reinforcement learning for path planning and a low-level controller based on trajectory optimization for gait and feet-pos planning of a hexapod.
- Use sim-to-real method, we implement the actions of the robot in simulation. Doing our training part in our simulation environment. And we use the trained model to run the actual hexapod robot

**A Framework Based on Rule Reasoning and Syntactic Schema Embedding** 2018.10-2019.01
- Advisor: Xinbing Wang (Professor of Computer Science Department, Shanghai Jiao Tong University)
- Implemented a core logic connection part of a Knowledge Based Question Answer (KBQA) system. First, use CRFBiLSTM to extract the key information of a query, including the subject and predicate and also label the key information. Then, use the labels of the key information to search in the knowledge graph, try to find a linked graph including all the information that extracted. Then, by the knowledge graph, we can derive the answer of the query.
- Had a patent about the KBQA system, Patent No: CN201910314357.X.

**Fundamental Implementation of Neural Network on FPGA** 2018.07-2018.09
- Advisor: Azita Emami (Professor of Moore Lab, California Institute of Technology)
- Found a way to represent floating point numbers in FPGA: Dividing the binary number to 3 parts, indicating the sign, integer and the decimal part. Each part can be adjusted by the actual accuracy requirements and the length limit.
- Implemented some basic matrix multipliers in FPGA using Verilog HDL. Then, with these multipliers, I made some
activation functions that can be used in neural networks in FPGA.
- Synthesized the multipliers and the activation functions together and implemented a basic Deep Neural Network in
Quartus II platform and programmed a basic neural network in Intel Stratix FPGA.


# PUBLICATIONS

  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

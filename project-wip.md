WIP 06-12-2023

## Phase 1: Proof of Concept

### Goal: Validate the primary features of the time capsule app.

**Milestone 1 (Sprint 1-2):**

**User Stories:**

1. As a user, I can register and log in to the application.
2. As a user, I can send messages with a time delay.
3. As a user, I can lock and unlock virtual time capsules.
4. As a user, I can attempt basic hacking challenges.

**Tasks:**

- Set up a Node.js server with Express.js for routing and implement user authentication routes.
- Set up PostgreSQL database and design table schemas for users, messages, time capsules, CTF challenges, and user achievements.
- Implement front-end using a JavaScript library/framework (React, Angular, Vue.js, which).
- Develop basic CTF (Capture The Flag) challenges related to CS fundamentals and broken hash algorithms.
- Implement time-delayed messaging and time capsule locking/unlocking feature on the backend.
- Design and implement UI components for these features on the frontend.

**Milestone 2 (Sprint 3-4):**

**User Stories:**

1. As a user, I can interact with the basic CTF challenges and submit my solutions.

**Tasks:**

- Implement the frontend interface for CTF challenges.
- Conduct functional testing to ensure that all implemented features work as expected.

## Phase 2: Proving Ground

### Goal: Enhance the app's sophistication by adding features like digital geocaching, multiple CTF challenges, and badges for tougher challenges.

**Milestone 3 (Sprint 5-7):**

**User Stories:**

1. As a user, I can visit different locations on a digital map.
2. As a user, I can attempt multiple CTF challenges and earn badges.

**Tasks:**

- Implement API endpoints for digital geocaching feature, including locations on the digital map and challenges for each location.
- Update the frontend to include a digital map interface and challenges related to each location.
- Develop more sophisticated CTF challenges.
- Implement a system for badges associated with tougher challenges.

**Milestone 4 (Sprint 8-10):**

**User Stories:**

1. As a user, I can receive an early clue to the next cache if I solve a cache.

**Tasks:**

- Implement the feature for providing early clues on successful cache solutions.
- Conduct comprehensive testing to ensure that all implemented features work as expected and fix any bugs discovered.

## Phase 3: Initial Release

### Goal: Prepare the app for public release by adding additional features.

**Milestone 5 (Sprint 11-13):**

**User Stories:**

1. As a user, I can use the application in different dialects.
2. As a user, I can view solved puzzles and their solutions posted by others.
3. As a user, I can attempt non-CS-based challenges and logic puzzles.

**Tasks:**

- Update the backend to support multiple databases for different dialects.
- Design and implement a public gallery or leaderboard for displaying solved puzzles and their solutions.
- Develop non-CS-based challenges and logic puzzles.

**Milestone 6 (Sprint 14-16):**

**User Stories:**

1. As a user, I can use a stable, bug-free application.

**Tasks:**

- Conduct final testing, including usability tests, performance tests, and security tests.
- Prepare for the public launch of the app, including setting up a stable production environment and preparing marketing materials.

In this revised version, each phase is divided into sprints, with each sprint focusing on a set of user stories and associated tasks

. These sprints can be adjusted according to your actual available time for the project. The tasks within each sprint can be assigned to team members based on their available skills and interests. As you're using Node.js and PostgreSQL, JavaScript would be the language for both the frontend and backend, making it easier for team members to work on both sides of the app.

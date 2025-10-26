# MyEdSpace Coding Exercise - Frontend

- [What You'll Be Building](#what-youll-be-building)
- [Core Concepts](#core-concepts)
- [Access and Tracking Logic](#access-and-tracking-logic)
  - [Logged-In State](#logged-in-state)
  - [Interaction Tracking](#interaction-tracking)
- [Expected Behaviour](#expected-behaviour)
- [How to Approach It](#how-to-approach-it)
- [Testing Expectations](#testing-expectations)
- [What We’ll Discuss in Review](#what-well-discuss-in-review)
- [Tools & Constraints](#tools--constraints)
- [My Exercise - Getting Started](#my-exercise---getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Formatting](#formatting)
  - [Testing](#testing)
  - [Docker](#docker)

This challenge is designed to evaluate your ability to:

- Design interactive UIs with state and access control logic
- Structure components in a reusable and testable way
- Manage side effects and asynchronous behavior thoughtfully

## What You'll Be Building

You’ll be implementing a simplified version of a **secure livestream viewer**,
designed to **restrict access to a YouTube livestream** based on a simulated login
state, and **track key user interactions** with the embedded video.
While you won’t implement real authentication, your design should demonstrate
how you’d enforce access in production. You’ll also log user actions like **play**,
**pause**, and **seek**, to simulate how analytics might work in the live product.

## Core Concepts

We're building part of **MyEdSpace’s video infrastructure**, which serves
livestreamed classes to authenticated users across web and mobile. This frontend
component is intended to:

- Gate access to a video based on login state
- Provide hooks for analytics and engagement tracking
- Be simple enough to prototype quickly, but structured for growth

## Access and Tracking Logic

### Logged-In State

In production, only logged-in users would be allowed to view livestreams. For now,
simulate this using any of the following:

- A hardcoded `isLoggedIn` flag
- A toggle or simple login/logout button
- A mock context/provider

Unauthenticated users should see a "Please log in" message instead of the video.

### Interaction Tracking

Track and record the following video events:

- **Play**
- **Pause**
- **Seek**

You may use the YouTube Iframe API or the simple `<iframe>` embed with fallback
events. Display the captured events in memory (e.g., console or UI list).

## Expected Behaviour

1. User is not logged in → ❌ Video not shown
2. User is not logged in → Please log in message is shown
3. User logs in → ✅ Embedded video player becomes visible
4. User clicks play → event tracked/logged
5. User pauses, seeks → each event logged
6. User logs out → ❌ Video hidden again
7. User logs out → Please log in message is shown

## How to Approach It

- Write **React (JS or TS)** code that is **fully testable**, you should use functional
  components and not class components
- You don’t need to implement a real auth flow — just simulate it.
- Focus on separation of concerns and extensibility
- You may use any lightweight testing framework (e.g. Jest, Testing Library) to
  show intent and test structure.

## Testing Expectations

Please include at least **two meaningful tests**:

1. A test validating that **unauthenticated users cannot view the video**
2. A test ensuring that **user interactions are tracked correctly**
   Bonus if you show intent to mock YouTube events or abstract away APIs.

## What We’ll Discuss in Review

- How you structured your components and logic
- How you approached access control and video embedding
- How you tracked and handled side effects (e.g., video events)
- Tradeoffs you made and what you’d improve with more time
- Your approach to testing

## Tools & Constraints

- A simple React app is enough, or you can use a framework if preferred
- Avoid large libraries — keep it lightweight
- You can use AI tools to support your work as long as **you remain the
  decision-maker**
- Complete the exercise and share your code with us, we will then organize a
  follow up review. We recommend time boxing to 2hrs and sharing your code
  via git bundle which is well described at the following link
  <https://www.linkedin.com/pulse/what-git-bundle-stephen-paynter/>

## My Exercise - Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or higher)
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/javierlopezdeancos/my-ed-space-tech-interview.git
   ```

2. Install the dependencies:

   ```shell
   pnpm install
   ```

### Development

To start the development server, run the following command:

```shell
pnpm dev
```

This will start the application on `http://localhost:5173`.

### Formatting

To format the code, run the following command:

```shell
pnpm format
```

### Testing

To run the unit tests, use the following commands:

```shell
pnpm test:unit
```

To run the end-to-end tests, use the following command:

1. install browsers (only once)

   ```shell
   pnpm exec playwright install
   ```

2. run tests

   ```shell
   pnpm test:e2e
   ```

To run all tests, use the following command:

```shell
pnpm test
```

### Docker

To build the Docker image, run the following command:

```shell
pnpm container:build
```

To run the Docker container, run the following command:

```shell
pnpm container:run
```

The application will be available on `http://localhost:8080`.

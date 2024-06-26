## USSD Simulator

The USSD Simulator is a web-based application designed to simulate the USSD code input and response process typically used on mobile phones. This project is built using Vue.js and Vue Router.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
  - [Branching and Pull Requests](#branching-and-pull-requests)
- [License](#license)
- [Contact](#contact)

## Features

- Simulate USSD code input and response
- Dynamic response messages
- Responsive design

## Demo

![Screenshot of the USSD Simulator](https://github.com/Anthony-cloud-1/ussd-simulator/blob/main/img/shot1.png)

![Another screenshot](https://github.com/Anthony-cloud-1/ussd-simulator/blob/main/img/shot2.png)

![Another screenshot](https://github.com/Anthony-cloud-1/ussd-simulator/blob/main/img/shot3.png)

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/en/download/) (v12.x or later)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Getting Started

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Anthony-cloud-1/ussd-simulator.git
    cd ussd-simulator/ussd-mock
    ```

2. **Install Dependencies**

    Using npm:
    ```bash
    npm install
    ```

    Or using Yarn:
    ```bash
    yarn install
    ```

3. **Run the Application**

    Using npm:
    ```bash
    npm run serve
    ```

    Or using Yarn:
    ```bash
    yarn serve
    ```

4. **Build for Production**

    Using npm:
    ```bash
    npm run build
    ```

    Or using Yarn:
    ```bash
    yarn build
    ```

## Project Structure

```plaintext
ussd-mock/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── assets/
│   │   ├── phone_outline.png
|   |   ├── styles.css
|   |   ├── ussd.css
|   |   ├── tailwind.css
│   ├── components/
│   │   ├── HomeScreen.vue
|   |   └── UssdScreen.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
│
├── .gitignore
├── babel.config.js
├── package.json
└── README.md
```

## Usage

1. **Navigate to the URL**

    Open your browser and navigate to `http://localhost:8080` (or the port specified in the console).

2. **Interact with the USSD Simulator**

    - Enter the USSD code in the input box and click the `SEND` button to simulate the request.
    - View the response message and either send a follow-up code or cancel the session.

## Contributing

We welcome contributions from the community! Here’s how you can get involved:

1. **Fork the Repository**

    Click the "Fork" button at the top right of the repository page.

2. **Clone Your Fork**

    ```bash
    git clone https://github.com/Anthony-cloud-1/ussd-simulator.git
    cd ussd-simulator/ussd-mock
    ```

3. **Create a Branch**

    ```bash
    git checkout -b feature-name
    ```

4. **Make Your Changes**

    Make the necessary changes in your forked repository.

5. **Commit Your Changes**

    ```bash
    git add .
    git commit -m "Description of changes"
    ```

6. **Push to Your Fork**

    ```bash
    git push origin feature-name
    ```

7. **Create a Pull Request**

    Go to the original repository and click on "New Pull Request" to submit your changes for review.

### Branching and Pull Requests

- **Branching**: Always create a new branch for your feature or bug fix.
    ```bash
    git checkout -b feature-name
    ```

- **Pull Requests**: Ensure your branch is up to date with the base branch (usually `main`) before creating a pull request.
    ```bash
    git checkout main
    git pull origin main
    git checkout feature-name
    git merge main
    ```

    Then create a pull request from your feature branch to the `main` branch of the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Anthony-cloud-1/ussd-simulator/blob/main/LICENSE.md) file for details.

## Contact

For any questions or suggestions, please contact [tonysack13@gmail.com](mailto:tonysack13@gmail.com).

---


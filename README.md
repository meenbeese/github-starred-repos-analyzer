# GitHub Starred Repos Analyzer

This is a simple Node.js script that analyzes a GitHub user's starred repositories and counts the number of repositories for each programming language.

## Features

- Fetches all starred repositories of a GitHub user
- Counts the number of repositories for each programming language
- Displays the results in a nicely formatted table
- Handles pagination to fetch all starred repositories

## Prerequisites

- Node.js installed on your machine
- `node-fetch` library

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/meenbeese/github-starred-repos-analyzer.git
    ```
2. Navigate to the project directory:
    ```bash
    cd github-starred-repos-analyzer
    ```
3. Install the required dependencies:
    ```bash
    npm install node-fetch
    ```

## Usage

1. Run the script with the GitHub username as a command line argument:
    ```bash
    node index.js foobar
    ```

Replace `foobar` with the GitHub username you want to analyze.

## Example

```bash
node index.js octocat
```
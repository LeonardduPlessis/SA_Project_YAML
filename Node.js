name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: 14

    - name: Install dependencies
      run: npm install

    - name: Build
      run: npm run build

    - name: Run tests
      run: npm test

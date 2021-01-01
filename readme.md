# Advent of Code 2020 with Typescript

## Introduction

This repository contains my solutions to problems in [Advent of Code 2020](https://adventofcode.com/2020), programmed with Typescript and TS-Node.

The repository can also be used as a base for your own solutions. This gives you a ready development environment with following advantages:
* Typescript/Node configured for quick development
* TSLint for linting
* Jest for test execution
* Utilities for quickly initializing new problems and for handling the input files

## Requirements

To clone and use the repository, following software must be installed on your computer:
* Git
* Node, v12 or up

## Executing my solutions

Here's how to execute the solutions.

Instructions:
1. Clone the repository
```
git clone https://github.com/jvuor/advent-of-code-2020.git
```
2. Install dependancies
```
cd advent-of-code-2020
npm i
```
3. Each days solution has it's own starting script, so as an example to run the solution for day 1:
```
npm run day1
```
4. For each solution you need to have the input file from Advent of code saved as an `input.txt` inside the solution folder. For example, for day 1 solution you need to save the input as:
```
src\day1\input.txt
```

## Using the repository as a base for your own solutions

Here are instructions to using the repository as a base for developing your own solutions:

1. Clone the repository
```
git clone https://github.com/jvuor/advent-of-code-2020.git
```
2. Install dependancies
```
cd advent-of-code-2020
npm i
```
3. Remove the existing solutions and re-initialize the git repo
```
rm -rf src/day*
rm -rf .git
git init
```
4. For initializing each solution, use the `add` script. For example, `npm run add day1` adds a directory for new solution to `src/day1` and a script to run the solution: `npm run day1`

5. For handling the solution inputs, save them as `input.txt` inside the solution directory and use the included `getInput` function to retrieve the contents of the file. As an example if you save the input for day 1 as `src/day1/input.txt` you can then call `getInput()` without arguments inside `src/day1/index.ts` and it finds the input file automatically.

   If your input file has a different file name or it is located in a different directory, provide a path to it as an argument to `getInput`. For example `getInput('src/day1/input.txt')`.

6. The repository comes with TSList configured for use. If you are using Visual Studio Code, you should install the TSLint extension and it will use the configuration for linting. If you want to modify the configuration to your own tastes, see `tslint.json`.

7. The repository also comes with Jest configured for use. Place your test files inside `__tests__` directory and they will be executed with `npm run test`. See Jest documentation for more information.

## License

This repository is open software published under MIT license. See license file for details.
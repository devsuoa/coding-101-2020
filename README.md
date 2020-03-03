# Coding 101 2020

Welcome to the git repository for DEVS' coding 101 workshop for 2020! Here you will find setup instructions to be completed before the workshop, as well as examples of completed exercises to look back on after the workshop.

# Getting started

The coding 101 workshop requires some software to be installed on your computer.

- [Visual Studio Code](https://code.visualstudio.com/): A text editor which we will be writing our code in.
- [Node.js](https://nodejs.org/en/): Used to run our javascript code.
- [Yarn](https://classic.yarnpkg.com/en/docs/install/): Used to download packages that other people have written.

## Windows

A video of the setup process has been recorded for you if you get stuck. https://youtu.be/Yv-Se-KbFa8

### Visual Studio Code

- Download the windows installer from https://code.visualstudio.com/
- Run the installer once downloaded
- Follow the installation steps

## Node.js

- Download the windows LTS installer from https://nodejs.org/en/download/
- Run the installer once downloaded
- Follow the installation steps
- Open the windows command prompt (search for cmd)
- Verify that node is installed by running `node --version`. The node version (e.g. v12.16.0) should be returned.

## Yarn

- Download the windows installer from https://classic.yarnpkg.com/en/docs/install/#windows-stable
- Run the installer once downloaded
- Follow the installation steps
- Open the windows command prompt (search for cmd)
- Verify that yarn is installed by running `yarn --version`. The yarn version (e.g.v1.22.0) should be returned.

## MacOS

A video of the setup process has been recorded for you if you get stuck. https://www.youtube.com/watch?v=Ntv5XS4NBfU

We will use homebrew to install all of the software for mac. Install homebrew by pasting the following command into the terminal (spotlight and search for terminal).

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Visual Studio Code

- Run the following command in the terminal

```
brew cask install visual-studio-code
```

### Node.js

- Run the following command in the terminal

```
brew install node
```

- Verify that node is installed by running `node --version`. The node version (e.g. v12.16.0) should be returned.

### Yarn

- Run the following command in the terminal

```
brew install yarn
```

- Verify that yarn is installed by running `yarn --version`. The yarn version (e.g. v1.22.0) should be returned.

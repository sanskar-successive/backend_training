# Node.js Installation on Ubuntu using Curl

This guide will walk you through the steps to install Node.js on Ubuntu using `curl`.

## Prerequisites

- Make sure you have `curl` installed. If not, you can install it using:

    ```bash
    sudo apt-get update
    sudo apt-get install curl
    ```

## Steps

1. Open a terminal on your Ubuntu machine.

2. Run the following command to download and execute the NodeSource setup script:

    ```bash
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    ```

    Note: You can change `14.x` to the desired Node.js version.

3. Once the script finishes running, you can install Node.js and npm using:

    ```bash
    sudo apt-get install -y nodejs
    ```

4. To verify the installation, check the Node.js and npm versions:

    ```bash
    node -v
    npm -v
    ```

    This should display the installed Node.js and npm versions.

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


# Install and set up the latest stable version of Postman.

1. Open a terminal

2. Add the postman repository

    ```bash
    sudo sh -c 'echo "deb https://dl.pstmn.io/download/latest/linux64" > /etc/apt/sources.list.d/postman.list'
    ```

3. Import the Postman GPG Key

    ```bash
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
    ```

4. Update the package list

    ```bash
    sudo apt-get update
    ```

5. Install Postman

    ```bash
    sudo apt-get install postman
    ```
# Client-Server Architecture

Client-server architecture is a way of organizing and managing the interaction between clients and servers.

## Clients: 
1- Clients are the end-user devices or applications that people use, such as computers, smartphones, or tablets.
2- Clients request services or resources from servers.

## Servers:
1- Servers are systems that store data, manage resources, and provide services to clients.
2- Servers respond to client requests by processing information, performing tasks, or delivering data.

## Working:

## Request and Response:
A client initiates a request by sending a message to the server.
The server receives the request, processes it, and sends back a response to the client.

## Communication:
Communication between the client and server typically happens over a network, such as the internet.
The communication follows a set of rules or protocols to ensure proper interaction.

## Advantages of Client-Server Architecture:
**Centralized Control**: Servers centralize data and resources, allowing for better control and management.
**Scalability**: It's easier to scale systems by upgrading servers or adding more servers to handle increased demand.
**Resource Sharing**: Servers can share resources efficiently among multiple clients, optimizing performance.
**Security**: Centralized servers facilitate better security measures, protecting data and resources from unauthorized access.

## Examples:
**Web Browsing**: When we open a website, your browser (client) requests web pages from a server, which then sends the data back to be displayed on our screen.
**Email Services**: Email clients request and retrieve messages from email servers.
**Online Gaming**: Multiplayer games often use client-server architecture, where the game server manages the game world and player interactions.

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

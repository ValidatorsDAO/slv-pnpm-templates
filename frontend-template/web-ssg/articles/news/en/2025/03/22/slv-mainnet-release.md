---
id: slv-mainnet-release
title: SLV Announces the Release of Support for Solana Mainnet Validators and RPC Operations
category: Press Release
thumbnail: /news/2025/03/22/SLVMainnetReleaseEN.jpg
---

ELSOUL LABO B.V. (Headquarters: Amsterdam, The Netherlands; CEO: Fumitake Kawasaki), together with Validators DAO—which promotes decentralization and enhanced security on the Solana network—announces the **release of new features in the open-source Solana development tool “SLV,” enabling support for Solana mainnet validators and RPC operations**. This new version allows simple, secure node operations not only on testnet but now also on the much-anticipated mainnet environment.

## What is SLV?

![SLV](/news/2025/03/22/SLV.jpg)

SLV is an **open-source Solana development tool** created by combining expertise from both the edge-native app framework “Skeet” and “solv,” a utility that simplifies Solana validator and RPC node setups. One of SLV’s defining features is its **remote management**, allowing you to control multiple nodes from a single interface without storing private keys on the nodes themselves. This architecture enables efficient and secure validator or RPC operations at any scale.

GitHub: [https://github.com/ValidatorsDAO/slv](https://github.com/ValidatorsDAO/slv)

## Mainnet Validator Operations Now Available

With this update, you can now **easily perform initial setups and deployments for Solana mainnet validators** using SLV. By leveraging a scripted process that runs entirely on your local environment—without the need for manual SSH work or remote file edits—validator nodes can be brought online quickly. In the event of errors, SLV’s automated troubleshooting feature helps minimize operator mistakes, ensuring stable operations.

### Minimize the Impact of Node Failures

When operating validators, there is always a risk of extended downtime due to node or hardware failures. SLV **manages keys remotely**, so even if a node is physically compromised, your sensitive information remains protected, and a new node can be deployed rapidly. This makes node reconfiguration or switching far less burdensome and significantly reduces operational overhead.

### Manage Multiple Nodes & Perform No-Downtime Updates

SLV also excels at **managing multiple nodes at once**, including both primary and standby nodes. By updating and verifying a spare node in advance and then swapping it with the primary, you can **minimize downtime during upgrades**. Additionally, SLV supports parallel management and migrations of multiple nodes, offering greater resilience and flexibility for large-scale operations or disaster recovery.

## Expanded Support for RPC Node Operations, Including Geyser gRPC Plugin

The new version of SLV also enhances **setup and management of Solana RPC nodes**. It supports the popular **Geyser gRPC Plugin**, giving projects and developers with diverse service requirements the ability to **quickly spin up high-performance RPC nodes**. This flexibility opens the door to more efficient and scalable Solana-based services.

## Simplify Jito-Relayer Operations

SLV’s standard features now include setup capabilities for **Jito-Relayer**, a component focused on leveraging MEV (Maximal Extractable Value) and optimizing block construction. Acting as a **TPU Proxy**, Jito-Relayer filters and forwards incoming transactions to validators or block builders, **helping optimize transaction ordering and fee strategies**. With SLV, you can deploy multiple nodes, change versions, and manage these processes centrally, reducing risks and enabling a more adaptable operational framework.

## Secure and Reliable Through Remote Management

SLV’s **remote management** design limits direct SSH connections and key file handling, consolidating operational control on your local environment:

- **No Private Keys on Remote Nodes**: Even if a node is damaged or compromised, private keys remain secure, reducing the risk of key exposure.
- **Ideal for Multiple Nodes**: Effortlessly rebuild or replace only the node experiencing errors, maintaining flexibility for maintenance and disaster recovery.
- **Remote Updates and Recovery**: Version upgrades, configuration changes, and crash recoveries can be managed smoothly from one place.

These features make SLV a dependable choice for mainnet validator operations and large-scale RPC deployments.

## Quick Start Guide Now Available

For detailed instructions on setting up mainnet validators and other features of SLV, refer to the **Quick Start Guide** in the official documentation. It provides clear steps for the initial configuration and beyond.

- **SLV Mainnet Validator Quick Start Guide**  
  [https://slv.dev/en/doc/mainnet-validator/quickstart/](https://slv.dev/en/doc/mainnet-validator/quickstart/)

## Future Outlook and Community

SLV aims to support everything from Solana validator operations to RPC and application development. Ongoing updates will focus on delivering more flexibility and security for Web3 developers and validator operators.

For operational or technical questions and feedback, please join the Validators DAO official Discord. A community of experienced validators collaborates here to exchange information and offer support. We welcome you to participate.

- **SLV Documentation**: [https://slv.dev/](https://slv.dev/)
- **Validators DAO Official Discord**: [https://discord.gg/C7ZQSrCkYR](https://discord.gg/C7ZQSrCkYR)

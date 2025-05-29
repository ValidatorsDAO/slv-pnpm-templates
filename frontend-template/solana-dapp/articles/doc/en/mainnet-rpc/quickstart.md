---
id: mainnet-rpc-quickstart
title: Solana Mainnet RPC - Quickstart
description: SLV - Solana Mainnet RPC - Quickstart
---

## Introduction

To deploy a Solana mainnet RPC, you'll use the SLV command-line tool.
This quickstart guide explains how to use the SLV command-line tool to deploy a Solana mainnet RPC with SPL token account indexing and Geyser Yellow plugin.

You must have Ubuntu 24.04 LTS clean installed on your server.

### Bare Metal Server Preparation

Solana officially recommends using bare metal servers.
Bare metal servers provide higher performance than other virtualized environments.
Solana RPC nodes have high CPU and memory requirements.
Especially when enabling indexing, typically a minimum of 24 CPU cores and 768 GB of memory is required.
For stable performance, 1 TB or more of memory is recommended.

When you run the `slv rpc init` command, you'll be asked if you already have a bare metal server set up.

```bash
➜ slv rpc init
? 🛡️ Do you have a Solana Node Compatabile Server? (no)
❯ yes
  no
```

We'll proceed with the `yes` tutorial here.
If you haven't set up a bare metal server yet, select `no`.
Please refer to this [Guide](/en/doc/metal/quickstart) to secure a bare metal server.

## Deploy Solana Mainnet Jito RPC

This command will prompt you to provide necessary information to deploy.

```bash
slv rpc init
```


### Generate or Set the Solana Validator Identity Key

You can generate a new identity key or set an existing identity key. This
example shows how to set an existing identity key.

```bash
? Do you want to create a new identity key now? (Y/n) › Yes
🔑 Generating new identity key...
✨ Generated Key: gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV
✨ Moved Key to: /Users/fumi/.slv/keys/gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV.json
```

### Select Solana CLI

Select the Solana CLI version.

```bash
? Select Validator Type (jito)
❯ jito
```

### Select Region

Select the Jito block engine region.

```bash
? 🌐 Select Block Engine Region
❯ amsterdam
  frankfurt
  ny
  salt_lake_city
  tokyo
```

### Set RPC Port

Set the Solana RPC port.

```bash
? Select Solana RPC port (8899)
```

### Set Snapshot URL (Optional)

Set the Snapshot URL.
If you don't have a specific setting, press Enter to skip.

```bash
? Enter Snapshot URL(Optional) () › 
```

### Select RPC Type

Select the RPC type.

```bash
? Select an RPC type
❯ geyser-yellowstone
```

### Set gRPC Port

Set the gRPC port.

```bash
? Select Solana gRPC port (10000)
```

### Set Geyser gRPC Token

Set the Geyser gRPC token for security.

```bash
? Please enter your x_token (xToken) ›
```

### Set UFW Firewall

The UFW firewall is configured to allow SSH connections only from specific IP addresses.
To add to the existing whitelist, select `Keep and add more`.

```bash
🔒 Updating Allowed SSH IPs for mainnet_validators

Current Allowed SSH IPs:
  - x.x.x.x
  - x.x.x.x
? What would you like to do with the current IPs?
❯ Keep and add more
  Replace all
  Keep as is
```

Next, enter the IP addresses that are allowed to connect to the node.

```bash
🔒 Updating Allowed IPs for mainnet_validators

Current Allowed IPs:
  - x.x.x.x
  - x.x.x.x
? What would you like to do with the current IPs?
❯ Keep and add more
  Replace all
  Keep as is
```

This completes the firewall configuration.
To update the whitelist later, run the following command:

```bash
slv v update:allowed-ips
```

```bash
✔︎ Success
✔ Inventory updated to /Users/fumi/.slv/inventory.mainnet.rpcs.yml
✔ Successfully created solv user on gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV
✔︎ mainnet_rpcs inventory file has been saved to /Users/fumi/.slv/inventory.mainnet.rpcs.yml
Now you can deploy with:

$ slv rpc deploy -n mainnet -p gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV    
```

After that, the `solv` user is created on the bare metal server, and
the Solana RPC configuration is saved to `~/.slv/inventory.mainnet.rpcs.yml`.

### Deploy Solana RPC Node

Once you confirm the configuration, the deployment will start.

```bash
slv rpc deploy -n mainnet -p gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV    
Your Mainnet RPC Nodes Settings:
┌──────────────┬─────────────────────────────────────────────┐
│ Identity Key │ gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV │
├──────────────┼─────────────────────────────────────────────┤
│ Name         │ gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV │
├──────────────┼─────────────────────────────────────────────┤
│ IP           │ x.x.x.x                                     │
├──────────────┼─────────────────────────────────────────────┤
│ Region       │ amsterdam                                   │
├──────────────┼─────────────────────────────────────────────┤
│ RPC Type     │ geyser-yellowstone                          │
├──────────────┼─────────────────────────────────────────────┤
│ Version      │ 2.1.16                                      │
└──────────────┴─────────────────────────────────────────────┘
? Do you want to continue? (Y/n) › Yes
.
.
.
Successfully deployed validator on mainnet
⚡️⚡️⚡️ Enhanced Solana RPC Connection API Key ⚡️⚡️⚡️

We're excited to offer a free API key exclusively for the Validators DAO community 🎉
It's our way of supporting the community and empowering you with fast, reliable connections.

To get your Free API key, simply join us through the link below:

Validators DAO: `https://discord.gg/X4BgkBHavp`

Unlock fast connections and elevate your experience with your very own API key 🚀
```

It's done! Your Solana RPC node is now deployed.
It will take some time to synchronize with the Solana network.

### Debugging & Monitoring

After deployment, you can check the status of the Solana RPC node with the following command:

```bash
ssh solv@<your-server-ip>
solv m
```

`solv` is an alias for `agave-validator -l /mnt/ledger`.
This setting is added to `~/.profile` during the RPC node deployment.

### SLV RPC Commands

```bash
Usage:   slv rpc
Version: 0.8.2  

Description:

  Manage Solana RPC Nodes

Options:

  -h, --help  - Show this help.  

Commands:

  init                - Initialize a new RPC node configuration 
  deploy              - Deploy a new RPC node                   
  setup:jupiter       - Setup Jupiter Self-hosted SWAP API      
  deploy:jupiter      - Deploy Jupiter Self-hosted SWAP API     
  list:jupiter        - List all Jupiter API instances          
  restart             - Restart RPC Node                        
  update:version      - Update RPC Version                      
  update:script       - Update Validator Startup Config         
  update:allowed-ips  - Update allowed IPs for mainnet RPC nodes
  list

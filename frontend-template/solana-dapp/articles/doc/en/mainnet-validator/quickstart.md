---
id: mainnet-validator-quickstart
title: Solana Mainnet Validator - Quickstart
description: SLV - Solana Mainnet Validator - Quickstart
---

## Introduction

To deploy a Solana mainnet validator, you'll use the SLV command-line tool.
This quickstart guide explains how to launch and deploy a mainnet validator hot spare.
SLV mainnet validators support `keyless operation`.
No sensitive information is stored within the validator node.

You must have Ubuntu 24.04 LTS clean installed on your server.

### Bare Metal Server Preparation

Solana officially recommends using bare metal servers.
Bare metal servers provide higher performance than other virtualized environments.
Solana nodes have high CPU and memory requirements. 
Typically, a minimum of 24 CPU cores and 384 GB of memory is required.
For stable earnings, 768 GB or more of memory is recommended.

When you run the `slv v init` command, you'll be asked if you already have a bare metal server set up.

```bash
➜ slv v init
? Select Solana Network (testnet) › mainnet
? 🛡️ Do you have a Solana Node Compatabile Server? (no)
❯ yes
  no
```

We'll proceed with the `yes` tutorial here.
If you haven't set up a bare metal server yet, select `no`.
Please refer to this [guide](/en/doc/metal/quickstart) to secure a bare metal server.

## Deploy Solana Mainnet Jito Validator

This command will prompt you to provide necessary information to deploy.

```bash
slv v init
```

New SLV Deployment is always use `unstaked-keypair.json` for the identity key.
This is the best practice to avoid double voting, and etc.

So Please make sure to set the authorized identity key with `slv v set:identity`
after the deployment.
Most of the mainnet case you use `slv v switch` to change the identity key with no downtime.
Please refer to this [guide](/en/doc/mainnet-rpc/update/) for more information.

### Select the Solana Network

Select the Solana Network you want to deploy.

```bash
slv v init
? Select Solana Network (mainnet)
  testnet
❯ mainnet
```

### Input Server's Default Username

Most of the time, the default username is `ubuntu`.

```bash
? What's the user for the server? (ubuntu) › ubuntu
```

### Input Server's IP Address

Input the IP address of the server.

```bash
? What's the IP address of the server? ›
```

### Set RSA Key for SSH

※ Please set the path to your RSA key. The default path is `~/.ssh/id_rsa`.
Currently, only the default path is supported.

```bash
? What's the path to your RSA key? (~/.ssh/id_rsa) › ~/.ssh/id_rsa
🔍 Checking SSH connection...
✔︎ SSH connection succeeded
```

Then SLV will check the connection to the server. If the connection is
successful, the next step will be prompted.

### Select Solana Validator Type

Select the type of Solana validator.

```bash
? Select Validator Type (jito)
❯ jito
```

※ Currently, only Jito validator is supported.

### Set Commission Rate

Set the commission rate for your validator.
※ 1000 equals 10%.

```bash
? Enter Commission Bps (1000) › 1000
```

### Set Region

Enter the region where the server is located.

```bash
? 🌐 Select Block Engine Region
❯ amsterdam
  frankfurt
  ny
  salt_lake_city
  tokyo
```
### Set Relayer URL

Enter the Relayer URL.

```bash
? Enter Relayer URL (http://localhost:11226) › http://localhost:11226
```

### Set Relayer Account

Enter the Relayer Account.

```bash
? Enter Relayer Account(Optional) () › xxxxxxxxxxxPubkeyxxxxxxxxxxxxxxxxxxxx
```

### Set Staked RPC Identity (Optional)

Enter the Staked RPC Identity.
If you don't have a specific setting, press Enter to skip.

```bash
? Enter Staked RPC Identity(Optional) () ›
```

### Set Snapshot URL (Optional)

Enter the Snapshot URL.
If you don't have a specific setting, press Enter to skip.

```bash
? Enter Snapshot URL(Optional) () › http://
```

### Generate or Set the Solana Validator Identity

You can generate a new identity key or set an existing identity key. This
example shows how to set an existing identity key.

```bash
? Do you want to create a new identity key now? (Y/n) › No
? Please Enter Your Identity Public Key › EjDwu2Czy8eWEYRuNwtjniYks47Du3KNJ6JY9rs3aFSV
⚠️ Please place your identity key in

  ~/.slv/keys/EjDwu2Czy8eWEYRuNwtjniYks47Du3KNJ6JY9rs3aFSV.json
.
.
✔︎ Success
✔ Inventory updated to ~/.slv/inventory.yml
✔ Successfully created solv user on x.x.x.x
```

Please place your identity key in `~/.slv/keys/<your-pubkey>.json`.
※ This key is not copied into the node, but is needed to later change to an authorized identity key.

Then, SLV will create the solv user with your password.

### Generate or Set the Solana Vote Account

You can generate a new vote account key or set an existing vote account key.
This example shows how to set an existing vote account key.

```bash
? Do you want to create a new vote account key now? (Y/n) › No
? Please Enter Your Vote Account Public Key > <your-vote-account>
```

### Set Your Authority Public Key

Please input your authority public key. This key is used to withdraw rewards
from the vote account.

```bash
? Please Enter Your Vote Account's Authority Key › <your-authority-pubkey>
✔︎ Validator mainnet config saved to ~/.slv/inventory.mainnet.validators.yml
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

`~/.slv/versions.yml` saves the configuration, including IP and version information.

`~/.slv/inventory.mainnet.validators.yml` saves the validator node information.

### Deploy the Validator

Once you confirm the configuration, the deployment will start.

```bash
slv v deploy -n mainnet -p elsoul-spare
Your Mainnet Validators Settings:
┌────────────────┬──────────────────────────────────────────────┐
│ Identity Key   │ elsoul-spare                                 │
├────────────────┼──────────────────────────────────────────────┤
│ Vote Key       │ ELLB9W7ZCwRCV3FzWcCWoyKP6NjZJKArLyGtkqefnHcG │
├────────────────┼──────────────────────────────────────────────┤
│ Authority Key  │ auth                                         │
├────────────────┼──────────────────────────────────────────────┤
│ IP             │ 185.209.178.39                               │
├────────────────┼──────────────────────────────────────────────┤
│ Validator Type │ jito                                         │
├────────────────┼──────────────────────────────────────────────┤
│ Version        │ 2.1.16                                       │
└────────────────┴──────────────────────────────────────────────┘
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

It's done! Your Solana Validator is now deployed. It will take some time to
catch up with the Solana network.


### Debugging & Monitoring

You can debug and monitor the Solana RPC node after deployment.

```bash
$ solv m
```

`solv` is an alias for `agave-validator -l /mnt/ledger`.
This setting is added to `~/.profile` during the RPC node deployment.


### Change the Identity Key

After the deployment, you need to change the identity key from the unstaked key to the authorized identity key.

```bash
slv v set:identity -n mainnet --pubkey <your-identity-pubkey>
```

This command will change the identity key to the authorized identity key.

※ For no-downtime migration - Please refer to this [guide](/en/doc/mainnet-rpc/update) for more information.

### SLV Validator Commands

```bash
Usage:   slv validator
Version: 0.8.0

Description:

  Manage Solana Validator Nodes

Options:

  -h, --help  - Show this help.

Commands:

  init                - Initialize a new validator
  deploy              - Deploy Validators
  list                - List validators
  set:identity        - Set Validator Identity
  set:unstaked        - Set Validator Identity to Unstaked Key Stop/Change Identity/Start
  restart             - Stop and Start Validator
  setup:firedancer    - Setup Firedancer Validator - Testnet Only
  setup:relayer       - Setup Jito Relayer - Mainnet Only
  deploy:relayer      - Setup Jito Relayer - Mainnet Only
  update:version      - Update Validator Version
  update:script       - Update Validator Startup Config
  apply               - Apply Ansiible Playbook
  update:allowed-ips  - Update allowed IPs for mainnet validator nodes
  switch              - Switch Validator Identity - No DownTime Migration
```

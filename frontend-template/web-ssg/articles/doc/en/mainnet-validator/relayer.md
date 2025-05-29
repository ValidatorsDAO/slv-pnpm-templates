---
id: mainnet-validator-relayer
title: Solana Mainnet Validator - Setup Relayer
description: SLV - Solana Mainnet Validator - Setup Relayer
---

The `slv v setup:relayer` command is used to set up a Jito Relayer.

## Usage

Run the following command:

```bash
slv v setup:relayer
? 🛡️ Do you have a Solana Node Compatabile Server? (no)
❯  yes
   no
```

This tutorial will proceed with the `yes` option.
If you haven't set up a bare metal server yet, select `no` and refer to 
[this guide](/en/doc/metal/quickstart) to secure a bare metal server.

## Set Mainnet Validator Identity Key

Set the identity key of the Mainnet Validator that the Relayer will use.

```bash
? Enter Validator Identity › gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV
```

⚠️ Please place your identity key in ~/.slv/keys/<your-relayer-pubkey>.json

## Set Relayer Identity Key

Set the identity key for the Relayer.

```bash
? Enter Relayer Account Address › 3QJmZ2tJ4p7W3U7b7zj1Z8YXf2J6JZ8F1
```

## Select Jito Block Engine Region

Select the region for the Jito block engine.

```bash
? 🌐 Select Block Engine Region
❯ amsterdam
  frankfurt
  ny
  salt_lake_city
  tokyo
```

## Configure Solana RPC Endpoint

Configure the Solana RPC endpoint.
If you want to set multiple endpoints, separate them with spaces.

```bash
? Enter Solana RPC Endpoint › http://localhost:8899 https://pro.erpc.global
```

## Configure Solana RPC Websocket Endpoint

Configure the Solana RPC Websocket endpoint.
If you want to set multiple endpoints, separate them with spaces.

Note: If you're setting multiple endpoints, enter them in the same order as the RPC endpoints.

```bash
? Enter Solana RPC Websocket Endpoint › ws://localhost:8900 wss://pro.erpc.global
.
.
.
✔︎ Success
✔ Inventory updated to /Users/fumi/.slv/inventory.relayer.yml
✔ Successfully created solv user on gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV
🟢 Relayer Inventory Added
⚠️ Please place your identity key in ~/.slv/keys/3QJmZ2tJ4p7W3U7b7zj1Z8YXf2J6JZ8F1.json

Now you can deploy with:

$ slv v deploy:relayer -p gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV
```

After this, a `solv` user will be created on the bare metal server, and
a Relayer configuration file will be created in the `~/.slv/inventory.relayer.yml` directory.

The Relayer configuration file is used when executing the `slv v deploy:relayer` command.

## Firewall Configuration

Port settings related to the Relayer are listed in the `mainnet-validators` section of the `~/.slv/versions.yml` file.

```yaml
mainnet_validators:
  solana_cli: jito
  version_agave: 2.1.16
  version_jito: 2.1.16
  allowed_ssh_ips:
    - x.x.x.x
  allowed_ips:
    - x.x.x.x
```

Add the necessary IP addresses for the Relayer as needed.

```bash
slv v update:allowed-ips
```

## Deploy Jito Relayer

As shown in the log above, run the following command to deploy the Relayer:

```bash
slv v deploy:relayer -p gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV
.
.
.
Successfully deployed Jito Relayer on mainnet
⚡️⚡️⚡️ Enhanced Solana RPC Connection API Key ⚡️⚡️⚡️

We're excited to offer a free API key exclusively for the Validators DAO community 🎉
It's our way of supporting the community and empowering you with fast, reliable connections.

To get your Free API key, simply join us through the link below:

Validators DAO: `https://discord.gg/X4BgkBHavp`

Unlock fast connections and elevate your experience with your very own API key 🚀
```

The Relayer deployment is now complete.

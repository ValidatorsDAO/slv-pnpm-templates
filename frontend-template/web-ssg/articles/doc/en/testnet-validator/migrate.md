---
id: testnet-validator-migrate
title: Solana Testnet Validator - Migrate Solana Validator Node With No Downtime
description: SLV - Solana Testnet Validator - Migrate Solana Validator Node With No Downtime
---

## 🚀 Zero-Downtime Migration Guide for Solana Testnet Validators

This guide explains how to migrate an existing testnet validator to a new server without stopping the validator.

## Prerequisites

This guide assumes that you already have a Solana testnet validator node set up.

We assume that the following two validator nodes are set up:

**1. Active testnet validator node** - The currently running validator node

**2. New testnet validator node** - The validator node you are migrating to

In this guide, we assume:

The active identity public key of the `active testnet validator node` is `gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV`.

The active identity public key of the `new testnet validator node` is `epics-validator-spare`.

Both validator nodes are assumed to have been set up using the `slv v init` command.

⚠️ Important Note

Both nodes should have the same configuration except for the Solana validator IP and identity key.

For example, when setting up a spare validator,
when using the `slv v init` command for setup,
use a temporary identity name as shown below:

```bash
slv v init
.
.
? Do you want to create a new identity key now? (Y/n) › No
? Please Enter Your Identity Public Key › epics-validator-spare
```

## Migrating the Validator Node

When you run the `slv v switch` command, you will be prompted to select the network to migrate to.

## Select the Solana Network

```bash
slv v switch
? Select Solana Network (testnet)
❯ testnet
  mainnet
```

Here, select testnet.

## Enter the Active Identity Public Key of the Source Validator

```bash
✨ Switching Testnet Validator Identity...
? From Validator Identity › gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV
```

## Enter the Active Identity Public Key of the Destination Validator

```bash
? To Validator Identity › epics-validator-spare
.
.
.
PLAY RECAP **************************************************************************************************
epics-validator-spare      : ok=3    changed=1    unreachable=0    failed=0    skipped=2    rescued=0    ignored=0   
gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV : ok=4    changed=3    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0   

Successfully swapped hosts gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV and epics-validator-spare in testnet_validators
✅ Successfully Switched Validator Identity
```

The validator node migration is now complete.

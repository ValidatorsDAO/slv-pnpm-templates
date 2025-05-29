---
id: mainnet-validator-update
title: Solana Mainnet Validator - Update Solana Version
description: SLV - Solana Mainnet Validator - Update Solana Version
---

Maintaining a Solana validator includes updating the Solana version.

This page explains how to update your Solana mainnet validator.

## Update SLV Version

To update your SLV validator version, run the following command:

```bash
$ slv upgrade
```

## Update SLV Default Version Settings

To update the default settings for your SLV validator, run the following command.
Using the `--config-only` flag will only update the `~/.slv/versions.yml` file.

```bash
$ slv v update:version --config-only

┌─ Mainnet Validators ───────────────────────┐
  Agave: 2.1.14 → 2.1.16
  Jito: 2.1.14 → 2.1.16

┌─ Testnet Validators ───────────────────────┐
  Agave: 2.2.3 = 2.2.3
  Firedancer: 0.406.20113 = 0.406.20113

┌─ Mainnet RPCs ────────────────────────────┐
  Agave: 2.1.16 = 2.1.16
  Jito: 2.1.16 = 2.1.16
  Geyser: v5.0.1+solana.2.1.16 = v5.0.1+solana.2.1.16

✔ Default versions updated
```

As shown in the log above, the default settings have been updated.

When there are version changes, they are displayed with **->**.

When there are no changes, they are displayed with **=**.

## Apply Solana Version Update

To apply a Solana mainnet update, run the following command.

To apply the update to all validators, run the command without the `-p` flag.

To apply the update to a specific validator, use the `-p` flag to specify the validator's public key.

You can also specify multiple validators by separating their public keys with commas.

```bash
$ slv v update:version -n mainnet -p <your-validator-pubkey> 
```

Running the above command will update the Solana CLI version on your node.

At this point, the update has not yet been applied, so you'll need to either perform a zero-downtime migration or restart your node.

## Restart After Solana Version Update

※ ⚠️ Restarting your node will cause it to lose synchronization with the network, so please restart with caution. If you want to perform a zero-downtime migration, please refer to [this guide](/en/doc/mainnet-validator/migrate).

```bash
$ slv v restart -n mainnet -p <your-validator-pubkey>
```

## Debugging & Monitoring

After deployment, you can debug and monitor your Solana node directly.

Use the following commands to easily check your node’s status:

Connect via SSH using your validator's IP address:

```bash
ssh solv@<your-validator-ip>
```

Check your Solana node's current status:
```bash
solv m
```

Note:
solv is an alias for the command **agave-validator -l /mnt/ledger**.
This alias is automatically added to your **~/.profile** during Solana node deployment.
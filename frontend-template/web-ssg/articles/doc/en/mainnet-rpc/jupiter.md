---
id: mainnet-rpc-jupiter
title: Solana Mainnet RPC - Setup Jupiter Self-Hosted API
description: SLV - Solana Mainnet RPC - Setup Jupiter Self-Hosted API
---

Use the `slv r setup:jupiter` command to set up the Jupiter Self-Hosted API.

## Usage

```bash
slv r setup:jupiter
? 🛡️ Do you have a Solana Node Compatabile Server? (no)
❯  yes
   no
```

This tutorial will proceed with the `yes` option.
If you haven't set up a bare metal server yet, select `no` and refer to 
[this guide](/en/doc/metal/quickstart) to secure a bare metal server.

## Set Jupiter API Node Name

Set a name for your Jupiter API node.

```bash
? Enter Jupiter API Name › jupiter-node
```

## Configure Solana RPC Endpoint

Configure the Solana RPC endpoint.
If you want to set multiple endpoints, separate them with spaces.

```bash
? Enter RPC URLs() (http://localhost:8899) ›
```

Note: In most cases, a dedicated RPC node is required.

## Configure Geyser gRPC Endpoint

Configure the Geyser gRPC endpoint.

```bash
? Enter gRPC URL (http://localhost:10000) ›
```

## Enter Geyser gRPC Authentication Token

Set the authentication token for Geyser gRPC.

```bash
? Enter xToken for gRPC (xToken) ›
```

## Set Jupiter API Node Port

Set the port number for the Jupiter API node.

```bash
? Enter Jupiter API Port (2001) ›
```

### Configure UFW Firewall

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

The firewall configuration is now complete.
The configuration file is saved in `~/.slv/versions.yml` under `jupiter`.

After this, a `solv` user will be created on the bare metal server, and
the Jupiter API configuration will be saved in `~/.slv/inventory.jupiter.yml`.

### Deploy Jupiter API Node

After confirming the configuration, the deployment will begin.

```bash
slv r deploy:jupiter -p jupiter-node
┌──────────────┬─────────────┬──────┬───────────────────────┬──────┐
│ Name         │ Host        │ User │ RPC URLs              │ Port │
├──────────────┼─────────────┼──────┼───────────────────────┼──────┤
│ jupiter-node │ x.x.x.x     │ solv │ http://localhost:8899 │ 2001 │
└──────────────┴─────────────┴──────┴───────────────────────┴──────┘
? Do you want to continue? (Y/n) › Yes
.
.
.
Successfully deployed Jupiter SWAP API
⚡️⚡️⚡️ Enhanced Solana RPC Connection API Key ⚡️⚡️⚡️

We're excited to offer a free API key exclusively for the Validators DAO community 🎉
It's our way of supporting the community and empowering you with fast, reliable connections.

To get your Free API key, simply join us through the link below:

Validators DAO: `https://discord.gg/X4BgkBHavp`

Unlock fast connections and elevate your experience with your very own API key 🚀
```

The Jupiter API node deployment is now complete.

## Testing with Curl

To verify that the Jupiter API node has been deployed successfully,
run the following command:

```bash
curl --location 'http://<your-server-ip>/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=10000000' | jq
```

If deployed successfully,
the output should look like this:

```json
{
  "inputMint": "So11111111111111111111111111111111111111112",
  "inAmount": "10000000",
  "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  "outAmount": "1447598",
  "otherAmountThreshold": "1440361",
  "swapMode": "ExactIn",
  "slippageBps": 50,
  "platformFee": null,
  "priceImpactPct": "0",
  "routePlan": [
    {
      "swapInfo": {
        "ammKey": "2KRa7iFpRUHXczLkeGG4KeRFcpoR7vVKZYT7a5uBwuim",
        "label": "Stabble Weighted Swap",
        "inputMint": "So11111111111111111111111111111111111111112",
        "outputMint": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        "inAmount": "10000000",
        "outAmount": "1447490",
        "feeAmount": "361",
        "feeMint": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
      },
      "percent": 100
    },
    {
      "swapInfo": {
        "ammKey": "ACWN3nCSHes3LHRRzChhijW7ZCF7tf1msYaFXQ3fkg2A",
        "label": "Stabble Stable Swap",
        "inputMint": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        "inAmount": "1447490",
        "outAmount": "1447598",
        "feeAmount": "14",
        "feeMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
      },
      "percent": 100
    }
  ],
  "scoreReport": null,
  "contextSlot": 325226372,
  "timeTaken": 0.000770323,
  "swapUsdValue": "1.4437186149107980407294677046",
  "simplerRouteUsed": false
}
```

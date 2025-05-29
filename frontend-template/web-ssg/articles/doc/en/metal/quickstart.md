---
id: metal-quickstart
title: SLV Metal - Quickstart
description: SLV Metal - Quickstart
---

SLV Metal is a high-performance bare metal server designed specifically for Solana nodes. 
Choosing the right server for Solana can be challenging, so we provide a list of fully optimized servers.

From hardware specs to network performance and Linux configuration, everything is fine-tuned for maximum efficiency. With SLV Metal, you can deploy Solana nodes in just a few commands.

## SLV Metal List

`slv metal list` command will show you the available SLV Metal servers.

```bash
slv metal list
? 🛡️ Select SLV BareMetal Type (validator)
❯ 🧪 For Solana Testnet Validator
  💰 For Solana Mainnet Validator
  ⚡️ RPC - For Solana RPC Node
  📦 APP - For Trade Bot, DApp and More!
```

## 1. Choose Your Node Type

You can choose the node type that best suits your needs.
  
```bash
slv metal list
? 🛡️ Select SLV BareMetal Type (validator)
❯ 🧪 For Solana Testnet Validator
  💰 For Solana Mainnet Validator
  ⚡️ RPC - For Solana RPC Node
  📦 APP - For Trade Bot, DApp and More!
```

## 2. Choose Your Server Type

```bash
? 🛡️ Select SLV BareMetal Type (validator) › 🧪 For Solana Testnet Validator
🔍 Searching for SLV BareMetals...
? 🛡️ Select a SLV BareMetal to Purchase
❯ ⚡️Zero Distance BareMetal AMD Ryzen 7950X CPU @ 4.5 GHz (16 cores) | Chicago - 198 €/month
  ⚡️Zero Distance BareMetal AMD Ryzen 7950X CPU @ 4.5 GHz (16 cores) | Stockholm - 198 €/month
  ⚡️Zero Distance BareMetal AMD Ryzen 7950X CPU @ 4.5 GHz (16 cores) | Frankfurt - 198 €/month
```

## 3. Get Your Server with the Payment Link

```bash
? 🛡️ Select a SLV BareMetal to Purchase › ⚡️Zero Distance BareMetal AMD Ryzen 7950X CPU @ 4.5 GHz (16 cores) | Chicago - 198 €/month
? 🛡️ Select a SLV BareMetal to Purchase › ⚡️Zero Distance BareMetal AMD Ryzen 7950X CPU @ 4.5 GHz (16 cores) | Chicago - 198 €/month
┌──────────────┬──────────────────────────────────────────────────────────────────────────────┐
│ Product Name │ ⚡️Zero Distance BareMetal AMD Ryzen 7950X CPU @ 4.5 GHz (16 cores) | Chicago │
├──────────────┼──────────────────────────────────────────────────────────────────────────────┤
│ Region       │ Chicago                                                                      │
├──────────────┼──────────────────────────────────────────────────────────────────────────────┤
│ CPU          │ AMD Ryzen 7950X CPU @ 4.5 GHz (16 cores)                                     │
├──────────────┼──────────────────────────────────────────────────────────────────────────────┤
│ RAM          │ 128GB 4800MHz                                                                │
├──────────────┼──────────────────────────────────────────────────────────────────────────────┤
│ Disk         │ 2x NVMe 1TB                                                                  │
├──────────────┼──────────────────────────────────────────────────────────────────────────────┤
│ Network      │ 3Gbps Uplink                                                                 │
├──────────────┼──────────────────────────────────────────────────────────────────────────────┤
│ Price        │ €198/month                                                                   │
└──────────────┴──────────────────────────────────────────────────────────────────────────────┘

🔗 Payment Link:
https://pay.erpc.global/c/pay/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

After completing the payment, you will be able to register your SSH public key with the following command:

$ slv metal status

Login information will appear within a few minutes to an hour after registering your key.

If the login details don’t show up after some time, please reach out via a support ticket on Discord.

ValidatorsDAO Discord: https://discord.gg/C7ZQSrCkYR
```

You will get a payment link to purchase the server. After completing the payment, you will be able to register your SSH public key with the following command:

```bash
$ slv metal status
```

Login information will appear within a few minutes to an hour after registering your key.
If the login details don’t show up after some time, please reach out via a support ticket on Discord.

ValidatorsDAO Discord: [https://discord.gg/C7ZQSrCkYR](https://discord.gg/C7ZQSrCkYR)
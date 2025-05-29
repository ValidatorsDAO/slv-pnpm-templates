---
id: metal-quickstart
title: SLV Metal - クイックスタート
description: SLV Metal - クイックスタート
---

SLV Metal は、Solana ノード専用に設計された高性能ベアメタルサーバーです。
Solana に適したサーバーを選ぶのは難しいため、完全に最適化されたサーバーリストを提供しています。

ハードウェアの仕様からネットワークパフォーマンス、Linux の設定まで、すべてが最大の効率のために微調整されています。SLV Metal を使用すれば、わずか数コマンドで Solana ノードをデプロイできます。

## SLV Metal リスト

`slv metal list` コマンドで利用可能な SLV Metal サーバーを表示できます。

```bash
slv metal list
? 🛡️ Select SLV BareMetal Type (validator)
❯ 🧪 For Solana Testnet Validator
  💰 For Solana Mainnet Validator
  ⚡️ RPC - For Solana RPC Node
  📦 APP - For Trade Bot, DApp and More!
```

## 1. ノードタイプの選択

ニーズに最適なノードのタイプを選択します。
  
```bash
slv metal list
? 🛡️ Select SLV BareMetal Type (validator)
❯ 🧪 For Solana Testnet Validator
  💰 For Solana Mainnet Validator
  ⚡️ RPC - For Solana RPC Node
  📦 APP - For Trade Bot, DApp and More!
```

## 2. サーバータイプの選択

```bash
? 🛡️ Select SLV BareMetal Type (validator) › 🧪 For Solana Testnet Validator
🔍 Searching for SLV BareMetals...
? 🛡️ Select a SLV BareMetal to Purchase
❯ ⚡️Zero Distance BareMetal AMD Ryzen 7950X CPU @ 4.5 GHz (16 cores) | Chicago - 198 €/month
  ⚡️Zero Distance BareMetal AMD Ryzen 7950X CPU @ 4.5 GHz (16 cores) | Stockholm - 198 €/month
  ⚡️Zero Distance BareMetal AMD Ryzen 7950X CPU @ 4.5 GHz (16 cores) | Frankfurt - 198 €/month
```

## 3. 支払いリンクでサーバーを入手

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

🔗 支払いリンク:
https://pay.erpc.global/c/pay/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

支払いが完了すると、以下のコマンドで SSH 公開鍵を登録できるようになります:

$ slv metal status

ログイン情報は、鍵を登録してから数分から1時間以内に表示されます。

ログイン情報が表示されない場合は、Discord のサポートチケットからお問い合わせください。

ValidatorsDAO Discord: https://discord.gg/C7ZQSrCkYR
```

サーバーを購入するための支払いリンクが提供されます。支払いが完了すると、以下のコマンドで SSH 公開鍵を登録できるようになります:

```bash
$ slv metal status
```

ログイン情報は、鍵を登録してから数分から1時間以内に表示されます。
ログイン情報が表示されない場合は、Discord のサポートチケットからお問い合わせください。

ValidatorsDAO Discord: [https://discord.gg/C7ZQSrCkYR](https://discord.gg/C7ZQSrCkYR)

---
id: geyser-grpc-test
title: Solana Geyser gRPC - gRPC Latency Test
description: SLV - Solana Geyser gRPC - gRPC Latency Test
---

このガイドでは、Solana Geyser gRPCサーバーのレイテンシーテストする方法について説明します。

## 前提条件

SLV CLI をインストールしてください:

```bash
curl -fsSL https://storage.slv.dev/slv/install | sh
```

## gRPCレイテンシーテスト

次のコマンドで、Solana Geyser gRPCサーバーのレイテンシーを簡単にテストできます:

```bash
slv check grpc --help
Usage:   slv check grpc
Version: 0.8.2

Description:

  Check gRPC endpoint

Options:

  -h, --help              - Show this help.
  --endpoint  <endpoint>  - gRPC endpoint URL
  --token     <token>     - Token for authentication
```

Geyser gRPCアクセスがない場合は、[Geyser gRPCクイックスタート](/ja/doc/geyser-grpc/quickstart)ガイドを参照してください。

## Geyser gRPCエンドポイント/トークンの設定

次のコマンドで、Geyser gRPCエンドポイント/トークンを対話的に設定できます:

```bash
slv check grpc
? Enter gRPC endpoint URL: ›
```

次に、Geyser gRPC認証トークンを設定してください

```bash
? Enter xToken for gRPC: ›
```

設定完了後、Geyser gRPCサーバーのレイテンシー測定が開始されます。

以下は実際の動作例です：

```bash
? Enter Token for authentication: › xToken
Checking gRPC endpoint: http://localhost:10000
Current latency: 608 ms, slots: 0
Avg latency: 608 ms
Current latency: 1043 ms, slots: 1
Avg latency: 825.5 ms
Current latency: 449 ms, slots: 0
Avg latency: 700 ms
Current latency: 900 ms, slots: 1
Avg latency: 750 ms
Current latency: 1261 ms, slots: 2
Avg latency: 852.2 ms
Current latency: 658 ms, slots: 0
Avg latency: 819.8333333333334 ms
Current latency: 1041 ms, slots: 1
Avg latency: 851.4285714285714 ms
1
Current latency: 504 ms, slots: 0
Avg latency: 808 ms
.
.
.
```

テストを停止するには **Ctrl + C** を押します。

---

## 参考文献: gRPC レイテンシーの仕組み

gRPC のレイテンシーを計測するときに、しばしば 1 秒以上の値が観測されることがあります。これは直感的には「遅い」と感じられるかもしれませんが、Solana ブロックチェーンのブロックタイムが秒単位でしか記録されない（ミリ秒以下を切り捨てている）という特性を踏まえる必要があります。

### 同一リージョンでの接続

まず、gRPC のエンドポイントと同じリージョンにサーバーを配置することが基本的な前提です。たとえば、`grpc-tokyo.erpc.global` のように東京のエンドポイントに接続する場合には、同じ東京リージョンのサーバーを使用することでネットワーク上の遅延を大幅に抑えられます。

### 「1 秒以上遅延」の背景

たとえば、トランザクションが実際には 07:46:46.900 に発生していても、Solana 上では 07:46:46.000 として記録されます。このトランザクションを 07:46:47.200 に受信した場合、単純計算では

    (受信時刻) - (ブロックタイム)
    = 07:46:47.200 - 07:46:46.000
    = 1.2 秒

となり、一見すると 1.2 秒の遅延に見えます。しかし実際には 07:46:46.900 に発生しているため、実際の遅延は約 300 ミリ秒（07:46:47.200 - 07:46:46.900 = 0.3 秒）です。

### 500ms を差し引く計算アプローチ

Solana が秒単位でブロックを扱うため、ブロックタイムがその秒のうち「いつ」実行されたかを正確に知ることはできません。そこで「秒の真ん中（500ms）」を基準として計算を行うと、より現実に近い遅延値を推測できます。つまり、

    (受信時刻) - (ブロックタイム + 0.5 秒)

とすることで、おおまかにミリ秒単位の誤差を補正できるわけです。厳密ではないものの、Solana ブロックの秒単位管理が生む「ずれ」をある程度解消して、実際のレイテンシーに近い値が得られます。

これらの点を考慮しながら計測することで、Solana Geyser gRPC の遅延を正しく把握しやすくなります。時間管理が秒単位であることによる影響を考慮すると、ネットワークやサーバーの物理的配置と合わせて検証することが、より実際のパフォーマンスを正確に捉えるための鍵となります。

---
id: mainnet-rpc-jupiter
title: Solana Mainnet RPC - Setup Jupiter Self-Hosted API
description: SLV - Solana Mainnet RPC - Setup Jupiter Self-Hosted API
---

`slv r setup:jupiter` コマンドを使用して、Jupiter Self-Hosted API をセットアップします。

## Usage

```bash
slv r setup:jupiter
? 🛡️ Do you have a Solana Node Compatabile Server? (no)
❯  yes
   no
```

ここでは `yes` のチュートリアルを進めます。
まだベアメタルサーバーがセットアップされていない場合は、`no` を選択してください。
こちらの[ガイド](/en/doc/metal/quickstart)を参考に、
ベアメタルサーバーを確保してください。

## Jupiter API ノードの名前の設定

Jupiter API ノードの名前を設定します。

```bash
? Enter Jupiter API Name › jupiter-node
```

## Solana RPC エンドポイントの設定

Solana RPC エンドポイントを設定します。
複数のエンドポイントを設定する場合は、スペースで区切ってください。

```bash
? Enter RPC URLs() (http://localhost:8899) ›
```

※ ほとんどの場合、専用RPCノードが必要です。

## Geyser gRPC エンドポイントの設定

Geyser gRPC エンドポイントを設定します。

```bash
? Enter gRPC URL (http://localhost:10000) ›
```

## Geyser gRPC の認証トークンの入力

Geyser gRPC の認証トークンを設定します。

```bash
? Enter xToken for gRPC (xToken) ›
```

## Jupiter API ノードのポート番号の設定

Jupiter API ノードのポート番号を設定します。

```bash
? Enter Jupiter API Port (2001) ›
```

### UFW ファイアウォールの設定

UFW ファイアウォールは、特定の IP アドレスからの SSH 接続のみを許可するように設定されます。
既存のホワイトリストに追加するには `Keep and add more` を選択します。

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

次に、ノードへの接続を許可する IP アドレスを入力します。

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

これでファイアウォールの設定が完了しました。
設定ファイルは `~/.slv/versions.yml` の `jupiter` に保存されます。

その後、ベアメタルサーバーに `solv` ユーザーが作成され、
Jupiter API の設定が `~/.slv/inventory.jupiter.yml` に保存されます。

### Jupiter API ノードのデプロイ

設定を確認したら、デプロイメントが開始されます。

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

Jupiter API ノードのデプロイが完了しました。


## Curl でのテスト

Jupiter API ノードが正常にデプロイされたかどうかを確認するために、
以下のコマンドを実行してください。

```bash
curl --location 'http://<your-server-ip>/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=10000000' | jq
```

正常にデプロイされていれば、
アウトプットは以下のようになります。

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

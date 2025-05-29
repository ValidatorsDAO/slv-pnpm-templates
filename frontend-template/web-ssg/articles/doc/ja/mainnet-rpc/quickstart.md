---
id: mainnet-rpc-quickstart
title: Solana メインネット RPC - クイックスタート
description: SLV - Solana メインネット RPC - クイックスタート
---


## はじめに

Solana メインネット RPC のデプロイには、SLV コマンドラインツールを使用します。
このクイックスタートでは SLV コマンドラインツールを使用して、
Solana メインネット RPC SPLトークンアカウントインデックス及び Geyser Yellow plugin 付き をデプロイする方法を説明します。

サーバーには Ubuntu 24.04 LTS がクリーンインストールされている必要があります。

### ベアメタルサーバーの準備

Solana公式はベアメタルサーバーでの使用を推奨しています。
ベアメタルサーバーは、他の仮想化された環境よりも高いパフォーマンスを提供します。
Solana のRPCノードは高い CPU とメモリの要件があります。
特にインデックスを有効にする場合、通常、最低でも 24 コアの CPU と 768 GB のメモリが必要です。
安定したパフォーマンスを得るためには 1 TB 以上のメモリが推奨されます。

`slv rpc init` コマンドを実行すると、ベアメタルがすでにセットアップされているかどうかを確認するための質問が表示されます。

```bash
➜ slv rpc init
? 🛡️ Do you have a Solana Node Compatabile Server? (no)
❯ yes
  no
```

ここでは `yes` のチュートリアルを進めます。
まだベアメタルサーバーがセットアップされていない場合は、`no` を選択してください。
こちらの[ガイド](/ja/doc/metal/quickstart)を参考に、
ベアメタルサーバーを確保してください。

## Solana メインネット Jito RPC のデプロイ

このコマンドを実行すると、デプロイに必要な情報を入力するよう求められます。

```bash
slv rpc init
```

### Solana バリデータのアイデンティティキーを生成または設定

新しいアイデンティティキーを生成するか、既存のアイデンティティキーを設定できます。
ここでは既存のアイデンティティキーを設定する例を示します。

```bash
? Do you want to create a new identity key now? (Y/n) › Yes
🔑 Generating new identity key...
✨ Generated Key: gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV
✨ Moved Key to: /Users/fumi/.slv/keys/gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV.json
```

### Solana CLI の選択

Solana CLI のバージョンを選択します。

```bash
? Select Validator Type (jito)
❯ jito
```

### リージョンの選択

Jito ブロックエンジンのリージョンを選択します。

```bash
? 🌐 Select Block Engine Region
❯ amsterdam
  frankfurt
  ny
  salt_lake_city
  tokyo
```

### RPC ポートの設定

Solana RPC ポートを設定します。

```bash
? Select Solana RPC port (8899)
```

### Snapshot のダウンロード先URLの設定(オプション)

Snapshot のダウンロード先URLを設定します。
特に設定がない場合は Enter キーを押してスキップしてください。

```bash
? Enter Snapshot URL(Optional) () › 
```

### RPC タイプの選択

RPC タイプを選択します。

```bash
? Select an RPC type
❯ geyser-yellowstone
```

### gRPC ポートの設定

gRPC ポートを設定します。

```bash
? Select Solana gRPC port (10000)
```

### Geyser gRPC の トークン設定

セキュリティのために Geyser gRPC のトークンを設定します。

```bash
? Please enter your x_token (xToken) ›
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

このようにして、ファイアウォールの設定が完了しました。
あとでホワイトリストを更新するには以下のコマンドを実行します。

```bash
slv v  update:allowed-ips
```

```bash
✔︎ Success
✔ Inventory updated to /Users/fumi/.slv/inventory.mainnet.rpcs.yml
✔ Successfully created solv user on gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV
✔︎ mainnet_rpcs inventory file has been saved to /Users/fumi/.slv/inventory.mainnet.rpcs.yml
Now you can deploy with:

$ slv rpc deploy -n mainnet -p gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV    
```

その後、ベアメタルサーバーに `solv` ユーザーが作成され、
Solana RPC の設定が `~/.slv/inventory.mainnet.rpcs.yml` に保存されます。

### Solana RPC ノードのデプロイ

設定を確認したら、デプロイを開始します。

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

完了です！Solana RPC ノードが無事にデプロイされました。
Solana ネットワークとの同期には少し時間がかかります。

### デバッグ・モニタリング

デプロイ後、Solana RPC ノード内でデバッグとモニタリングを行うことができます。
サーバーへログイン後、
以下のコマンドを使用して、Solana RPC ノードの状態を確認できます。

```bash
ssh solv@<your-server-ip>
solv m
```

`solv` は `agave-validator -l /mnt/ledger` のエイリアスです。
RPCノードデプロイ時に この設定が `~/.profile` に追加されています。


### SLV RPC コマンド

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
```

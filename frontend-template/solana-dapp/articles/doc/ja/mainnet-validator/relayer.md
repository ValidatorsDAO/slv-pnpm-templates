---
id: mainnet-validator-relayer
title: Solana Mainnet Validator - Setup Relayer
description: SLV - Solana Mainnet Validator - Setup Relayer
---

`slv v setup:relayer` コマンドは、Jito Relayer をセットアップするために使用されます。

## Usage

以下のコマンドを実行します:

```bash
slv v setup:relayer
? 🛡️ Do you have a Solana Node Compatabile Server? (no)
❯  yes
   no
```

ここでは `yes` のチュートリアルを進めます。
まだベアメタルサーバーがセットアップされていない場合は、`no` を選択してください。
こちらの[ガイド](/ja/doc/metal/quickstart)を参考に、
ベアメタルサーバーを確保してください。


## Mainnet Validator の アイデンティティキーを設定

Relayer が使用する Mainnet Validator のアイデンティティキーを設定します。

```bash
? Enter Validator Identity › gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV
```

⚠️ あなたの Relayer 秘密鍵を ~/.slv/keys/<your-relayer-pubkey>.json に配置してください


## Relayer のアイデンティティキーを設定

Relayer のアイデンティティキーを設定します。

```bash
? Enter Relayer Account Address › 3QJmZ2tJ4p7W3U7b7zj1Z8YXf2J6JZ8F1
```

## Jito ブロックエンジンリージョンの選択

Jito ブロックエンジンのリージョンを選択します。

```bash
? 🌐 Select Block Engine Region
❯ amsterdam
  frankfurt
  ny
  salt_lake_city
  tokyo
```

## Solana RPC エンドポイントの設定

Solana RPC エンドポイントを設定します。
複数のエンドポイントを設定する場合は、半角スペースで区切って入力してください。

```bash
? Enter Solana RPC Endpoint › http://localhost:8899 https://pro.erpc.global
```

## Solana RPC Websocket エンドポイントの設定

Solana RPC Websocket エンドポイントを設定します。
複数のエンドポイントを設定する場合は、半角スペースで区切って入力してください。

※ 複数のエンドポイントを設定する場合は、RPC エンドポイントと同じ順番で入力してください。

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

その後、ベアメタルサーバーに `solv` ユーザーが作成され、
`~/.slv/inventory.relayer.yml` ディレクトリに Relayer の設定ファイルが作成されます。

Relayer の設定ファイルは、`slv v deploy:relayer` コマンドを実行する際に使用されます。

## ファイアウォールの設定

Relayer に関するポートの設定は

`~/.slv/versions.yml` ファイルの `mainnet-validators` セクションに記載されています。

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

必要に応じて、Relayer に必要なIPアドレスを追加してください。

```bash
slv v update:allowed-ips
```


## Jito Relayer のデプロイ

上記ログで示されているように、以下のコマンドを実行して Relayer をデプロイします。

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

Relayer のデプロイが完了しました。

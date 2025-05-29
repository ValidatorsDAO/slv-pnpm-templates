---
id: mainnet-validator-quickstart
title: Solana メインネット バリデータ - クイックスタート
description: SLV - Solana メインネット バリデータ - クイックスタート
---

## はじめに

Solana メインネット バリデータのデプロイには、SLV コマンドラインツールを使用します。
このクイックスタートではメインネットバリデーターのスペアを起動し、デプロイする方法を説明します。
SLV では `キーレスオペレーション` がサポートされています。
バリデーターのノード内には、大切な情報は一切保存されません。

サーバーには Ubuntu 24.04 LTS がクリーンインストールされている必要があります。

### ベアメタルサーバーの準備

Solana公式はベアメタルサーバーでの使用を推奨しています。
ベアメタルサーバーは、他の仮想化された環境よりも高いパフォーマンスを提供します。
Solana のノードは高い CPU とメモリの要件があります。通常、最低でも 24 コアの CPU と 384 GB のメモリが必要です。
安定した収益を得るためには 768 GB 以上のメモリが推奨されます。

`slv v init` コマンドを実行すると、ベアメタルがすでにセットアップされているかどうかを確認するための質問が表示されます。

```bash
➜ slv v init
? Select Solana Network (testnet) › mainnet
? 🛡️ Do you have a Solana Node Compatabile Server? (no)
❯ yes
  no
```

ここでは `yes` のチュートリアルを進めます。
まだベアメタルサーバーがセットアップされていない場合は、`no` を選択してください。
こちらの[ガイド](/ja/doc/metal/quickstart)を参考に、
ベアメタルサーバーを確保してください。

## Solana メインネット Jito バリデーターのデプロイ

このコマンドを実行すると、デプロイに必要な情報を入力するよう求められます。

```bash
slv v init
```

新しい SLV デプロイでは、常に unstaked-keypair.json がアイデンティティキーとして使用されます。
これは二重投票などを防ぐためのベストプラクティスです。

そのため、デプロイ後に `slv v set:identity` を使用して認証済みのアイデンティティキーをセットしてください。

メインネットバリデーター運用の場合、ほとんどの場合 `slv v switch` を使用してアイデンティティキーを変更します。
ノーダウンタイムマイグレーションについては、[こちらのガイド](/ja/doc/mainnet-rpc/update/)を参照してください。

### Solana ネットワークを選択

デプロイしたい Solana ネットワークを選択します。

```bash
slv v init
? Select Solana Network (mainnet)
  testnet
❯ mainnet
```

### デフォルトのユーザー名を入力

通常、デフォルトのユーザー名は `ubuntu` または `root` であることが多いです。

```bash
? What's the user for the server? (ubuntu) › ubuntu
```

### サーバーの IP アドレスを入力

サーバーの IP アドレスを入力します。

```bash
? What's the IP address of the server? ›
```

### SSH 用の RSA キーを設定

※ ご自身の RSA キーのパスを設定してください。デフォルトのパスは `~/.ssh/id_rsa` です。

```bash
? What's the path to your RSA key? (~/.ssh/id_rsa) › ~/.ssh/id_rsa
🔍 Checking SSH connection...
✔︎ SSH connection succeeded
```

その後、SLV がサーバーへの接続をチェックします。接続が成功すると、次のステップへ進みます。

### Solana バリデータタイプの選択

Solana バリデータのタイプを選択します。

```bash
? Select Validator Type (jito)
❯ jito
```

※現在は Jito バリデータのみサポートされています。

### コミッションレートの設定

バリデータのコミッションレートを設定します。
※ 1000の場合は 10% になります。

```bash
? Enter Commission Bps (1000) › 1000
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

### Relayer URL の設定

Relayer URL を入力します。

```bash
? Enter Relayer URL (http://localhost:11226) › http://localhost:11226
```

### Relayer アカウントの設定(オプショナル)

Relayer アカウントを入力します。
特に設定がない場合は Enter キーを押してスキップしてください。

```bash
? Enter Relayer Account(Optional) () ›
```

### Staked RPC Identity の設定（オプショナル）

Staked RPC Identity を入力します。
特に設定がない場合は Enter キーを押してスキップしてください。

```bash
? Enter Staked RPC Identity(Optional) () ›
```

### Snapshot URL の設定（オプショナル）

Snapshot URL を入力します。
特に設定がない場合は Enter キーを押してスキップしてください。

```bash
? Enter Snapshot URL(Optional) () › http://
```

### Solana バリデータのアイデンティティキーを生成または設定

新しいアイデンティティキーを生成するか、既存のアイデンティティキーを設定できます。
ここでは既存のアイデンティティキーを設定する例を示します。

```bash
? Do you want to create a new identity key now? (Y/n) › No
? Please Enter Your Identity Public Key › EjDwu2Czy8eWEYRuNwtjniYks47Du3KNJ6JY9rs3aFSV
⚠️ Please place your identity key in

  ~/.slv/keys/EjDwu2Czy8eWEYRuNwtjniYks47Du3KNJ6JY9rs3aFSV.json
.
.
✔︎ Success
✔ Inventory updated to ~/.slv/inventory.yml
✔ Successfully created solv user on x.x.x.x
```

アイデンティティキーを `~/.slv/keys/<your-pubkey>.json` に配置してください。
※この鍵はノード内にはコピーされませんが、のちに認証済みのアイデンティティキーに変更するために必要です。

その後、SLV がパスワードを用いて `solv` ユーザーを作成します。

### Solana バリデータの投票アカウントキーを生成または設定

新しい投票アカウントキーを生成するか、既存の投票アカウントキーを設定できます。
ここでは既存の投票アカウントキーを設定する例を示します。

```bash
? Do you want to create a new vote account key now? (Y/n) › No
? Please Enter Your Vote Account Public Key > <your-vote-account>
```

### 投票アカウントの Authority キーを入力

投票アカウントから報酬を引き出すために使用する Authority の PublicKey を入力してください。

```bash
? Please Enter Your Vote Account's Authority Key › <your-authority-pubkey>
✔︎ Validator mainnet config saved to ~/.slv/inventory.mainnet.validators.yml
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

IP やバージョン情報などの設定内容が `~/.slv/versions.yml` に保存されます。

そしてバリデーターノードの情報は `~/.slv/inventory.mainnet.validators.yml` に保存されます。

### バリデータのデプロイ

設定を確認したら、デプロイを開始します。

```bash
slv v deploy -n mainnet -p elsoul-spare
Your Mainnet Validators Settings:
┌────────────────┬──────────────────────────────────────────────┐
│ Identity Key   │ elsoul-spare                                 │
├────────────────┼──────────────────────────────────────────────┤
│ Vote Key       │ ELLB9W7ZCwRCV3FzWcCWoyKP6NjZJKArLyGtkqefnHcG │
├────────────────┼──────────────────────────────────────────────┤
│ Authority Key  │ auth                                         │
├────────────────┼──────────────────────────────────────────────┤
│ IP             │ 185.209.178.39                               │
├────────────────┼──────────────────────────────────────────────┤
│ Validator Type │ jito                                         │
├────────────────┼──────────────────────────────────────────────┤
│ Version        │ 2.1.16                                       │
└────────────────┴──────────────────────────────────────────────┘
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

完了です！Solana バリデータがデプロイされました。Solana ネットワークとの同期には少し時間がかかります。

### デバッグ・モニタリング

デプロイ後、Solana RPC ノード内でデバッグとモニタリングを行うことができます。
以下のコマンドを使用して、Solana RPC ノードの状態を確認できます。

```bash
$ solv m
```

`solv` は `agave-validator -l /mnt/ledger` のエイリアスです。
RPCノードデプロイ時に この設定が `~/.profile` に追加されています。


### アイデンティティキーの変更

デプロイ後、アンステーク済みのキーを認証済みのアイデンティティキーに変更する必要があります。

```bash
slv v set:identity -n mainnet --pubkey <your-identity-pubkey>
```

このコマンドにより、アイデンティティキーが認証済みのキーに変更されます。

※ノーダウンタイムマイグレーションを行う場合は、こちらの[ガイド](/ja/doc/mainnet-rpc/update)を参照してください。

### SLV Validator コマンド

```bash
Usage:   slv validator
Version: 0.8.2

Description:

  Manage Solana Validator Nodes

Options:

  -h, --help  - Show this help.

Commands:

  init                - Initialize a new validator
  deploy              - Deploy Validators
  list                - List validators
  set:identity        - Set Validator Identity
  set:unstaked        - Set Validator Identity to Unstaked Key Stop/Change Identity/Start
  restart             - Stop and Start Validator
  setup:firedancer    - Setup Firedancer Validator - Testnet Only
  setup:relayer       - Setup Jito Relayer - Mainnet Only
  deploy:relayer      - Setup Jito Relayer - Mainnet Only
  update:version      - Update Validator Version
  update:script       - Update Validator Startup Config
  apply               - Apply Ansiible Playbook
  update:allowed-ips  - Update allowed IPs for mainnet validator nodes
  switch              - Switch Validator Identity - No DownTime Migration
```

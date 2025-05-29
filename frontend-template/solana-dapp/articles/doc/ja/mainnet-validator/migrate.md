---
id: mainnet-validator-migrate
title: Solana Mainnet Validator - Migrate Solana Validator Node With No Downtime
description: SLV - Solana Mainnet Validator - Migrate Solana Validator Node With No Downtime
---

## 🚀 Solana メインネットバリデータのノーダウンタイム移行ガイド

既存のメインネットバリデータを停止せずに、新しいサーバーへ移行する方法を解説します。

## 前提条件

Solana メインネットのバリデーターノードがすでにセットアップされていることを前提とします。

以下の２つのバリデーターノードがセットアップされていると仮定します。

**1. アクティブなメインネットバリデーターノード** - 現在稼働中のバリデーターノード

**2. 新しいメインネットバリデーターノード** - 移行先のバリデーターノード

このガイドでは、

`アクティブなメインネットバリデーターノード` のアクティブアイデンティティ公開鍵を `gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV` と仮定します。

`新しいメインネットバリデーターノード` のアクティブアイデンティティ公開鍵を `epics-validator-spare` と仮定します。

双方のバリデーターノードは、`slv v init` コマンドを使用してセットアップされていることを前提とします。

⚠️注意事項

両ノードはSolana バリデータのIPとアイデンティティキー以外は同じ設定にしてください。

例えば、スペアのバリデーターをセットアップする場合、
`slv v init` コマンドを使用してセットアップする際に、
以下のように仮のアイデンティティ名を使用してセットアップします。

```bash
slv v init
.
.
? Do you want to create a new identity key now? (Y/n) › No
? Please Enter Your Identity Public Key › epics-validator-spare
```

## バリデーターノードの移行

`slv v switch` コマンドを実行すると、移行先のネットワークを選択する画面が表示されます。

## Solana のネットワークを選択

```bash
slv v switch
? Select Solana Network ( mainnet)
  testnet
❯ mainnet
```

ここでは  mainnet を選択します。

## 移行元のバリデーターのアクティブアイデンティティ公開鍵を入力

```bash
✨ Switching Testnet Validator Identity...
? From Validator Identity › gnz9qntHdXDRVbthem2e28F8Asta8Lqp5FRDoDVrSLV
```

## 移行先のバリデーターのアクティブアイデンティティ公開鍵を入力

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

以上で、バリデーターノードの移行が完了しました。
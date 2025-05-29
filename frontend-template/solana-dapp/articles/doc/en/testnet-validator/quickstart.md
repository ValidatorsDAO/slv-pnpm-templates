---
id: testnet-validator-quickstart
title: Solana Testnet Validator Quickstart
description: SLV - Solana Testnet Validator Quickstart
---

## Installation & Validator Launch

```bash
curl -fsSL https://storage.slv.dev/slv/install | sh
slv validator init
slv validator deploy
```

## Deploy Solana Validator Testnet with Firedancer

🚀 Prerequisites
Ensure your server has a clean installation of Ubuntu 24.04 LTS.

🔑 About Validator Keys
For new SLV deployments, the initial identity key will always be unstaked-keypair.json, as a best practice to avoid critical issues like double voting.

SLV supports keyless operation, meaning no sensitive validator keys or confidential data are ever stored on your validator node.

✅ Setting Your Validator Identity
After deployment, make sure to set your verified validator identity key using the following command:

```bash
slv v set:identity -n testnet --pubkey <your-identity-pubkey>
```

### Bare Metal Server Preparation

Solana officially recommends using bare metal servers.
Bare metal servers provide higher performance than other virtualized environments.
Solana nodes have high CPU and memory requirements. 
Typically, a minimum of 24 CPU cores and 384 GB of memory is required.
For stable earnings, 768 GB or more of memory is recommended.

When you run the `slv v init` command, you'll be asked if you already have a bare metal server set up.

```bash
➜ slv v init
? Select Solana Network (testnet) › mainnet
? 🛡️ Do you have a Solana Node Compatabile Server? (no)
❯ yes
  no
```

We'll proceed with the `yes` tutorial here.
If you haven't set up a bare metal server yet, select `no`.
Please refer to this [guide](/en/doc/metal/quickstart) to secure a bare metal server.

### Input Server's Default Username

Most of the time, the default username is `ubuntu`.

```bash
slv v init
? What's the user for the server? (ubuntu) › ubuntu
```

### Input Server's IP Address

Input the IP address of the server.

```bash
? What's the IP address of the server? ›
```

### Set RSA Key for SSH

※ Please set the path to your RSA key. The default path is `~/.ssh/id_rsa`. ※
Currently, only the default path is supported.Please set the path to your RSA
key. The default path is `~/.ssh/id_rsa`.

```bash
? What's the path to your RSA key? (~/.ssh/id_rsa) › ~/.ssh/id_rsa
🔍 Checking SSH connection...
✔︎ SSH connection succeeded
```

Then SLV will check the connection to the server. If the connection is
successful, the next step will be prompted.


### Generate or Set the Solana Validator Identity

You can generate a new identity key or set an existing identity key. This
example shows how to set an existing identity key.

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

Please place your identity key in `~/.slv/keys/<your-pubkey>.json`. Then, slv
will create solv user with your password.

### Generate or Set the Solana Vote Account

You can generate a new vote account key or set an existing vote account key.
This example shows how to set an existing vote account key.

```bash
? Do you want to create a new vote account key now? (Y/n) › No
? Please Enter Your Vote Account Public Key > <your-vote-account>
⚠️ Please place your voteAccount pubkey in

  ~/.slv/keys/<your-vote-account>.json
```

Please place your vote account key in `~/.slv/keys/<your-vote-account>.json`.

### Set Your Authority Public Key

Please input your authority public key. This key is used to withdraw rewards
from the vote account.

```bash
? Please Enter Your Vote Account's Authority Key › <your-authority-pubkey>
✔︎ Validator testnet config saved to ~/.slv/inventory.testnet.validators.yml

Now you can deploy with:

$ SLV v deploy -n testnet
```

Now your configuration is saved to `~/.slv/inventory.testnet.validators.yml`.

### Deploy the Solana Validator

Once you confirm the configuration, the deployment will start.

```bash
slv v deploy -n testnet
Your Testnet Validators Settings:
┌────────────────┬──────────────────────────────────────────────┐
│ Identity Key   │ EjDwu2Czy8eWEYRuNwtjniYks47Du3KNJ6JY9rs3aFSV │
├────────────────┼──────────────────────────────────────────────┤
│ Vote Key       │ EwoVPLUhdhm722e7QWk8GMQ43917qRXiC9HFyefEMiSV │
├────────────────┼──────────────────────────────────────────────┤
│ Authority Key  │ EcT4NsMPwxanusdy3dza5nznqwuKo9Pz3GzW5GPD32SV │
├────────────────┼──────────────────────────────────────────────┤
│ IP             │ x.x.x.x                                      │
├────────────────┼──────────────────────────────────────────────┤
│ Validator Type │ firedancer                                   │
├────────────────┼──────────────────────────────────────────────┤
│ Version        │ 0.302.20104                                  │
└────────────────┴──────────────────────────────────────────────┘
? Do you want to continue? (Y/n) › Yes
```

It's done! Your Solana Validator is now deployed. It will take some time to
catch up with the Solana network.

### Debugging & Monitoring

You can debug and monitor the Solana RPC node after deployment.

```bash
$ solv m
```

`solv` is an alias for `agave-validator -l /mnt/ledger`.
This setting is added to `~/.profile` during the RPC node deployment.


### Change the Identity Key from Unstaked Key to Authorized Identity Key

After the deployment, you need to change the identity key from the unstaked key

to the authorized identity key.

```bash
slv v set:identity -n testnet --pubkey <your-identity-pubkey>
```

This command sets your identity key from your local computer at:

`~/.slv/keys/<your-identity-pubkey>.json`

to your validator node.

No key information is stored on the validator node 🛡️

### Restart Firedancer

If you have any issues with the validator, you can restart the firedancer with
the following command.

If you use the `--rm` option, the validator will be stopped and removed ledger
and snapshot dirs, and Download Snapshot with the snapshot finder and start the
validator.

```bash
slv v restart -n testnet --pubkey <your-identity-pubkey> --rm
```

### SLV Validator Commands

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

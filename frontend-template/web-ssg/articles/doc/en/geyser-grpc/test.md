---
id: geyser-grpc-test
title: Solana Geyser gRPC - gRPC Latency Test
description: SLV - Solana Geyser gRPC - gRPC Latency Test
---

This guide will show you how to test the latency of the Solana Geyser gRPC server.

## Prerequisites

Install SLV CLI:

```bash
curl -fsSL https://storage.slv.dev/slv/install | sh
```

## Test gRPC Latency

You can easily test the latency of the Solana Geyser gRPC server with the following command:

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

If you don't have a Geyser gRPC Access, please refer to the [Geyser gRPC Quickstart](/en/doc/geyser-grpc/quickstart) guide.

## Set Geyser gRPC Endpoint/Token

You can interactively set the Geyser gRPC endpoint/token with the following command:

```bash
slv check grpc
? Enter gRPC endpoint URL: ›
```

Then, Please set Geyser gRPC Authentication Token

```bash
? Enter xToken for gRPC: ›
```

The test will then proceed to check the latency of the Geyser gRPC server.

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

You can stop the test by pressing `Ctrl + C`.

---

## Reference: Understanding gRPC Latency

When measuring gRPC latency, you might see values of over one second. This can initially feel "slow," but remember that Solana’s block time is only recorded at the second level—milliseconds are truncated.

### Connecting in the Same Region

First, ensure your server is located in the same region as the gRPC endpoint. For instance, if you’re connecting to `grpc-ams1.erpc.global`, you should place your server in Amsterdam as well to minimize network latency.

### Why You Might See “Over 1 Second” Latency

Consider a transaction that actually occurs at 07:46:46.900, but Solana records it as 07:46:46.000. If you receive it at 07:46:47.200, a straightforward calculation yields:

    (Receive Time) - (Block Time)
    = 07:46:47.200 - 07:46:46.000
    = 1.2 seconds

At first glance, this looks like 1.2 seconds of latency. However, because the transaction really happened at 07:46:46.900, the actual latency is only about 300ms:
07:46:47.200 - 07:46:46.900 = 0.3 seconds.

### Subtracting 500ms as an Approximation

Because Solana rounds down to the nearest second, we don’t know exactly where in that second the transaction took place. A reasonable approximation is to assume a midpoint (500ms), so the formula becomes:

    (Receive Time) - (Block Time + 0.5 seconds)

While not perfectly precise, this helps offset the missing millisecond data, providing a closer estimate of actual gRPC latency.

By keeping these considerations in mind, you can more accurately gauge Solana Geyser gRPC latency. The second-level time recording on Solana necessitates factoring in potential rounding discrepancies, as well as ensuring proper server and endpoint placement to reflect real-world performance.

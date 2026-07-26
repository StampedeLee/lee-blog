# MHA、GQA和MLA

## MHA（Multi-Head Attention）

MHA在每个注意力头在不同子空间学习序列元素不同的相关性。

Multi-Head Attention 为什么复杂度是：

$$
O(N^2 \cdot d)
$$

核心原因就在于：

> Attention 要计算序列中每一个 token 和所有其他 token 的关系。

## 特点

- 并行计算
- 捕捉长距离依赖
- 多头学习不同类型的信息
- 动态词表示（例如 apple，可以指代食物和公司）

## 使用场景/意义

应用于所有 Transformer 结构中。

- 不依赖位置顺序关注任何词元；
- 具有高效并行性。

## 局限性

- 计算复杂度高；
- 显存占用大。


# GQA（Grouped Query Attention）

GQA 是 MQA 和 MHA 的折中。

## MQA

多个查询头，对应一组值和键。

可以将 KV Cache 削减到原来的 1/10 甚至 1/100。

由于极大减少了键值参数，表示能力变弱。

## GQA

将注意力头划分为多个组，每个组共享一套键值投影。

分组数为 G：

$$
G=1 \rightarrow MQA
$$

$$
G=h \rightarrow MHA
$$

内存占用约为 1/8。

取得性能与效率的良好平衡。


# MLA（Multi-head Latent Attention）

MLA：多头潜在注意力机制。

核心思想：

> 先压缩，用时解压。

压缩 Key 和 Value 到低维潜在空间。

MLA 引入一个低维潜在向量：

$$
c_{KV}
$$

将高维 Key-Value 信息压缩成一个更小的 latent vector。

## 使用场景

- 超长上下文；
- 大模型推理。
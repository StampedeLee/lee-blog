# Embedding

## 1. Word2Vec

Word2Vec 主要包括：

- Skip-gram
- CBOW（Continuous Bag of Words）

其目标：

> 分辨真实的上下文词和噪声词。

由此引出了：

## 负采样（Negative Sampling）

负采样的核心思想：

把：

> “预测整个词表中哪个词最可能出现”的多分类问题

转换成：

> 多个简单的二分类问题。

公式：

$$
\log \sigma(v_c \cdot v_w)
+
\sum_{i=1}^{K}
\log \sigma(-v_{n_i} \cdot v_w)
$$

---

## Skip-gram

Skip-gram：

> 给定中心词（Center Word），预测上下文词（Context Word）。

结构：

- 一个浅层神经网络；
- 一层隐藏层（Embedding层）；
- 输出层。

目标：

通过中心词学习预测附近出现的词。

---

## CBOW

CBOW：

> 给定上下文词预测中心词。

通过上下文词的向量：

- 通常取平均；
- 或进行拼接；

得到上下文表示，然后预测中心词。

---

## Word2Vec总结

Skip-gram 和 CBOW 最终都会使：

> 语义相似的词在空间中距离更近。

---

负采样通过：

> “拉近中心词与真实上下文词、推远中心词与随机负样本”

来训练词向量。

最终得到的嵌入矩阵，本质上就是：

> 一个“词编号到词向量”的可训练查找表。

---

# 2. GloVe（Global Vector）

## 核心特点

GloVe 是一种：

> Count-based（基于统计）的词嵌入方法。

---

## 共现统计（Co-occurrence）

GloVe 的核心：

> 两个词在一定范围内一起出现。

通过统计：

词与词之间的共现关系。

---

GloVe：

> 利用整个语料库中“词和词一起出现的统计规律”，学习每个词的向量表示。

具体过程：

1. 构建共现矩阵 X；
2. 通过优化目标函数；
3. 使词向量的点积接近词对共现次数的对数；

最终：

> 将高维共现信息压缩成低维向量。

---

# 3. Word2Vec 与 GloVe 对比

## 1. 局部 vs 全局

### Word2Vec

局部上下文预测模型。

特点：

- 根据局部窗口中的上下文学习；
- 不需要完整统计整个语料库。

---

### GloVe

利用全局统计信息。

特点：

- 需要提前统计完整的共现矩阵；
- 无法实时更新。

---

## 2. 损失函数设计

### Word2Vec

优化：

> 交叉熵目标函数。

目标：

> 最大化正确词出现的概率。

训练优化：

- 负采样；
- 层次 Softmax。

---

### GloVe

使用：

> 加权平方损失。

目标：

> 直接拟合共现次数（通常是 log 共现次数）。

特点：

- 根据词频调整权重；
- 减少高频词或低频词的影响。

---

## 3. 效率与效果

### GloVe

优势：

- 收敛更快；
- 利用全局统计信息，通常较快达到较好效果。

缺点：

- 需要存储和预计算大型共现矩阵。

---

### Word2Vec

优势：

- 内存占用更小；
- 不需要显式保存共现矩阵；
- 可以在线学习。

---

# 4. 基于 Transformer 的词嵌入机制

现代 Transformer 使用动态词嵌入。

主要包括：

- Token Embedding
- Position Embedding
- Segment Embedding

---

## Token Embedding

作用：

> 把 Token ID 映射成对应的向量。

即：

```
Token ID

↓

Embedding Vector
```

---

## Position Embedding

作用：

> 为位置赋予向量表示。

BERT 使用：

> 可学习的绝对位置嵌入（learnable absolute positional embedding）。

并非：

> 三角函数编码。

位置向量需要通过训练学习得到。

---

## Segment Embedding

分段嵌入。

BERT 特有。

作用：

> 区分输入中的不同句子片段。

例如：

Segment A：

给属于 A 句子的向量加上：

$$
E_A
$$

Segment B：

给属于 B 句子的向量加上：

$$
E_B
$$

一般 GPT 不使用这种方式。

---

## 最终 Embedding

上述三个部分：

- Token Embedding
- Position Embedding
- Segment Embedding

进行：

> 逐元素相加（element-wise addition）

得到最终的嵌入表示。

---

# 5. 预训练任务与优化

## MLM（Masked Language Modeling）

遮盖：

> 15% 的 Token。

目的：

逼迫：

- 词嵌入；
- Transformer；

捕捉更加丰富的语义信息。

---

## NSP（Next Sentence Prediction）

任务：

> 判断是否为下一句。

用于学习句子之间的关系。

---

# 6. Transformer 动态词嵌入优势

基于 Transformer 的动态词嵌入相比传统静态词嵌入具有明显优势。

---

## 1. 多义词处理

Transformer 可以：

> 根据上下文生成不同的词表示。

因此有效解决：

> 一词多义问题。

例如：

同一个词在不同上下文中，可以拥有不同的语义表示。

---

## 2. 深层次语义信息

经过多层 Transformer 的注意力编码后：

词向量不仅包含：

- 词本身的信息；

还融合：

- 句子中的上下文关系；
- 复杂的语法结构；
- 长距离依赖信息。

---

## 3. 下游任务效果

预训练模型：

- BERT；
- GPT；

在大规模语料上学习丰富的语言知识。

通过微调：

即可适用于各种 NLP 任务：

- 文本分类；
- 问答；
- 机器翻译。

相比 Word2Vec 等静态嵌入：

Transformer 嵌入具有：

- 更强的语义理解能力；
- 更强的任务适应能力。

---

# 7. 词级别 Embedding 与子词 Embedding

## 词级别（Word-level）

代表：

- Word2Vec；
- GloVe。

问题：

### 未登录词（Out-of-Vocabulary）

词表之外的新词无法表示。

---

### 形态变化缺乏关联

例如：

```
play
playing
played
```

词级模型难以捕捉它们之间的关系。

---

# 子词（Subword）

优势：

子词可以：

> 拼出几乎所有词。

因此形成：

> 开放词汇表（Open Vocabulary）。

优势：

- 可以处理未登录词；
- 拥有形态信息；
- 可以利用前缀和后缀信息；
- 在词表规模和语料覆盖率之间达到平衡。
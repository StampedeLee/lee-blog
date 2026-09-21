# LangGraph

## 1. LangGraph 的四个核心概念

* **State：状态**
* **Node：节点**
* **Edge：边**
* **Graph：图**

LangGraph 的核心优势是：**支持复杂、可循环的 Agent 工作流。**

LangGraph 是图结构，执行逻辑不一定是单向线性的。这非常适合 **Deep Research、Reflection、ReAct、多 Agent 协作** 等需要：

```text
判断 → 执行 → 检查 → 再判断
```

这类循环式执行逻辑的任务。

## 2. LangChain 的问题

废弃 LangChain 这个框架，主要核心的原因是它中间做了层层的封装。

它为了可以适用各种各样的场景、各种不同的 Skill，做了层层封装，导致整个系统变得非常冗余。

## 3. Dify 的限制

Dify 的一个重要限制是：**工作流主要是 DAG（Directed Acyclic Graph，有向无环图）**。

这意味着它的工作流天然更偏向单向执行，难以直接实现 Deep Research 这种需要**决策循环**的复杂流程。

另外，Dify 的开源版本后端使用 **Flask**，因此在高并发 Agent 场景下可能存在一定的工程局限。

---

## LangChain

* **线性顺序执行**
* 封装层较多，系统较冗余
* **不支持复杂循环与灵活分支**
* 复杂 Agent 场景下扩展性较差

## AutoGen

* **以多 Agent 对话协作为核心**
* 适合角色间交互
* **流程控制能力较弱**
* **状态管理和复杂工作流编排能力不足**

## LangGraph

* **图结构工作流**
原生支持循环
LangGraph 天然适合带有循环、条件判断和反复执行的 Agent 工作流。
可监控、可测试
整个工作流中的节点、状态和执行路径更容易进行监控、调试和测试。
原生支持异步协程
LangGraph 天生支持异步执行，更适合包含大量 LLM、搜索、数据库等 I/O 调用的 Agent 场景。
相比之下， 原生Dify 使用了flask更偏同步阻塞式执行，因此在复杂、高并发 Agent 场景下可能存在一定局限。

>**一个Agent框架的可测试性非常重要！**


LangGraph专门设计了一种状态叫reducer
普通状态：新值会直接覆盖旧值。
例如：

result = A
→ 更新后
result = B

Reducer 状态：新值不会替换旧值，而是按照指定规则与原状态合并，常见方式是追加到列表中。
例如：

messages = ["你好，查订单"]
→ LLM 返回
messages = ["你好，查订单", "你的订单已发货"]

天然适合多轮对话和 Agent 执行过程中的消息累积

可以参考图片来应付面试

用longfuse 去监控里面的每一步的结果，其实就是三行代码就搞定了。也非常方便快捷

# 状态管理深入理解
langgraph是合并式的状态管理，而不是覆盖式

## 关于MessageState

MessagesState 只要求你往里面放 Message 对象；Message 可以手动创建，也可以由 LLM 返回。只有需要模型生成内容时，才调用 self.llm.invoke()。

为什么要扩展 MessagesState

MessagesState 只有 messages 字段，只能保存对话上下文；但真实 Agent 业务还需要管理大量非消息状态，例如：

user_id / session_id：区分用户和会话
intent：用户意图，用于决定后续路由
user_profile：用户画像，用于个性化回复
tool_count / tool_result：工具调用状态
knowledge_base_id：决定查询哪个知识库

因此需要扩展 MessagesState：
核心作用有两个：

① 控制工作流走向： 根据 intent、用户信息等状态决定进入哪个节点、调用哪个工具或知识库。
② 做上下文工程： 不把所有信息都塞进 messages，而是结构化保存状态，只在需要时把最有用的信息注入 LLM 上下文。

关于可视化示例：使用mermaid
# 1. 生成 Mermaid 代码（推荐，可粘贴到 mermaid.live 查看）
mermaid_code = app.get_graph().draw_mermaid()
print(mermaid_code)

# 2. 生成 PNG 图片
png_data = app.get_graph().draw_mermaid_png()
with open("graph.png", "wb") as f:
    f.write(png_data)

# 3. 在 Jupyter Notebook 直接显示
from IPython.display import Image, display
display(Image(app.get_graph().draw_mermaid_png()))

# 第六周学习总结

#### 1. 有限状态机

有限状态机也叫状态机，是一种编程思想或者说是编程范式。在有限状态机中：

* 每个状态都是一个机器
  * 在每个机器中，可以做计算、存储或输出等等...
  * 所有的机器接受的输入是一致的
  * 状态机的每一个机器本身没有状态，如果我们用函数表示的话，它应该是纯函数(即不依赖于外部环境，无副作用)
* 每一个机器都知道下一个状态
  * 每个机器都有确定的下一个状态(Moore)
  * 每个机器根据输入决定下一个状态(Melay)

#### 2. DOM树的构建

解析HTML构建DOM树可以使用状态机实现。状态机实现可参考[https://html.spec.whatwg.org/multipage/parsing.html](https://html.spec.whatwg.org/multipage/parsing.html)

#### 3. CSS解析计算

计算css之前需要收集css rule。具体可参考[https://www.w3.org/TR/CSS2/](https://www.w3.org/TR/CSS2/)


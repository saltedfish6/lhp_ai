# 机器学习

- notebookllm
  你不知道的JavaScript深入学习
  AI博客

  -modelscope
  阿里开源大模型社区
- python notebook
  ipynb 后缀    
  nlp 机器学习文档格式

- python
  nlp 第一语言
  js 也挺好

- 引入了pipeline 模块
  model中国第一大模型社区
  魔塔
  from modelscope.pipelines import pipeline// 引入pipeline 
  from modelscope.utils.constant import Tasks// 引入任务
  from modelscope import snapshot_download// 下载模型
  from transformers import AutoTokenizer// 引入分词器
  from transformers import AutoModelForCausalLM// 引入模型

    semantic_cls = pipeline(Tasks.text_classification,'damo/nlp_structbert_sentiment-classification_chinese-base')// 引入模型
    打分 label分类
    result = semantic_cls('这个产品不错')// 调用模型
    print(result)// 打印结果
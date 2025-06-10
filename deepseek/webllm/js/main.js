// document.addEventListener('DOMContentLoaded', function() {
//     console.log('WebLLM 项目已启动');
//     // 在这里添加您的JavaScript代码
// });
//js 主动的去拉取http 接口
// web 1.0时代 html
// web 2.0时代 js 主动的请求后端服务器 动态页面
// web 3.0时代 智能合约 区块链 去中心化
// fetch('https://api.github.com/users/shunwuyu/repos')
//     .then(response => response.json())
//     .then(data => {
//     //    console.log(data); // 处理返回的数据
//     document.querySelector('#reply').innerHTML +=data.map( repo=>`
//     <ul>
//       <li>${repo.name}</li>
//     </ul>`).join('')
//     })
// 当LLM API 服务
// chat 方式 AIGC 生成/完成 返回的内容
// 由openai 制定的
// 请求地址
// 命名
// webLLM web 底层是 http 协议
// llm api 服务
const endpoint ='https://api.deepseek.com/chat/completions'
// api.deepseek.com //二级域名 LLM 服务以api的方式提供
// https 加密的http 更安全 
// chat 聊天的方式 message
//请求头
const headers = {
    // 内容类型
    'Content-Type': 'application/json', // 设置请求头为 JSON 格式
    //授权
    'Authorization': 'Bearer sk-0e8c9523ae6c4f6fb4229d7aaadd0ccc' // 设置 API 密钥，用于身份验证
}
// 请求体
const payload = {//payload 负载
    model: 'deepseek-chat',
    messages:[
        // chat 三种方式
        // 1. 系统角色 只会出现一次 设置系统的角色 开始会话时
        // 2. 用户角色 user 提问
        // 3. 助手角色 
        {
            role:'system',content:'你是一个有用的助理'
        },
        {role:'user',content:'你好 DeepSeek'}
    ]
}
fetch(endpoint, {
    method: 'POST', // 设置请求方法为 POST
    headers: headers, // 设置请求头
    //http 请求传输只能是字符串，二进制流
    body: JSON.stringify(payload) // 将请求体转换为 JSON 字符串
// 请求 + LLM 响应需要花时间
// http 是基于请求响应的简单协议
// 返回的也是文本或二进制流
}).then(response => response.json())
// 解析返回的json数据 也要花时间
.then(data => {
    console.log(data); // 处理返回的数据
    document.querySelector('#reply').innerHTML +=data.choices[0].message.content
})

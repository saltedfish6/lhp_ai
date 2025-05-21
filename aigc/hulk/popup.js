// 当DOM内容加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 通过ID获取页面中的"changeColor"按钮元素
  const changeColorButton = document.getElementById('changeColor');
  
  // 为按钮添加点击事件监听器，使用异步函数处理点击事件
  changeColorButton.addEventListener('click', async () => {
    // 获取当前活动窗口中的活动标签页
    // chrome.tabs.query返回一个数组，使用解构赋值获取第一个元素
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // 使用chrome.scripting API在当前标签页中注入并执行脚本
    chrome.scripting.executeScript({
      // 指定目标标签页的ID
      target: { tabId: tab.id },
      // 指定要执行的函数
      function: setBackgroundGreen
    });
  });
});

// 此函数将在目标页面的上下文中执行
// 作用是将页面的背景色设置为特定的绿色(#4CAF50)
function setBackgroundGreen() {
  // 修改body元素的背景色样式
  document.body.style.backgroundColor = '#4CAF50';
} 
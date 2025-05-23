# css animation

- html
   div
   眉毛
   嘴巴
   小酒窝
- css
  ? 在一起?
  border-radius // 圆角
  box-shadow // 阴影
  transform // 变形
  transition // 过渡
  
  animation  世界

- html结构快捷输入方式
   div#l-ball.ball  emmet语法 css 选择器
   .container>#l-ball.ball+#r-ball.ball 更快，前面没有前缀默认div
    id用#，class用. ,  用+可以快速生成兄弟元素, 用>可以快速生成子元素, 用*可以快速生成多个元素,
    -id 唯一   class 类名

    id和class主要区别
   - id 是唯一的，class 可重复使用
   - id 优先级高于 class
   - 一个元素只能有一个 id，但可以有多个 class

    .container?
    盒子  页面居中
    水平垂直居中
   - display属性
     div block(块级，独占一行)
     span, i a inline(行内,不可设置狂高)
     display 切换行内块级的格式化上下文能力
    inline-block 行内块级元素

    - 面向对象的css
      多态
      复用 多类名
    - 定位
     - position 定位
       static 静态定位,即没有定位，按照正常文档流排列
       relative 相对定位
           - 子元素相对它定位
           - 相对于自身的位置定位
       absolute 绝对定位
       abosolute 找到离它(管着它)最近的position不为static的属性定位，直到body为止
       .container absolute body
      
       - 相对定位
         相对自身原来的位置进行定位
       - 绝对定位
         相对最近的已定位祖先元素进行定位，如果没有已定位的祖先元素，则相对于body元素
    

    ### display: inline-block 解释
    display: inline-block 是 CSS 的一个显示属性，它结合了 inline 和 block 两种元素的特性：
    1. 行内元素特性 ：
    - 元素会在一行内显示
    - 不会独占一行
    2. 块级元素特性 ：  
    - 可以设置宽度(width)和高度(height)
    - 可以设置上下边距(margin-top/margin-bottom)
    3. 典型用途 ：   
    - 创建水平排列的元素
    - 为行内元素添加尺寸
   - 实现图文混排


   CSS transform 变形
   transform: scale(0.5);  // 缩小
   transform: scale(1.5);  // 放大
   transform: rotate(45deg);  // 旋转
   transform: translate(100px, 100px);  // 平移
   transform: skew(30deg, 30deg);  // 倾斜  



    - CSS transform: translate(-50%, -50%) 解释
    `transform: translate(-50%, -50%)` 是 CSS 的一个变换函数，用于移动元素的位置。具体作用：
    1. 功能：
    - 将元素在水平和垂直方向上各向左/上移动自身宽高的50%
    - 百分比值基于元素自身的尺寸计算
    2. 典型用途：
    - 配合 `position: absolute` 实现元素居中
    - 微调元素位置而不影响文档流
    3. 在您的代码中：
    ```css
    .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
    ```
    这样组合使用可以实现容器在父元素中的完美居中。





----



          
### 面向对象的CSS（Object-Oriented CSS，OOCSS）
面向对象的CSS是一种编写CSS的方法学，它借鉴了面向对象编程的思想，旨在提高CSS代码的可复用性、可维护性和可扩展性。其核心原则有两个：
1. **分离结构和皮肤**：将元素的结构（如宽度、高度、边距等）和外观（如颜色、背景、边框等）分开定义，这样可以在不同的元素上复用相同的结构或外观样式。
2. **分离容器和内容**：不依赖元素所在的容器来定义样式，使元素可以在不同的上下文中复用。
### 多态
在面向对象的CSS中，多态指的是同一个CSS类在不同的上下文中可以有不同的表现。通过组合使用多个类名，可以让元素根据不同的类组合呈现出不同的样式。例如，一个基础的按钮类可以有多种不同的样式变体，通过添加不同的修饰类来实现。
### 复用 多类名
复用多类名是面向对象CSS实现多态和代码复用的重要手段。通过将不同的样式规则拆分成多个独立的类，然后在HTML元素上组合使用这些类名，可以让元素继承多个类的样式。这样可以避免样式代码的重复编写，提高代码的可维护性。

示例代码：
```html
<!-- HTML -->
<button class="btn btn-primary">主要按钮</button>
<button class="btn btn-secondary">次要按钮</button>
```
```css
/* CSS */
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
}
```
在这个示例中，`.btn` 类定义了按钮的基本结构，`.btn-primary` 和 `.btn-secondary` 类定义了不同的皮肤样式。通过组合使用这些类名，可以快速创建出不同样式的按钮。
        
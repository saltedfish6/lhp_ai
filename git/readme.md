# git

开源的分布式版本控制工具
- 代码的安全 新版本 push
- 代码的协作、共享 pull
- github gitee 等仓库中(main) 

## repo
    - 仓库
    - create a repo
# git 配置
    cmd配置：
     git -v // 查看版本 
     git config --global user.name "xxx"         // 配置用户名

     git config --global user.email "EMAIL     git config --global user.email  "xxx@qq.com"// 配置邮箱

     git config list // 查看配置信息
    .gitignore 忽略文件
    ```node_modules/ // 忽略node_modules文件夹```
    echo "# lhp_ai" >> README.md // 新建一个readme.md文件
    git init // 初始化仓库
    git add README.md // 添加文件到暂存区
    git commit -m "first commit" // # 提交暂存区的修改到本地仓库，并添加提交信息 commit 提交信息
    git branch -M main // 切换到main分支    
    git remote add origin https://github.com/saltedfish6/lhp_ai.git // 添加远程仓库
    git push -u origin main // 推送到远程仓库

    git status // 查看状态

    git log --oneline // 查看提交历史

    git diff // 查看修改内容

    git reset --hard HEAD~1 // 回退到上一个版本
    git reset --hard HEAD~2 // 回退到上两个版本
    git reset --hard HEAD~3 // 回退到上三个版本

    - new.txt
    

    ```   git add README.md // 添加文件到暂存区
          git commit -m "first commit" // 提交到本地仓库 commit 提交信息

            为什么要分两步?
            在 Git 里把 `git add` 和 `git commit` 分成两步有如下原因：
            1. 精确控制提交内容
            `git add` 能让你把指定文件或部分修改添加到暂存区，之后 `git commit` 会将暂存区内容提交。通过这种方式，你可精确选择要提交的修改，把不同类型或功能的修改分开提交，让提交历史更清晰。例如，你同时修改了文档和代码，就可分别 `add` 后单独提交。
            2. 暂存区的灵活使用
            暂存区像一个缓冲区，允许你在提交前对修改进行整理和调整。你能多次 `git add` 不同文件，或对同一文件的不同修改分次添加，最后一次性提交。这让你在提交前有机会检查和确认修改内容，避免提交不必要的更改。
            3. 便于代码审查和版本管理
            分开操作让每次提交的内容更具针对性，便于团队成员进行代码审查，也有助于后续的版本管理和回滚操作。每个提交对应一个明确的功能或修复，方便追踪代码变更历史。


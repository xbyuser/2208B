# Git

## 一、概念

协同合作

协同开发



 	Git是目前世界上最先进的分布式版本控制系统（没有之一）。

## 二、版本控制系统

​	如果你用Microsoft Word写过长篇大论，那你一定有这样的经历：	

​	想删除一个段落，又怕将来想恢复找不回来怎么办？有办法，先把当前文件“另存为……”一个新的Word文件，再接着改，改到一定程度，再“另存为……”一个新文件，这样一直改下去，最后你的Word文档变成了这样：

![lots-of-docs](https://www.liaoxuefeng.com/files/attachments/918921393733152/0)

写的优秀的就是这样

![图片](https://mmbiz.qpic.cn/mmbiz_png/uJDAUKrGC7Ksu8UlITwMlbX3kMGtZ9p0C4qeLxMgoTg9B154ibahsUaibiaV7DgH9GTFQZj3Kyhf5fxrj6G2U5HFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

​		基于此 我们迫切的需要一个版本系统控制系统,可以同时进行版本管控和回退,做到回退



## 三、同时期的版本控制工具

我们学习的东西，一定是当下最流行的！

主流的版本控制器有如下这些：

- **Git**
- **SVN**（Subversion）
- **CVS**（Concurrent Versions System）
- **VSS**（Micorosoft Visual SourceSafe）
- **TFS**（Team Foundation Server）
- Visual Studio Online

版本控制产品非常的多（Perforce、Rational ClearCase、RCS（GNU Revision Control System）、Serena Dimention、SVK、BitKeeper、Monotone、Bazaar、Mercurial、SourceGear Vault），现在影响力最大且使用最广泛的是Git与SVN

## 四、常见的版本控制工具的特点

1. 本地版本控制

   记录文件每次的更新，可以对每个版本做一个快照，或是记录补丁文件，适合个人用，如RCS。

![image-20221115200229366](/Users/nuonuo/Library/Application Support/typora-user-images/image-20221115200229366.png)

2. 集中版本控制  SVN

   所有的版本数据都保存在服务器上，协同开发者从服务器上同步更新或上传自己的修改,集中式版本控制

   ![图片](https://mmbiz.qpic.cn/mmbiz_png/uJDAUKrGC7Ksu8UlITwMlbX3kMGtZ9p00V4uLaibxtZI9RLpq7tkSdlWiaF92AVeZ0ib9DicqBkS2poo5u8sEU2mCQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

   

   ​        所有的版本数据都存在服务器上，用户的本地只有自己以前所同步的版本，如果不连网的话，用户就看不到历史版本，也无法切换版本验证问题，或在不同分支工作。而且，所有数据都保存在单一的服务器上，有很大的风险这个服务器会损坏，这样就会丢失所有的数据，当然可以定期备份。代表产品：SVN、CVS、VSS

   ​      先说集中式版本控制系统，版本库是集中存放在中央服务器的，而干活的时候，用的都是自己的电脑，所以要先从中央服务器取得最新的版本，然后开始干活，干完活了，再把自己的活推送给中央服务器。中央服务器就好比是一个图书馆，你要改一本书，必须先从图书馆借出来，然后回到家自己改，改完了，再放回图书馆。

   ![central-repo](https://www.liaoxuefeng.com/files/attachments/918921540355872/l)

   集中式版本控制系统最大的毛病就是必须联网才能工作，如果在局域网内还好，带宽够大，速度够快，可如果在互联网上，遇到网速慢的话，可能提交一个10M的文件就需要5分钟，这还不得把人给憋死啊。
   
   3. 分布式版本控制 Git

​				每个人都拥有全部的代码！安全隐患！

​				所有版本信息仓库全部同步到本地的每个用户，这样就可以在本地查看所有版本历史，可以离线在本地提交，只需在连网时push到相应的服务器或其他用户那里。由于每个用户那里保存的都是所有的版本数据，只要有一个用户的设备没有问题就可以恢复所有的数据，但这增加了本地存储空间的占用。

不会因为服务器损坏或者网络问题，造成不能工作的情况！

![图片](https://mmbiz.qpic.cn/mmbiz_png/uJDAUKrGC7Ksu8UlITwMlbX3kMGtZ9p0ev8Q7qXjsTfeSwFexdA4tGjFAiaVEKQzAHdGcINXILKflI2cfk9BiawQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)



## 五、总结

1. 本地版本控制
   * 优点: 本地保存代码,方便个人操作,个人保管代码
   * 缺点: 一旦本地机器销毁,代码将会丢失
2. 集中版本控制 svn
   * 优点: 所有的东西都放在服务器上,本地内存占用少
   * 缺点: 一旦中央服务器崩溃,代码将不存在和丢失
3. 分布式版本控制  git
   * 优点: 每个人都是单独的一个服务器,所有的人都拥有完整代码历史记录,不管服务器怎么崩,代码始终都能找回
   * 缺点: 本地占用量高

## 六、下载Git和配置Git

1. 下载Git

​		打开 [git官网] https://git-scm.com/，下载git对应操作系统的版本。

​		所有东西下载慢的话就可以去找镜像！

​		官网下载太慢，我们可以使用淘宝镜像下载：http://npm.taobao.org/mirrors/git-for-windows/

![image-20221115203003688](/Users/nuonuo/Library/Application Support/typora-user-images/image-20221115203003688.png)



2. Git配置

   (1). 配置邮箱和用户名,但是要保持用户名和邮箱和github中一样

   ```
   git config --global user.name "kuangshen" #名称
   git config --global user.email 24736743@qq.com   #邮箱
   ```

   (2) 查看是否配置成功

   ```
   git config -l
   ```

   (3)生成秘钥和公钥

   ```
   ssh-keygen -o
   ```

   ​	连续按三次回车即可,生成公钥和秘钥

   首先 `ssh-keygen` 会确认密钥的存储位置（默认是 `.ssh/id_rsa`），然后它会要求你输入两次密钥口令。 如果你不想在使用密钥时输入口令，将其留空即可。 然而，如果你使用了密码，那么请确保添加了 `-o` 选项，它会以比默认格式更能抗暴力破解的格式保存私钥。 你也可以用 `ssh-agent` 工具来避免每次都要输入密码。

   现在，进行了上述操作的用户需要将各自的公钥发送给任意一个 Git 服务器管理员 （假设服务器正在使用基于公钥的 SSH 验证设置）。 他们所要做的就是复制各自的 `.pub` 文件内容，并将其通过邮件发送。 公钥看起来是这样的：

   ```console
   cat ~/.ssh/id_rsa.pub
   ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSU
   GPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3
   Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XA
   t3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/En
   mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbx
   NrRFi9wrf+M7Q== schacon@mylaptop.local
   ```

​		(4)将公钥配置在github中

​			第一步: 进去github中,选择settings进入

​			![image-20221115204214460](/Users/nuonuo/Library/Application Support/typora-user-images/image-20221115204214460.png)

​			第二步: 按照下图操作

![image-20221115204337187](/Users/nuonuo/Library/Application Support/typora-user-images/image-20221115204337187.png)

## 七、本地仓库关联远程仓库

### 1. 新建远程仓库并克隆至本地

![image-20221115205051224](/Users/nuonuo/Library/Application Support/typora-user-images/image-20221115205051224.png)



![image-20221115205303060](/Users/nuonuo/Library/Application Support/typora-user-images/image-20221115205303060.png)

### 2. 克隆至本地

![image-20221115205855489](/Users/nuonuo/Library/Application Support/typora-user-images/image-20221115205855489.png)

### 2. 本地创建仓库并关联至远程

1. 执行

   ```
   git init
   ```

2. 新建README.md文件

   ```
   touch README.md
   ```

3. 执行以下命令

   ```
   git add .
   git status // 查看暂存区是否有代码储存
   git commit -m '新增了一个md文档'
   git remote add origin https://github.com/threeSunlight/demo3.git
   git push -u origin main
   ```

##  八、git的工作区域

### 1. 基本概念

​	我们先来理解下 Git 工作区、暂存区和版本库概念：

- **工作区：**就是你在电脑里能看到的目录。
- **暂存区：**英文叫 stage 或 index。一般存放在 **.git** 目录下的 index 文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
- **版本库：**工作区有一个隐藏目录 **.git**，这个不算工作区，而是 Git 的版本库。

![图片](https://mmbiz.qpic.cn/mmbiz_png/uJDAUKrGC7Ksu8UlITwMlbX3kMGtZ9p0NJ4L9OPI9ia1MmibpvDd6cSddBdvrlbdEtyEOrh4CKnWVibyfCHa3lzXw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)



## 九、git命令

### 1. 克隆代码:git clone xxx(url地址)

### 2. 初始化本地仓库: git init

### 3.向暂存区添加修改的代码: git add .

### 4. 查看暂存区是否添加成功代码:  git status

### 5. 添加commitId标识或备注: git commit -m '自己做了那些事'

### 6. 关联远程仓库: git remote add origin xxxxx(仓库地址)

### 7.上传代码: git push -u origin 

### 8. 切换分支: git checkout   <name>(分支名称)

### 9. 新建分支: git branch <name>(分支名称)

### 10.合并分支: 1.先切换到结果分支,  git merge xxx(分支名称)

### 11. 回退版本: git reset --hard commitID

### 12. 查看commitID: git log/git rlog

### 13. 本地分支与远程仓库分支建立关联: git push --set-upstream origin master

### 14.将新建的本地分支,推送至远: git push orgin 分支名

### 15. 删除远程分支: git del origin 分支,git push origin 分支名





## 十、团队开发流程

1. 一开始，所有人都需要克隆我的仓库到本地
2. 接下来是开发代码
3. 先把自己的改动存入本地`git add .``git comit -m 'log'`
4. 自己的改动存入本地后，先拉取远程代码`git pull`目的是为了保持和远程代码是一样的，都是新的记录
5. 【注意】：一定要注意看pull后的代码提示，如果有冲突一定要先解决冲突，再存入本地，再上传，再到远程
   5.1 【注意】：如果没有提示冲突，意味着git帮我们把远程代码和本地代码进行了合并，然后再`git push`上传到远程仓库
6. 总结：每次改动项目后：先存本地，再拉取远程，最后提交push

7. 报错：vim编译器:

- esc键
- shift+冒号
- 输入!ws 保存并退出
- i是进入编辑模式

## 十一、公司里的团队协作

1. 首先本地和线上分支都有一个自己的分支：dev-shenyi dev-...
2. 以后的开发全都在自己的分支中操作:dev-shenyi:提交到该分支，然后拉取master分支的代码，最后提交到远程的dev-...
3. 去线上仓库发起一个合并的请求，然后由项目组长去审查代码，项目组长负责把我的分支代码合并到master

## 十二、一键快速解决冲突

1. vscode里使用`ctrl+shift+p`输入: merge
2. 保留远程的代码:选择`>merge conflict:Accept All incoming`
3. 保留自己的代码:选择`>merge conflict:Accept All current`

# 十三、团队合作

1. git clone XXX(项目组git)                 --- 克隆项目
2. cd XX                                            -----进入下载的文件夹内
3. git checkout -b 自己的名字          -----切换并新建分支
4. git push origin 自己的名字             -----将本地分支上传至线上分支
5. git add .                                          --- 添加所有修改和新增的文件
6. git status                                         --- 查看本地仓库是否新增成功
7. git commit -m 'XXXXX'                     --- 上传文件描述
8. git status                                         ----再次查看git本地储存,此时应为空
9. git pull                                             -- 拉取代码
10. git push                                            ---  上传命令                              
11. git checkout development              ----  切换至development分支
12. git pull                                             ---- 拉去一下代码
13. git merge 自己的名字                     ---- 合并代码
14. 解决冲突                                           ---- 解决冲突  
15. git push                                          ----- 上传代码



# 十四、每日开发流程

1. 切换至git checkout development 

2. 执行  git pull

3. 切换至自己的分支  git checkout 自己的名字

4. 执行  git pull

5. 然后执行  git merge development  

6. 执行步骤5没问题以后,开始开发

7. 开发,开发完成以后

8. git add. 

9. git status

10. git commit -m  ''

11. git status

12. git push

13. 切换至 development分支   git checkout  development

14. git pull

15. 在执行  git  merge 自己分支的名字

16. 解决冲突

17. git push  





matser: 主分支  已经上线过的代码,么有bug,完成的需求

Developemnt: 开发分支,vbug

Test:测试分支,有一部分测试需求,随时更改,



分支是根据需求来定的

​	每新增一个需求,就从master拉一个分支

## 十五 公司协同合作

1. 找上级或者带你的人 要仓库地址,(人主动给仓库地址)
2. git clone xxx  将代码clone到本地,
3. 将需求,--排期---开发(开发流程)
4. 现在开发需求:  从master分支拉群新建的分支, 分支名: 需求名称--名字     git branch 分支名
5. 进入到新的分支  git checkout 分支名,这个时候分支是在本地存在的.
6. 我们需要把分支,推送到远端, 
   1. git push -u origin 分支名
7. 自己进行开发了.
   1. 每天都上传代码,上传到自己的分支,
      1. git add.   git status git commit -m '' git pull git push
8. 我们开发完了,自测通过了,合并分支了,
9. 合并到testing分支: 
   1. 先切换到testing分支
   2. git pull
   3. git merge wbj-demo
   4. 假如合并有冲突,就解决冲突
10. 如果需要合并其他分支就进行合并









git pull 执行

1. 如果远端有修改后的代码,我们本地没有修改的代码会直接进行覆盖
2. 如果远端有修改后的代码,我们本地也有修改的代码,git会提示我们,强行git pull ,会覆盖代码,需要我们自己手动进行选择

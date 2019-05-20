# Ubuntu 快速搭建 Java 开发环境

## 0.

> Author:	zhangxl98
>
> Date:		Thu 02 May 2019 16∶09∶33 CST

## 1. JDk

1. 下载
   
   [Java SE Development Kit 8 ](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.htm)
   
2. 解压

   ```bash
   $ cp jdk-8u211-linux-x64.tar.gz ~/.opt/java/jdk/
   $ cd ~/.opt/java/jdk/
   $ tar -zxvf jdk-8u211-linux-x64.tar.gz
   ```

3. 配置环境

   ```shell
   $ vi ~/.bashrc
   
   # 在文件末尾添加
   
   # set java environment
   export JAVA_HOME=/home/[username]/.opt/java/jdk/jdk1.8.0_211
   export JRE_HOME=$JAVA_HOME/jre
   export CLASSPATH=.:$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
   export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
   
   $ source ~/.bashrc
   ```

4. 检查

   ```shell
   $ java
   $ javac
   $ java -version
   ```

   

## 2. Tomcat

1. 下载

   [Apache Tomcat](https://tomcat.apache.org/download-80.cgi)

2. 解压

   ```shell
   $ cp apache-tomcat-8.5.40.tar.gz ~/.opt/java/tomcat
   $ cd ~/.opt/java/tomcat
   $ tar -zxvf apache-tomcat-8.5.40.tar.gz
   $ chmod 775 -R apache-tomcat-8.5.40/
   ```

3. 配置环境

   ```shell
   $ cd apache-tomcat-8.5.40/bin
   $ vi startup.sh
   
   # 在文件末尾添加
   
   # set java environment
   export JAVA_HOME=/home/[username]/.opt/java/jdk/jdk1.8.0_211
   export JRE_HOME=$JAVA_HOME/jre
   export CLASSPATH=.:$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
   export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
   
   # tomcat
   export TOMCAT_HOME=/home/[username]/.opt/java/tomcat/apache-tomcat-8.5.40
   ```

4. 检查

   ```shell
   $ ./startup.sh
   
   # 浏览器访问
   http://localhost:8080/
   ```

5. 创建链接

   ```shell
   $ sudo ln -s /home/[username]/.opt/java/tomcat/apache-tomcat-8.5.40/bin/startup.sh /usr/bin/tomcat-startup
   
   $ sudo ln -s /home/[username]/.opt/java/tomcat/apache-tomcat-8.5.40/bin/shutdown.sh /usr/bin/tomcat-shutdown
   ```

   
## 3. Maven

1. 下载

   [Apache Maven](http://maven.apache.org/download.cgi)

2. 解压

   ```shell
   $ cp apache-maven-3.6.1-bin.tar.gz ~/.opt/java/maven
   $ cd ~/.opt/java/maven
   $ tar -zxvf apache-maven-3.6.1-bin.tar.gz
   ```

3. 配置环境

   ```shell
   $ vi ~/.bashrc
   
   # 在文件末尾添加
   
   # maven
   export M2_HOME=/home/[username]/.opt/java/maven/apache-maven-3.6.1
   export CLASSPATH=$CLASSPATH:$M2_HOME/lib
   export PATH=$PATH:$M2_HOME/bin
   
   $ source ~/.bashrc
   ```

4. 检查

   ```shell
   $ mvn -v
   ```

5. 修改配置

   ```shell
   $ mvn archetype:generate
   # Ctrl + c 结束
   
   $ cp ~/.opt/java/maven/apache-maven-3.6.1/conf/settings.xml ~/.m2
   $ vi ~/.m2/settings.xml
   
   # 在 <mirrors></mirrors> 标签内添加
       <mirror>  
         <id>nexus-aliyun</id>  
         <mirrorOf>central</mirrorOf>    
         <name>Nexus aliyun</name>  
         <url>http://maven.aliyun.com/nexus/content/groups/public</url>  
       </mirror>
   ```





## 4. Docker

1. 卸载旧版本

   ```shell
   $ sudo apt-get remove docker docker-engine docker-ce docker.io
   ```

2. 更新 apt 包索引

   ```shell
   $ sudo apt-get update
   ```

3. 添加使用 HTTPS 传输的软件包以及 CA 证书

   ```shell
   $ sudo apt-get install apt-transport-https ca-certificates
   ```

4. 添加 GPG Key

   ```shell
   $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   ```

5. 检查 GPG Key 信息是否正确

   ```shell
   $ sudo apt-key fingerprint 0EBFCD88
   
   # 返回结果
   pub   rsa4096 2017-02-22 [SCEA]
         9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
   uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
   sub   rsa4096 2017-02-22 [S]
   ```

6. 添加软件源

   ```shell
   $ sudo add-apt-repository \
       "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
       $(lsb_release -cs) \
       stable"
   ```

7. 更新 apt 包索引

   ```shell
   $ sudo apt-get update
   ```

8. 确认 Docker 的源信息是否正确

   ```shell
   $ sudo apt-cache madison docker-ce
   
   # 返回结果
    docker-ce | 5:18.09.5~3-0~ubuntu-bionic | https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
    docker-ce | 5:18.09.4~3-0~ubuntu-bionic | https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
    docker-ce | 5:18.09.3~3-0~ubuntu-bionic | https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
    docker-ce | 5:18.09.2~3-0~ubuntu-bionic | https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
    docker-ce | 5:18.09.1~3-0~ubuntu-bionic | https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
    docker-ce | 5:18.09.0~3-0~ubuntu-bionic | https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
    docker-ce | 18.06.3~ce~3-0~ubuntu | https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
    docker-ce | 18.06.2~ce~3-0~ubuntu | https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
    docker-ce | 18.06.1~ce~3-0~ubuntu | https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
    docker-ce | 18.06.0~ce~3-0~ubuntu | https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
    docker-ce | 18.03.1~ce~3-0~ubuntu | https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
   ```

9. 安装Docker CE

   1. 安装最新版本

      ```shell
      $ sudo apt-cache madison docker-ce
      ```

   2. 安装指定版本

      ```shell
      # 第一列	包名
      # 第二列	版本字符串
      # 第三列	存储库名称
      
      $ sudo apt-get install docker-ce=[版本字符串]
      ```

10. 检查

    ```shell
    $ docker version
    ```

 

## 5. IDEA

1. 下载

   [IntelliJ IDEA](https://www.jetbrains.com/idea/)

2. 解压

   ```shell
   $ sudo cp ideaIU-2019.1.1.tar.gz /opt/JetBrains/
   $ sudo tar -zxvf ideaIU-2019.1.1.tar.gz
   ```

3. 运行

   ```shell
   $ /opt/JetBrains/idea-IU-191.6707.61/bin/idea.sh
   ```

4. 创建图标

   ```shell
   # 运行 idea.sh 后先查看是否已自动生成图标
   
   $ vi intellij-idea.desktop
   
   # 加入内容
   
   [Desktop Entry]
   Name=IntelliJ IDEA
   Exec=/opt/JetBrains/idea-IU-191.6707.61/bin/idea.sh
   Comment=IntelliJ IDEA
   Icon=/opt/JetBrains/idea-IU-191.6707.61/bin/idea.png
   Type=Application
   Terminal=false
   Encoding=UTF-8
   
   $ sudo cp intellij-idea.desktop /usr/share/applications/
   ```



## 6. DataGrip

1. 下载
2. 解压
3. 创建图标



## 7. ZooKeeper

1. 下载

   [Apache ZooKeeper](http://apache.fayea.com/zookeeper/)

2. 解压

   ```shell
   $ cp zookeeper-3.4.14.tar.gz ~/.opt/java/maven
   $ cd ~/.opt/java/zookeeper
   $ tar -zxvf zookeeper-3.4.14.tar.gz
   ```

   

3. 修改配置

   ```shell
   $ cd zookeeper-3.4.14/conf
   $ cp zoo_sample.cfg zoo.cfg
   
   $ vi zoo.cfg
   
   # 编辑以下内容
   
   # The number of milliseconds of each tick
   # 心跳间隔，毫秒
   tickTime=2000
   # The number of ticks that the initial
   # synchronization phase can take
   # 配置zookeeper接受客户端初始化连接时最长能忍受多少个时间心跳间隔。
   initLimit=10
   # The number of ticks that can pass between
   # sending a request and getting an acknowledgement
   # 这个配置项标识 Leader 与 Follower 之间发送消息，请求和应答时间长度，最长不能超过多少个 tickTime 的时间长度。
   syncLimit=5
   # the directory where the snapshot is stored.
   # do not use /tmp for storage, /tmp here is just
   # example sakes.
   # 数据存放的位置
   dataDir=/home/wsk1103/sofrware/zookeeper/zookeeperData
   #日志存放的位置
   dataLogDir=/home/wsk1103/sofrware/zookeeper/zookeeperLog
   # the port at which the clients will connect
   # 服务器客户端的接口
   clientPort=2181
   # the maximum number of client connections.
   # increase this if you need to handle more clients
   #maxClientCnxns=60
   #
   # Be sure to read the maintenance section of the
   # administrator guide before turning on autopurge.
   #
   # http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance
   #
   # The number of snapshots to retain in dataDir
   #autopurge.snapRetainCount=3
   # Purge task interval in hours
   # Set to "0" to disable auto purge feature
   #autopurge.purgeInterval=1
   
   # 2888,3888 are election port
   # 2888端口是zookeeper服务之间的通讯的端口，3888是zookeeper与其他应用程序通讯的端口。
   server.1=localhost:2888:3888
   
   ############################################################################
   
   # 创建对应的文件夹
   $ mkdir -p /home/[username]/.opt/java/zookeeper/zookeeperData
   $ mkdir -p /home/[username]/.opt/java/zookeeper/zookeeperLog
   
   # 在 dataDir 指向的目录创建文件 myid，内容为 1
   $ vi myid
   # 加入以下内容
   1
   ```

4. 启动

   ```shell
   $ ./zkServer.sh start
   ```

5. 检查

   ```shell
   $ ./zkCli.sh -server localhost:2181
   ```

6. 停止

   ```shell
   $ ./zkServer.sh stop
   ```

7. 设置别名

   ```shell
   $ vi ~/.bashrc
   
   # 在文件适当位置添加
   
   # zookeeper
       alias zku='/home/[username]/.opt/java/zookeeper/zookeeper-3.4.14/bin/zkServer.sh start'
       alias zkd='/home/[username]/.opt/java/zookeeper/zookeeper-3.4.14/bin/zkServer.sh stop'
       alias zks='/home/master/.opt/java/zookeeper/zookeeper-3.4.14/bin/zkServer.sh status'
   
   $ source ~/.bashrc
   ```



## 8. Dubbox

1. 下载

   [Dubbox](https://github.com/dangdangdotcom/dubbox)

   ```shell
   $ git clone https://github.com/dangdangdotcom/dubbox.git
   ```

2. 依赖

   ```shell
   $ mvn install:install-file -Dfile=/[...]/dubbo-2.8.4.jar -DgroupId=com.alibaba -DartifactId=dubbo -Dversion=2.8.4 -Dpackaging=jar
   ```

3. 打包

   ```shell
   $ cd dubbox/dubbo-admin
   $ mvn package -Dmaven.skip.test=true
   
   # 正确结果
   [INFO] ------------------------------------------------------------------------
   [INFO] BUILD SUCCESS
   [INFO] ------------------------------------------------------------------------
   [INFO] Total time:  10.704 s
   [INFO] Finished at: 2019-05-02T23:48:13+08:00
   [INFO] ------------------------------------------------------------------------
   ```

4. 运行

   ```shell
   $ mv target/dubbo-admin-2.8.4.war ~/.opt/java/tomcat/apache-tomcat-8.5.40/webapps/
   # 启动 ZooKeeper
   $ zku
   # 启动 Tomcat
   $ tomcat-start
   ```

5. 访问

   ```shell
   # 访问 http://127.0.0.1:8080/dubbo-admin-2.8.4/
   ```

6. pom

   ```xml
   <!-- dubbo相关 -->
   <dependency>
       <groupId>com.alibaba</groupId>
       <artifactId>dubbo</artifactId>
       <version>2.8.4</version>			
   </dependency>
   <dependency>
       <groupId>org.apache.zookeeper</groupId>
       <artifactId>zookeeper</artifactId>
       <version>3.4.6</version>
   </dependency>
   <dependency>
       <groupId>com.github.sgroschupf</groupId>
       <artifactId>zkclient</artifactId>
       <version>0.1</version>
   </dependency>		
   <dependency>
       <groupId>javassist</groupId>
       <artifactId>javassist</artifactId>
       <version>3.11.0.GA</version>
   </dependency>
   ```

# Docker

## 1. MySQL

1. 拉取

   ```shell
   $ docker pull hub.c.163.com/library/mysql:latest
   ```

2. 运行

## 2. Redis

1. 拉取

   ```shell
   $ docker pull hub.c.163.com/library/redis:latest
   ```

2. 运行
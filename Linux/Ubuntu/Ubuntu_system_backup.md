# Ubuntu 系统备份与恢复 #
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今天(2018-7-15)下午，我为了解决 NVIDIA 画面撕裂的问题，按照某博文的做法操作后，重启，哎～Σ(っ °Д °;)っ，我的 Ubuntu 又双叒叕挂掉了 (︶︹︺) ，( ╯-_-)╯┴—┴ ，（\#-_-)\┯━┯ ，(╯°Д°)╯︵ ┻━┻ 。但是，在经历了比迄今为止装 Windows 系统还要多的重装次数后，我想到了需要给我的 Ubuntu 进行备份 ，所以这次就算你坏了又能怎样(￣^￣) 哼！。这次坏掉，完全进不了系统，开机就显示一条 / 分区磁盘的信息，图也没截，反正就是那里坏了。  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;先说一下备份方法吧，其实很简单，因为“Linux 一切皆文件”，甚至她会忠实地执行你给的命令，甚至是“rm -rf /*”。所以，具体的做法就是将你要备份的目录打包成压缩包，然后要恢复的时候再解压回去。  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我这台 Ubuntu 安装的时候是直接按系统默认装的，后来把 /hone 分区用了一个1T 的硬盘分离出去了，所以 / 分区里的东西基本上就是系统全部内容了。/hone 分区一般不会坏，就算坏了，也不影响系统启动，而且作为桌面系统来用，这个分区是占用空间最大的，因此这个分区不需要经常备份，要是你磁盘空间大，我也没什么好说的喽 (¬д¬。)。剩下的 / 分区里面东西很杂很重要，但有部分是我们在运行期间产生的一些垃圾文件之类的，这些就没必要备份了。以下是我写好的备份命令，在这里，我只说 / 分区的备份和恢复，/hone 分区及其他分区的操作自行扩展。 
 
	tar -cvpzf xxxxxxxxxxxxxxx/ubuntu_system_backup@`date +%Y-%m-%d`.tar.gz --exclude=/proc --exclude=/tmp --exclude=/home --exclude=/lost+found --exclude=/media --exclude=/mnt --exclude=/run /
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;运行前先切换为 root 用户，避免权限问题。我直接将它打包后存入了 /home 分区，路径问题自行替换，说一下为什么要排除这几个目录吧。 
 
    /proc：这是系统运行过程中自己产生的，完全没必要备份；
    /tmp：这是临时文件，也是系统的；
    /lost+found：这是用来给你因为非正常关机找回文件用的；
    /media：这是多媒体挂载点，用来挂光盘之类的，没数据；
    /mnt：这是临时挂载点，也没数据；
    /run：这是用来存信息文件的，也是系统自己产生的。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这里我把 /home 分区也排除了，因为这是单独作分区的，要是全分在同一个分区，就不能排除。所以建议装系统的时候还是传统四分区比较好，不过现在可以不用给 swap 分区太多空间，毕竟不是十几年前，大容量内存只能是仰望的存在✪ω✪，在人手8G16G 内存的时代，只要没有特殊需求，是不存在内存溢出的，就算不够了，后期再扩大 swapfile 就好。  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在你进行了备份后，可以来一次“rm -rf /*”爽一下๑乛◡乛๑。(逃ε=ε=ε=ε=ε=ε=┌(;￣◇￣)┘)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说正经的，今天恢复系统也是废了点功夫的，毕竟是第一次嘛(..•˘_˘•..)。首先，因为进不去系统，肯定是要用 Ubuntu Live CD 的，所以需要一个启动盘。然后把你的 / 分区和备份的数据盘挂载上去。最后就可以开始恢复了，也就是解打包到 / 分区挂载的目录下。命令如下，自行跟换路径。  

    tar -xvpzf /xxxxxxxxxx.tar.gz -C /mnt/xxx
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我一定要吧我曲折的经历说出来o(´^｀)o。因为我的备份数据都在 /home 分区下，我就想直接吧压缩包解压到 / 分区，然后给我无情地报错了(→\_←)。既然这样不行，那我就复制出来在解压。关机，U 盘插 Win 上，分一个数据区(因为 U 盘的 Ubuntu 分区是当做光盘的，只读)，开机，复制，过了一会儿，告诉我应为文件太大了，复制失败(分的这个数据区有20G，备份文件就不到10G)（╬￣皿￣）。  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后我只好拿出我饱经沧桑的 USB 2.0 U 盘来复制了，看着它用着3M/s 的速度复制完后，直接解压到了目标目录。开机，（⊙.⊙），还是之前那样(╯#-\_-)╯~~~~~~~~~~~~~~~~~╧═╧ 。看来是那个驱动给我建了个新文件，导致无法进系统的，那就把 / 分区删了吧。补充一下，上面这条解打包命令只会把和包内的内容文件名相同的文件替换掉，新生成的文件不会改变。(终于有机会“rm -rf /*”，有点小激动呢，但是看不到系统坏掉了，有机会我一定来一发(`･ω･´))。删完后，解压，开机，卡在开机 LOGO 了，仔细一想，忘了把之前排除的目录重新建回去了(﹁"﹁) 。建完后，成功进入系统(/≧▽≦/)。撒花｡:.ﾟヽ(｡◕‿◕｡)ﾉﾟ.:｡+ﾟ  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完。(2018-7-15_23:10)

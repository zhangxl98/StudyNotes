<b style="font-size: 42px;">Linux 学习笔记</b>

----------
<p style="font-size: 24px;">序</p>
<p style="font-size: 18
px;">所有者：张晓亮</p>
<p style="font-size: 18
px;">
编辑时间：2018/4/22 0:40:47  
</p>

----------



<b style="font-size: 48
px;">一、Linux 基础</b>
## 1. 命令基本格式及文件处理命令
### 1.1 Linux 命令格式
<ul>
	<b style="font-size: 24px;color: blue;">命令 [选项] [参数]</b>
	<p style="font-size: 18px;">注意：</p>
	<ul>
		<li>1.个别命令使用不遵循此格式</li>
		<li>2.当有多个选项时，可以写在一起</li>
		<li>3.简化选项与完整选项 -a 等于 --all</li>
	</ul>
</ul>
### 1.2 查询目录中的内容：ls

<ul>
	<b style="font-size: 24px;color: blue;">ls [选项] [文件或目录]</b>
	<p style="font-size: 18px;">选项：</p>
	<ul>
		<table style="border: 1;">
			<tr>
				<th>选项</th>
				<th>说明</th
>
			</tr>
			<tr>
				<td>-a</td>
				<td>显示所有文件，包括隐藏文件</td>
			</tr>
			<tr>
				<td>-l</td>
				<td>显示详细信息</td>
			</tr>
			<tr>
				<td>-d</td>
				<td>查看目录属性</td>
			</tr>
			<tr>
				<td>-h</td>
				<td>人性化显示文件大小</td>
			</tr>
			<tr>
				<td>-i</td>
				<td>显示 inode</td>
			</tr>
		</table>
	</ul>
</ul>
### 1.3 建立目录：mkdir
<ul>
	<b style="font-size: 24px;color: blue;">mkdir -p [目录名]</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>命令英文原意：make directories</li>
		<table style="border: 1;">
			<tr>
				<th>选项</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>-p</td>
				<td>递归创建</td>
			</tr>
		</table>
	</ul>
</ul>
### 1.4 切换所在目录：cd

<ul>
	<b style="font-size: 24px;color: blue;" >cd [目录名]</b>
	<p style="font-size: 18px;" ></p>
	<ul>
		<li>命令英文原意：change directory</li>
	</ul>
	<p style="font-size: 18px;" >简化操作：</p>
	<ul>
		<table style="border: 1;">
			<tr>
				<th>操作</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>cd ~</td>
				<td>进入当前用户的家目录</td>
			</tr>
			<tr>
				<td>cd</td>
				<td>进入当前用户的家目录</td>
			</tr>
			<tr>
				<td>cd -</td>
				<td>进入上次目录</td>
			</tr>
			<tr>
				<td>cd ..</td>
				<td>进入上一级目录</td>
			</tr>
			<tr>
				<td>cd .</td>
				<td>进入当前目录</li></td>
			</tr>
		</table>
	</ul>
</ul>
### 1.5 查询所在目录位置：pwd

<ul>
	<b style="font-size: 24px;color: blue;" >pwd</b>
	<p style="font-size: 18px;" ></p>
	<ul>
		<li>命令英文原意：print working directory</li>
	</ul>
</ul>
### 1.6 删除空目录：rmdir

<ul>	
	<b style="font-size: 24px;color: blue;" >rmdir [目录名]</b>
	<p style="font-size: 18px;" ></p>
	<ul>
		<li>命令英文原意：remove empty directories</li>
	</ul>
</ul>	
### 1.7 删除文件或目录：rm

<ul>
	<b style="font-size: 24px;color: blue;" >rm -rf [文件或目录]</b>
	<ul>
		<li>命令英文原意：remove</li>
	</ul>
	<p style="font-size: 18px;" >选项：</p>
	<ul>
		<table style="border: 1;">
			<tr>
				<th>选项</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>-r</td>
				<td>删除目录</td>
			</tr>
			<tr>
				<td>-f</td>
				<td>强制</td>
			</tr>
		</table>
	</ul>
</ul>
### 1.8 复制命令：cp

<ul>
	<b style="font-size: 24px;color: blue;" >cp [选项] [源文件或目录] [目标目录]</b>
	<ul>
		<li>命令英文原意：copy</li>
	</ul>
	<p style="font-size: 18px;" >选项：</p>
	<ul>
		<table style="border: 1;">
			<tr>
				<th>选项</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>-r</td>
				<td>复制目录</td>
			</tr>
			<tr>
				<td>-p</td>
				<td>连带文件属性复制</td>
			</tr>
			<tr>
				<td>-d</td>
				<td>若源文件是链接文件，则复制链接属性</td>
			</tr>
			<tr>
				<td>-a</td>
				<td>相当于 -pdr</td>
			</tr>
		</table>
	</ul>
</ul>
### 1.9 剪切或改名命令：mv

<ul>
	<b style="font-size: 24px;color: blue;" >mv [原文件或目录] [目标目录]</b>
	<p style="font-size: 18px;" ></p>
	<ul>
		<li>命令英文原意：move</li>
	</ul>
</ul>
### 1.10 常用目录的作用

<ul>
	<table style="border: 1;">
		<caption>常用目录的作用</caption>
		<tr>
			<th>目录</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>/</td>
			<td>根目录</td>
		</tr>
		<tr>
			<td>/bin</td>
			<td>命令保存目录（普通用户就可以读取的命令）</td>
		</tr>
		<tr>
			<td>/sbin</td>
			<td>命令保存目录（只有超级用户可以读取的命令）</td>
		</tr>
		<tr>
			<td>/boot</td>
			<td>启动目录，启动相关文件</td>
		</tr>
		<tr>
			<td>/dev</td>
			<td>设备文件保存目录</td>
		</tr>
		<tr>
			<td>/etc</td>
			<td>配置文件保存目录</td>
		</tr>
		<tr>
			<td>/home</td>
			<td>普通用户的家目录</td>
		</tr>
		<tr>
			<td>/lib</td>
			<td>系统库保存目录</td>
		</tr>
		<tr>
			<td>/mnt</td>
			<td>系统挂载目录</td>
		</tr>
		<tr>
			<td>/media</td>
			<td>挂载目录</td>
		</tr>
		<tr>
			<td>/root</td>
			<td>超级用户的家目录</td>
		</tr>
		<tr>
			<td>/tmp</td>
			<td>临时目录</td>
		</tr>
		<tr>
			<td>/proc</td>
			<td>直接写入内存的</td>
		</tr>
		<tr>
			<td>/usr</td>
			<td>系统软件资源目录</td>
		</tr>
		<tr>
			<td>/usr/bin</td>
			<td>系统命令（普通用户）</td>
		</tr>
		<tr>
			<td>/usr/sbin</td>
			<td>系统命令（超级用户）</td>
		</tr>
		<tr>
			<td>/var</td>
			<td>系统相关文档内容</td>
		</tr>
	</table>
	<p>建议在家目录root或home，以及tmp目录下随便放内容。</p>
</ul>
### 1.11 链接命令：ln

<ul>
	<b style="font-size: 24px;color: blue;" >ln -s [原文件] [目标文件]</b>
	<ul>
		<li>命令英文原意：link</li>
	</ul>
	<p style="font-size: 18px;" >功能描述：</p>
	<ul>
		<li>生成链接文件</li>
	</ul>
	<p style="font-size: 18px;" >选项：</p>
	<ul>
		<table style="border: 1;">
			<tr>
				<th>选项</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>-s</td>
				<td>创建软连接</td>
			</tr>
		</table>
	</ul>
	<ul>
		<p style="font-size: 16px;" >硬链接特征：</p>
		<ul>
			<table style="border: 1;">
				<caption>硬链接特征</caption>
				<tr>
					<td>1.拥有相同的 i 节点和 block 块，可以看作是同一个文件</td>
				</tr>
				<tr>
					<td>2.可通过 i 节点识别</td>
				</tr>
				<tr>
					<td>3.不能跨分区</td>
				</tr>
				<tr>
					<td>4.不能针对目录使用</td>
				</tr>
			</table>
		</ul>
	</ul>
	<ul>
		<p style="font-size: 16px;" >软连接特征：</p>
		<ul>
			<table style="border: 1;">
				<caption>软连接特征</caption>
				<tr>
					<td>1.类似 Windows 快捷方式</td>
				</tr>
				<tr>
					<td>2.软连接拥有自己的 i 节点和 block 块，但是数据块中只保存原文件的文件名和 i 节点号，并没有实际的文件数据</td>
				</tr>
				<tr>
					<td>3.lrwxrwxrwx,"l"——软连接,软连接权限都为 rwxrwxrwx</td>
				</tr>
				<tr>
					<td>4.修改任意文件，另一个都不改变</td>
				</tr>
				<tr>
					<td>5.删除原文件，软连接不能使用</td>
				</tr>
			</table>
		</ul>
	</ul>
</ul>
## 2. 文件搜索命令
### 2.1 locate 命令格式
<ul>
	<b style="font-size: 24px;color: blue;">locate [文件名]</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>在后台数据库中按文件名搜索，搜索速度更快</li>
	</ul>
	<p style="font-size: 18px;">/var/lib/mlocate</p>
	<ul>
		<li>locate&nbsp;&nbsp;命令所搜索的后台数据库</li>
	</ul>
	<b style="font-size: 24px;color: blue;">updatedb</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>更新数据库</li>
	</ul>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">注意：</p>
	<ul>
		<li>locate 只能按文件名搜索</li>
		<li>对于新建的文件，只有更新数据库后才能被检索到，系统定期更新，可以使用 updatedb 命令手动更新数据库</li>
	</ul>
</ul>
### 2.2 /etc/updatedb.conf 配置文件
<ul>

	<table style="border: 1;">
		<caption>/etc/updatedb.conf 配置文件</caption>
		<tr>
			<th>选项</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>PRUNE_BIND_MOUNTS = "yes"</td>
			<td>开启搜索限制</td>
		</tr>
		<tr>
			<td>PRUNEFS =</td>
			<td>搜索时，不搜索的文件系统</td>
		</tr>
		<tr>
			<td>PRUNENAMES =</td>
			<td>搜索时，不搜索的文件类型</td>
		</tr>
		<tr>
			<td>PRUNEPATHS =</td>
			<td>搜索时，不搜索的路径</td>
		</tr>
	</table>
</ul>
### 2.3搜索命令的命令 whereis
<ul>
	<b style="font-size: 24px;color: blue;">whereis [命令名]</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>搜索命令所在路径及帮助文档所在位置</li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">选项：</p>
	<ul>
		<table style="border: 1;">
			<tr>
				<th>选项</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>-b</td>
				<td>只查找可执行文件</td>
			</tr>
			<tr>
				<td>-m</td>
				<td>只查找帮助文件</td>
			</tr>
		</table>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>
			
	</ul>
</ul>
### 2.4 搜索命令的命令 which
<ul>
	<b style="font-size: 24px;color: blue;">which [文件名]</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>搜索命令所在路径及别名</li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
	</ul>
</ul>
###2.5 PATH 环境变量
<ul>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">PATH 环境变量：定义的是系统搜索命令的路径</p>
	<ul>	
		<li></li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
	</ul>
</ul>
### 2.6 find 命令
<ul>
	<b style="font-size: 24px;color: blue;">find [搜索范围] [搜索条件]</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>搜索文件</li>
	</ul>

	<b style="font-size: 24px;color: blue;">find / -name install.log</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>避免大范围搜索，会非常耗费系统资源</li>
		<li>find 是在系统当中搜索符合上述条件的文件名</li>
		<li>如果需要匹配，使用通配符匹配，通配符是完全匹配</li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">Linux 中的通配符:</p>
	<ul>
		<table style="border: 1;">
			<caption>Linux 中的通配符</caption>
			<tr>
				<th>通配符</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>*</td>
				<td>匹配任意内容</td>
			</tr>
			<tr>
				<td>？</td>
				<td>匹配任意一个字符</td>
			</tr>
			<tr>
				<td>[]</td>
				<td>匹配任意一个中括号的字符</td>
			</tr>
		</table>
	</ul>

	<b style="font-size: 24px;color: blue;">find /root -iname install.log</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>-i 不区分大小写</li>
	</ul>

	<b style="font-size: 24px;color: blue;">find /root -user root</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>按照所有者搜索</li>
	</ul>

	<b style="font-size: 24px;color: blue;">find /root -nouser</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>查找没有所有者的文件</li>
		<li>-nouser 用于找出垃圾文件（除去 proc、sys 产生的，找到后手动清除）</li>
	</ul>

	<b style="font-size: 24px;color: blue;">find /var/log/ -mtime +10</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>按时间搜索</li>
		<li>查找10天前修改的文件</li>
	</ul>
	<p style="font-size: 18px;">参数：</p>
	<ul>
		<table style="border: 1;">
			<tr>
				<th>参数</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>-10</td>
				<td>10天内修改的文件</td>
			</tr>
			<tr>
				<td>10</td>
				<td>10天当天修改的文件</td>
			</tr>
			<tr>
				<td>+10</td>
				<td>10天前修改的文件</td>
			</tr>
		</table>
	</ul>
	<ul>
		<table style="border: 1;">
			<tr>
				<th>选项</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>atime</td>
				<td>文件访问时间</td>
			</tr>
			<tr>
				<td>ctime</td>
				<td>改变文件属性</td>
			</tr>
			<tr>
				<td>mtime</td>
				<td>修改文件内容</td>
			</tr>
		</table>
	</ul>
	<b style="font-size: 24px;color: blue;">find /root -size 25k</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>按文件大小搜索</li>
		<li>查找文件大小是25KB的文件</li>
	</ul>
	<p style="font-size: 18px;">参数：</p>
	<ul>
		<table style="border: 1;">
			<tr>
				<th>参数</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>-25k</td>
				<td>小于25KB的文件</td>
			</tr>
			<tr>
				<td>25k</td>
				<td>等于25KB的</td>
			</tr>
			<tr>
				<td>+25k</td>
				<td>大于25KB的文件</td>
			</tr>
		</table>
	</ul>
	<p style="font-size: 18px;">注意：</p>
	<ul>
		<li>按 MB 查找时大写 M</li>
		<li>按 KB 查找时小写&nbsp;&nbsp;k</li>
	</ul>

	<b style="font-size: 24px;color: blue;">find /root -inum 262422</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>按 i 节点搜索</li>
		<li>查找 i 节点是262422的文件</li>
	</ul>

	<b style="font-size: 24px;color: blue;">find /etc -size =20k -a -size -50k</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>查找 /etc/ 目录下，大于20KB并且小于50KB的文件</li>
	</ul>
	<p style="font-size: 18px;">选项：</p>
	<ul>
		<table style="border: 1;">
			<tr>
				<th>选项</th>
				<th>全称</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>-a</td>
				<td>and</td>
				<td>逻辑与，两个条件都满足</td>
			</tr>
			<tr>
				<td>-o</td>
				<td>or</td>
				<td>逻辑或，两个条件满足一个即可</td>
			</tr>
		</table>
	</ul>

	<b style="font-size: 24px;color: blue;">find /etc -size +200k -a -size -50k -exec ls -lh {} \;</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>查找 /etc/ 目录下，大于20KB并且小于50KB的文件，并显示详细信息</li>
	</ul>
	<p style="font-size: 18px;">-exec/-ok 命令 {}\; 对搜索结果执行操作</p>
</ul>
### 2.7 搜索字符串命令 grep
<ul>
	<b style="font-size: 24px;color: blue;">grep [选项] [字符串] [文件名]</b>
	<ul>	
		<li>在文件当中匹配符合条件的字符串</li>
	</ul>
	<p style="font-size: 18px;">选项：</p>
	<ul>
		<table style="border: 1;">
			<tr>
				<th>选项</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>-i</td>
				<td>忽略大小写</td>
			</tr>
			<tr>
				<td>-v</td>
				<td>排除指定字符串</td>
			</tr>
		</table>
	</ul>
</ul>
### 2.8 find 命令与 grep 命令的区别
<ul>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">find 命令：</p>
	<ul>	
		<li>在系统当中搜索符合条件的文件名，如果需要匹配，使用通配符匹配，匹配副食完全匹配。</li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">grep 命令：</p>
	<ul>
		<li>在文件当中搜索符合条件的字符串，如果需要匹配，使用正则表达式进行匹配，正则表达式包含匹配</li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
	</ul>
</ul>
## 3. 帮助命令
### 3.1 帮助文档：man
<ul>
	<b style="font-size: 24px;color: blue;">man [命令]</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>获取指定命令的帮助</li>
		<li>英文原意：manual</li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">man 的级别:</p>
	<ul>
		<table style="border: 1;">
			<caption>man 的级别</caption>
			<tr>
				<th>级别</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>1</td>
				<td>查看命令的帮助</td>
			</tr>
			<tr>
				<td>2</td>
				<td>查看可被内核调用的函数的帮助</td>
			</tr>
			<tr>
				<td>3</td>
				<td>查看函数和函数库的帮助</td>
			</tr>
			<tr>
				<td>4</td>
				<td>查看特殊文件的帮助（主要是 /dev/ 目录下的文件）</td>
			</tr>
			<tr>
				<td>5</td>
				<td>查看配置文件的帮助</td>
			</tr>
			<tr>
				<td>6</td>
				<td>查看游戏的帮助</td>
			</tr>
			<tr>
				<td>7</td>
				<td>查看其它杂项的帮助</td>
			</tr>
			<tr>
				<td>8</td>
				<td>查看系统管理员可用命令的帮助</td>
			</tr>
			<tr>
				<td>9</td>
				<td>查看和内核相关文件的帮助</td>
			</tr>
		</table>
	</ul>
	
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">查看命令拥有哪个级别的帮助</p>
	<ul>	
		<li>man -f 命令</li>
		<li>相当于</li>
		<li>whatis 命令</li>
	</ul>
	<ul>
		<p style="font-size: 16px;">例如：</p>
		<li>执行 man -f passwd</li>
		<li>查询到拥有级别1和级别5</li>
		<li>执行 man 1 passwd</li>
		<li>可以定位查询 passwd 命令的级别1的帮助</li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">查看和命令相关的所有帮助</p>
	<ul>
		<li>man -k 命令</li>
		<li>相当于</li>
		<li>apropos 命令</li>
	</ul>
</ul>
### 3.2 选项帮助：help
<ul>
	<b style="font-size: 24px;color: blue;">[命令] --help</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>获取命令选项的帮助</li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">备注：</p>
	<ul>
		<li>选项帮助支持中文</li>
	</ul>
</ul>
### 3.3 shell 内部命令帮助
<ul>
	<b style="font-size: 24px;color: blue;">help [shell内部命令]</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>获取 shell 内部命令的帮助</li>
	</ul>
</ul>
### 3.4 详细命令帮助 info
<ul>
	<b style="font-size: 24px;color: blue;">info [命令]</b>
	<p style="font-size: 18px;">内部操作：</p>
	<ul>
		<table style="border: 1;">
			<caption>info 操作</caption>
			<tr>
				<th>操作</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>-回车</td>
				<td>进入子帮助页面（带有*号标记）</td>
			</tr>
			<tr>
				<td>-u</td>
				<td>进入上层页面</td>
			</tr>
			<tr>
				<td>-n</td>
				<td>进入上下一个帮助小节</td>
			</tr>
			<tr>
				<td>-p</td>
				<td>进入上一个帮助小节</td>
			</tr>
			<tr>
				<td>-q</td>
				<td>退出</td>
			</tr>
		</table>
	</ul>
</ul>
## 4. 压缩命令
> 常用压缩格式1：.zip .gz .bz
>
> 常用压缩格式2：.tar.gz .tar.bz2
### 4.1 .zip 格式压缩
<ul>
	<b style="font-size: 24px;color: blue;">zip [压缩文件名] [源文件]</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>压缩文件</li>
	</ul>

	<b style="font-size: 24px;color: blue;">zip -r [压缩文件名] [源目录]</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>压缩目录</li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">注意：</p>
	<ul>
		<li>.zip 格式压缩文件和 Windows 平台通用</li>
		<li>一定要正确书写压缩包格式，防止不知道压缩格式而无法正确解压缩</li>
	</ul>
</ul>
### 4.2 .zip 格式解压缩
<ul>
	<b style="font-size: 24px;color: blue;">unzip [压缩文件]</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>解压缩 .zip 文件</li>
	</ul>
</ul>
### 4.3 .gz 格式压缩
<ul>
	<b style="font-size: 24px;color: blue;">gzip [源文件]</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>压缩为 .gz 格式的压缩文件，源文件会消失</li>
	</ul>

	<b style="font-size: 24px;color: blue;">gzip -c [源文件] > [压缩文件]</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>压缩为 .gz 格式的压缩文件，源文件会保留</li>
	</ul>

	<b style="font-size: 24px;color: blue;">gzip -r [目录]</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>压缩目录下所有的子文件，但是不能压缩目录</li>
	</ul>
</ul>
### 4.4 .gz 格式解压缩
<ul>
	<b style="font-size: 24px;color: blue;">gzip -d [压缩文件]</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>解压缩文件</li>
	</ul>

	<b style="font-size: 24px;color: blue;">gunzip [压缩文件]</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>解压缩文件</li>
	</ul>
</ul>
### 4.5 .bz2 格式压缩
<ul>
	<b style="font-size: 24px;color: blue;">bzip2 [源文件]</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>压缩为 .bz2 格式的压缩文件，不保留源文件</li>
	</ul>

	<b style="font-size: 24px;color: blue;">bzip2 -k [源文件]</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>压缩为 .bz2 格式的压缩文件，保留源文件</li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">注意：</p>
	<ul>
		<li>bzip2 不能压缩目录</li>
	</ul>
</ul>
### 4.6 .bz2 格式解压缩
<ul>
	<b style="font-size: 24px;color: blue;">bzip2 -d [压缩文件]</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>解压缩文件</li>
		<li>-k 保留压缩文件</li>
	</ul>

	<b style="font-size: 24px;color: blue;">bunzip2 [压缩文件]</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>解压缩文件</li>
		<li>-k 保留压缩文件</li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
	</ul>
</ul>
### 4.7 打包、解打包命令：tar
<ul>
	<b style="font-size: 24px;color: blue;">tar [选项] [文件与目录]</b>
	<p style="font-size: 18px;">选项：</p>
	<ul>
		<table style="border: 1;">
			<tr>
				<th>选项</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>-c</td>
				<td>建立一个打包文件</td>
			</tr>
			<tr>
				<td>-x</td>
				<td>解开一个打包文件</td>
			</tr>
			<tr>
				<td>-t</td>
				<td>查看 tar 包里面的文件</td>
			</tr>
			<tr>
				<td>-z</td>
				<td>打包后用 gzip 压缩，生成 .tar.gz 文件</td>
			</tr>
			<tr>
				<td>-j</td>
				<td>打包后用 zip2 压缩，生成 .tar.bz2 文件</td>
			</tr>
			<tr>
				<td>-v</td>
				<td>压缩的过程中显示文件</td>
			</tr>
			<tr>
				<td>-f</td>
				<td>使用文件名，请留意，在f之后要立即接文件名，不要再加其它参数</td>
			</tr>
			<tr>
				<td>-p</td>
				<td>保持原文件的属性</td>
			</tr>
			<tr>
				<td>-P</td>
				<td>使用绝对路径来压缩</td>
			</tr>
			<tr>
				<td>-N</td>
				<td>设定日期(yyyy/mm/dd)，比后面接的日期还要新的文件才会被打包进新建的文件中</td>
			</tr>
			<tr>
				<td>--exclude FILE</td>
				<td>在打包的过程中，跳过 FILE 文件，不将它打包</td>
			</tr>
		</table>
	</ul>
</ul>
### 4.8 .tar.gz 压缩格式
> .tar.gz 格式是先打包为 .tar 格式，再压缩为 .gz 格式
<ul>
	<b style="font-size: 24px;color: blue;">tar -zcvf [压缩包名].tar.gz [源文件]</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>压缩</li>
	</ul>

	<b style="font-size: 24px;color: blue;">tar - zxvf [压缩包名].tar.gz</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>解压缩</li>
	</ul>
</ul>
### 4.9 .tar.bz2 压缩格式
<ul>
	<b style="font-size: 24px;color: blue;">tar -jcvf [压缩包名].tar.bz2 [源文件]</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>压缩</li>
	</ul>

	<b style="font-size: 24px;color: blue;">tar - jxvf [压缩包名].tar.bz2</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>解压缩</li>
	</ul>
</ul>
## 5. 其它常用命令
### 5.1 shutdown 命令
<ul>
	<b style="font-size: 24px;color: blue;">shutdown [选项] [时间]</b>
	<p style="font-size: 18px;">选项：</p>
	<ul>
		<table style="border: 1;">
			<tr>
				<th>选项</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>-c</td>
				<td>取消前一个关机命令</td>
			</tr>
			<tr>
				<td>-h</td>
				<td>关机</td>
			</tr>
			<tr>
				<td>-r</td>
				<td>重启</td>
			</tr>
		</table>
	</ul>
</ul>
### 5.2 其它关机命令
<ul>
	<b style="font-size: 24px;color: blue;">halt</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li></li>
	</ul>

	<b style="font-size: 24px;color: blue;">poweroff</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
	</ul>

	<b style="font-size: 24px;color: blue;">init 0</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
	</ul>
</ul>
### 5.3 其它重启命令
<ul>
	<b style="font-size: 24px;color: blue;">reboot</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li></li>
	</ul>

	<b style="font-size: 24px;color: blue;">init 6</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
	</ul>
</ul>
### 5.7 系统运行级别
<ul>
	<b style="font-size: 24px;color: blue;"></b>
	<ul>
		<table style="border: 1;">
			<caption>系统运行级别</caption>
			<tr>
				<th>级别</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>0</td>
				<td>关机</td>
			</tr>
				<td>1</td>
				<td>单用户（相当于安全模式）</td>
			</tr>
				<td>2</td>
				<td>不完全多用户，不含 NFS 服务</td>
			</tr>
				<td>3</td>
				<td>完全多用户</td>
			</tr>
				<td>4</td>
				<td>未分配</td>
			</tr>
				<td>5</td>
				<td>图形界面</td>
			</tr>
				<td>6</td>
				<td>重启</td>
			</tr>
		</table>
	</ul>
	<b style="font-size: 24px;color: blue;">runlevel</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>查询系统运行级别</li>
	</ul>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">修改系统默认运行级别</p>
	<ul>
		<li>修改 /etc/inittab 文件中的 id:3:initdefault:</li>
	</ul>
</ul>
### 5.8 退出登录命令
<ul>
	<b style="font-size: 24px;color: blue;">logout</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>注销当前用户</li>
	</ul>
</ul>
### 5.9 挂载命令：mount
> 相当于分配盘符
<ul>
	<p style="font-size: 22px;">查询与自动挂载</p>
	<b style="font-size: 24px;color: blue;">mount</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>查询系统中已经挂载的设备</li>
	</ul>

	<b style="font-size: 24px;color: blue;">mount -a</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>依据配置文件 /etc/fstab 的内容，自动挂载</li>
	</ul>

	<p style="font-size: 22px;">挂载命令格式</p>
	<b style="font-size: 24px;color: blue;">mount [-t 文件系统] [-o 特殊选项] [设备文件名] [挂载点]</b>
	<p style="font-size: 18px;">选项：</p>
	<ul>
		<table style="border: 1;">
			<tr>
				<th>选项</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>-t</td>
				<td>文件系统：加入文件系统类型来指定挂载的类型，可以 ext3、ext4、iso9660 等文件系统</td>
			</tr>
				<td>-o</td>
				<td>特殊选项：可以指定挂载的额外选项</td>
			</tr>
		</table>
	<p style="font-size: 18px;">特殊选项：</p>
		<table style="border: 1;">
			<caption>特殊选项</caption>
			<tr>
				<th>参数</th>
			   	<th>说明</th>
			</tr>
			<tr>
			    <td>atime/noatiome</td>
			    <td>更新访问时间/不更新访问时间。访问分区文件时，是否更新文件的访问时间按，默认为更新</td>
			</tr>
			<tr>
				<td>async/sync</td>
			   	<td>一部/同步，默认同步</td>
			</tr>
			<tr>
			    <td>auto/noauto</td>
			    <td>自动/手动，mount -a 命令执行时，是否会自动安装 /etc/fstab 文件内容挂载，默认为自动</td>
			</tr>
			<tr>
			    <td>defaults</td>
			    <td>定义默认值，相当于 rw,suid,dev,exec,auto,nouser,async 这七个选项</td>
			</tr>
			<tr>
			    <td>exec/noexec</td>
			    <td>执行/不执行，设定是否允许在文件系统中执行可执行文件，默认是 exec 允许</td>
			</tr>
			<tr>
			    <td>remount</td>
			    <td>重新挂载已经挂载的文件系统，一般用于指定修改特殊权限</td>
			</tr>
			<tr>
			    <td>rw/ro</td>
			    <td>读写/只读文件系统挂载时，是否具有读写权限，默认是 rw</td>
			</tr>
			<tr>
			    <td>suid/nosuid</td>
			    <td>具有/不具有 SUID 权限，设定文件爱你系统是否具有 SUID 和 SGID 的权限，默认是具有</td>
			</tr>
			<tr>
			    <td>user/nouser</td>
			    <td>允许/不允许普通用户挂载，设定文件系统是否允许普通用户挂载，默认是不允许</td>
			</tr>
			<tr>
			    <td>usrquota</td>
			    <td>写入代表文件系统支持用户磁盘配额，默认不支持</td>
			</tr>
			<tr>
			    <td>grpquota</td>
			    <td>写入代表文件系统支持组磁盘配额，默认不支持</td>
			</tr>
		</table>
	</ul>
	<p style="font-size: 22px;">挂载光盘</p>
	<b style="font-size: 18px;color: blue;">1. mkdir /mnt/cdrom/</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>建立挂载点（空目录）</li>
	</ul>
	<b style="font-size: 18px;color: blue;">2. mount /dev/sr0 /mnt/cdrom/</b>
	</br>
	<b style="font-size: 18px;color: blue;">或</b>
	</br>
	<b style="font-size: 18px;color: blue;">mount /dev/cdrom /mnt/cdrom/</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>挂载光盘</li>
		<li>系统知道要挂载的是光盘，可以省略文件系统</li>
		<li>/dev/cdrom 是 /dev/sr0 的软连接</li>
		<li>光盘配有写的权限，只能以只读方式挂载</li>
	</ul>

	<p style="font-size: 22px;">挂载 U 盘</p>
	<b style="font-size: 18px;color: blue;">fdisk -l</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>查看 U 盘设备文件名</li>
	</ul>
	<b style="font-size: 18px;color: blue;">mountt -t vfat /dev/sdb1 /mnt/usb/</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>挂载 U 盘</li>
		<li>这里的 vfat 相当于 Windows 中的 FAT32</li>
	</ul>
	<p style="font-size: 18px;">注意：</p>
	<ul>	
		<li>Linux 默认是不支持 NTFS 文件系统的</li>
	</ul>

</ul>
### 5.10 卸载命令：umount
<ul>
	<b style="font-size: 24px;color: blue;">umount [设备文件名或挂载点]</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li></li>
	</ul>
</ul>

### 5.11 查看登录用户信息
<ul>
	<b style="font-size: 24px;color: blue;">w [用户名]</b>
	<p style="font-size: 18px;">命令输出：</p>
	<ul>
		<li>USER：登录的用户名</li>
		<li>TTY：登录终端</li>
		<li>FROM：从哪个 IP 地址登录</li>
		<li>LOGIN@：登录时间</li>
		<li>IDLE：用户闲置时间</li>
		<li>JCPU：指的是和该终端连接的所有进程占用的时间。这个时间并不包括过去的后台作业时间，但却包括当前正在运行的后台作业说占用的时间</li>
		<li>PCPU：是指当前进程所占用的时间</li>
	</ul>

	<b style="font-size: 24px;color: blue;">who [用户名]</b>
	<p style="font-size: 18px;">命令输出：</p>
	<ul>	
		<li>用户名</li>
		<li>登录终端</li>
		<li>登录时间（登录来源的 IP 地址）</li>
	</ul>

	<b style="font-size: 24px;color: blue;">last</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>查询当前登录和过去登录的用户信息</li>
		<li>last&nbsp;&nbsp;命令默认是读取 /var/log/wtmp 文件数据</li>
	</ul>
	<p style="font-size: 18px;">命令输出：</p>
	<ul>
		<li>用户名</li><li></li>
		<li>登录终端</li>
		<li>登录 IP</li><li></li>
		<li>登录时间</li>
		<li>退出时间</li>
	</ul>

	<b style="font-size: 24px;color: blue;">lastlog</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>查看所有用户的最后一次登录时间</li>
		<li>lastlog 命令默认是读取 /var/log/lastlog 文件内容</li>
	</ul>
	<p style="font-size: 18px;">命令输出</p>
	<ul>
		<li>用户名</li>
		<li>登录终端</li>
		<li>登录 IP</li>
		<li>最后一次登录时间
</li>
	</ul>
</ul>
## 6.Shell 基础
### 6.1 echo 输出命令
<ul>
	<b style="font-size: 24px;color: blue;">echo [选项] [输出内容]</b>
	<p style="font-size: 18px;">选项：</p>
	<ul>	
		<li>-e：支持反斜线控制的字符转换</li>
		<table style="border: 1;">
			<caption>字符转换</caption>
			<tr>
				<th>控制字符</th>
				<th>作用</th>
			</tr>
			<tr>
				<td>\a</td>
				<td>输出警告音</td>
			</tr>
			<tr>
				<td>\b</td>
				<td>退格键，也就是向左删除键</td>
			</tr>
			<tr>
				<td>\n</td>
				<td>换行符</td>
			</tr>
			<tr>
				<td>\r</td>
				<td>回车键</td>
			</tr>
			<tr>
				<td>\t</td>
				<td>制表符，也就是 TAB 键</td>
			</tr>
			<tr>
				<td>\v</td>
				<td>垂直制表符</td>
			</tr>
			<tr>
				<td>\0nnn</td>
				<td>按照八进制 ASCII 码表输出字符。其中0为数字零，nnn 是三位八进制数</td>
			</tr>
			<tr>
				<td>\xhh</td>
				<td>按照十六进制 ASCII 码表输出字符。其中 hh 是两位十六进制数</td>
			</tr>
		</table>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">输出颜色：</p>
	<ul>
		<li></li>
		<table style="border: 1;">
			<caption>颜色表</caption>
			<tr>
				<th>编号</th>
				<td>30m</td>
				<td>31m</td>
				<td>32m</td>
				<td>33m</td>
				<td>34m</td>
				<td>35m</td>
				<td>36m</td>
				<td>37m</td>
			</tr>
			<tr>
				<th>颜色</th>
				<td>黑色</td>
				<td>红色</td>
				<td>绿色</td>
				<td>黄色</td>
				<td>蓝色</td>
				<td>洋红</td>
				<td>青色</td>
				<td>白色</td>
			</tr>
		</table>
	</ul>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">示例：</p>
	<p style="font-size: 14px;color: red;">echo -e "\e[1;31m 我是红色\e[0m"</p>
	<ul>
		<li>\e[1;31m 开启颜色显示</li>
		<li>后面加 \e[0m ;结束颜色显示</li>
		<li>使用 echo 命令调用颜色</li>
	</ul>
</ul>
### 6.2 脚本书写
<ul>
	<b style="font-size: 24px;color: blue;">#!/bin/bash</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li></li>
	</ul>
</ul>
### 6.3 脚本执行
<ul>
	<b style="font-size: 24px;color: blue;">chmod 775 [脚本文件名]</b>
	<p style="font-size: 18px;">赋予执行权限</p>
	<ul>	
		<li></li>
	</ul>

	<b style="font-size: 24px;color: blue;">[脚本所在目录][脚本文件名]</b>
	<p style="font-size: 18px;">直接运行</p>
	<ul>
		<li></li>
	</ul>

	<b style="font-size: 24px;color: blue;">bash [脚本文件名]</b>
	<p style="font-size: 18px;">通过&nbsp;&nbsp;Bash&nbsp;&nbsp;调用执行脚本</p>
	<ul>
		<li>Bash&nbsp;调用可以不赋予执行权限</li>
	</ul>
</ul>
### 6.4 查看与设定别名
<ul>
	<b style="font-size: 24px;color: blue;">alias</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>查看系统中所有的命令别名</li>
	</ul>

	<b style="font-size: 24px;color: blue;">alias [别名]=['原命令']</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
	</ul>
	<p style="font-size: 22px;">别名永久生效与删除别名</p>
	<b style="font-size: 24px;color: blue;">vi ～/.banshrc</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>写入环境变量配置文件</li>
	</ul>
	<b style="font-size: 24px;color: blue;">unalias [别名]</b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>删除别名</li>
		<li>临时删除</li>
	</ul>
	<p style="font-size: 22px;">命令生效顺序：</p>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li></li>
	<table style="border: 1;">
		<caption>常用快捷键</caption>
		<tr>
			<td>第一顺位执行</td>
			<td>用绝对路径或相对路径执行的命令</td>
		</tr>
		<tr>
			<td>第二顺位执行</td>
			<td>别名</td>
		</tr>
		<tr>
			<td>第三顺位执行</td>
			<td>Bash 的内部命令</td>
		</tr>
		<tr>
			<td>第四顺位执行</td>
			<td>按照 $PASH 环境变量定义的目录查找顺序找到的第一个命令</td>
		</tr>
	</table>
	</ul>
</ul>
### 6.5 常用快捷键
<ul>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li></li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
	</ul>
	<table style="border: 1;">
		<caption>常用快捷键</caption>
		<tr>
			<th>快捷键</th>
			<th>说明</th>
		</tr
		<tr>
			<td>ctrl+c</td>
			<td>强制终止当前命令</td>
		</tr>
		<tr>
			<td>ctrl+l</td>
			<td>清屏</td>
		</tr>
		<tr>
			<td>ctrl+a</td>
			<td>光标移动到命令行首</td>
		</tr>
		<tr>
			<td>ctrl+e</td>
			<td>光标移动到命令行尾</td>
		</tr>
		<tr>
			<td>ctrl+u</td>
			<td>从光标所在位置删除到行首</td>
		</tr>
		<tr>
			<td>ctrl+z</td>
			<td>吧命令放入后台</td>
		</tr>
		<tr>
			<td>ctrl+r</td>
			<td>在历史命令中搜索</td>
		</tr>
	</table>	
</ul>
### 6.6 历史命令
<ul>
	<b style="font-size: 24px;color: blue;">history [选项] [历史命令保存文件]</b>
	<p style="font-size: 18px;">选项：</p>
	<ul>	
		<li></li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>
		<table style="border: 1;">
			<tr>
				<th>选项</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>-c</td>
				<td>清空历史命令</td>
			</tr>
			<tr>
				<td>-w</td>
				<td>把缓存中的历史命令写入历史命令保存文件 ~/.bash_history</td>
			</tr>
		</table>
		<li></li>
	</ul>

	<p style="font-size: 22px;">历史命令的调用</p>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
		<table style="border: 1;">
			<caption>历史命令的调用</caption>
			<tr>
				<th>键位</th>
				<th>效果</th>
			</tr>
			<tr>
				<td>↑/↓</td>
				<td>调用以前的历史命令</td>
			</tr>
			<tr>
				<td>!n</td>
				<td>重复执行第 n 条历史命令</td>
			</tr>
			<tr>
				<td>!!</td>
				<td>重复执行上一条命令</td>
			</tr>
			<tr>
				<td>!字符串</td>
				<td>重复执行最后一条以该字符串开头的命令</td>
			</tr>
		</table>
	</ul>
	<p style="font-size: 22px;">命令与文件补全</p>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li>按&nbsp;&nbsp;TAB&nbsp;&nbsp;自动补全</li>
		<li>按两次&nbsp;&nbsp;TAB&nbsp;&nbsp;显示提示</li>
	</ul>
</ul>

<ul>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li></li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
	</ul>
</ul>
### 6.7 输出重定向
<ul>
	<p style="font-size: 22px;">标准输入输出</p>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li></li>
		<table style="border: 1;">
			<caption>标准输入输出</caption>
			<tr>
				<th>设备</th>
				<th>设备文件名</th>
				<th>文件描述符</th>
				<th>类型</td>
			</tr>
			<tr>
				<td>键盘</td>
				<td>/dev/stdin</td>
				<td>0</td>
				<td>标准输入</td>
			</tr>
			<tr>
				<td>显示器</td>
				<td>/dev/sdtout</td>
				<td>1</td>
				<td>标准输出</td>
			</tr>
			<tr>
				<td>显示器</td>
				<td>/dev/sdterr</td>
				<td>2</td>
				<td>标准错误输出</td>
			</tr>
		</table>
	</ul>

	<p style="font-size: 22px;">输出重定向</p>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
		<table style="border: 1;">
			<caption>输出重定向</caption>
			<tr>
				<th>类型</th>
				<th>符号</th>
				<th>作用</th>
			</tr>
			<tr>
				<td rowspan="2">标准输出重定向</td>
				<td>命令 > 文件</td>
				<td>以覆盖的方式，把命令的正确输出输出到指定的文件或设备中</td>
			</tr>
			<tr>
				<td>命令 >> 文件</td>
				<td>以追加的方式，把命令的正确输出输出到指定的文件或设备中</td>
			</tr>
			<tr>
				<td rowspan="2">标准错误输出重定向</td>
				<td>错误命令 2>文件</td>
				<td>以覆盖的方式，把命令的错误输出输出到指定的文件或设备中</td>
			</tr>
			<tr>
				<td>错误命令 2>>文件</td>
				<td>以追加的方式，把命令的错误输出输出到指定的文件或设备中</td>
			</tr>
			<tr>
				<td rowspan="5">正确输出和错误输出同时保存</td>
				<td>命令 > 文件 2>&1</td>
				<td>以覆盖的方式，把正确输出和错误输出都保存到同一个文件夹中</td>
			</tr>
			<tr>
				<td>命令 >> 文件 2>&1</td>
				<td>以追加的方式，把正确输出和错误输出都保存到同一个文件夹中</td>
			</tr>
			<tr>
				<td>命令 &>文件</td>
				<td>以覆盖的方式，把正确输出和错误输出都保存到同一个文件夹中</td>
			</tr>
			<tr>
				<td>命令 &>>文件</td>
				<td>以追加的方式，把正确输出和错误输出都保存到同一个文件夹中</td>
			</tr>
			<tr>
				<td>命令>>文件1 2>>文件2</td>
				<td>把正确的输出追加到文件1中，吧错误的输出追加到文件2中</td>
			</tr>
		</table>
	</ul>

	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">注意：</p>
	<ul>
		<li>输出正确输出，> 和 >> 左右两边都有空格</li>
		<li>输出错误输出，> 和 >> 左右两边没有空格</li>
	</ul>
</ul>
### 6.8 输入重定向
<ul>
	<p style="font-size: 22px;"></p>
	<b style="font-size: 24px;color: blue;">wc [选项] [文件名]</b>
	<p style="font-size: 18px;">选项：</p>
	<ul>	
		<li></li>
		<table style="border: 1;">
			<tr>
				<th>选项</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>-c</td>
				<td>统计字节数</td>
			</tr>
			<tr>
				<td>-w</td>
				<td>统计单词数</td>
			</tr>
			<tr>
				<td>-l</td>
				<td>统计行数</td>
			</tr>
		</table>
	</ul>

	<p style="font-size: 22px;"></p>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">[命令]<[文件] 把文件作为命令的输入</p>
	<p style="font-size: 18px;">[命令]<<[文件]</p>
	<p style="font-size: 18px;">标识符吧标识符之间内容作为命令的输入</p>
	<ul>
		<li></li>
	</ul>

	<p style="font-size: 22px;"></p>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li></li>
	</ul>
</ul>
### 6.9 多命令顺序执行
<ul>
	<p style="font-size: 22px;">多命令执行符</p>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li></li>		
		<table style="border: 1;">
			<caption>多命令执行符</caption>
			<tr>
				<th>多命令执行符</th>
				<th>格式</th>
				<th>作用</th>
			</tr>
			<tr>
				<td>;</td>
				<td>命令1;命令2</td>
				<td>多个命令顺序执行，命令之间没有任何逻辑关系</td>
			</tr>
			<tr>
				<td>&&</td>
				<td>命令1&&命令2</td>
				<td>
					<p>逻辑与</p>
					<p>当命令1正确执行，则命令2才会执行</p>
					<p>当命令1执行不正确，则命令2不会执行</p>
				</td>
			</tr>
			<tr>
				<td>||</td>
				<td>命令1||命令2</td>
				<td>
					<p>逻辑或</p>
					<p>当命令1执行不正确，则命令2才会执行</p>
					<p>当命令1正确执行，则命令2不会执行</p>
				</td>
			</tr>
		</table>
	</ul>

	<p style="font-size: 22px;">管道符</p>
	<b style="font-size: 24px;color: blue;">[命令1] | [命令2]</b>
	<p style="font-size: 18px;"></p>
	<ul>
		<li>命令1的正确输出作为命令2的操作对象</li>
	</ul>

	<p style="font-size: 22px;"></p>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;">例：</p>
	<ul>
		<li>ll -a /etc/ | more</li>
		<li>netstat -an |grep "ESTABLISHED"</li>
	</ul>
</ul>
### 6.10 通配符
<ul>
	<p style="font-size: 22px;"></p>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li></li>
		<table style="border: 1;">
			<caption>Linux 中的通配符</caption>
			<tr>
				<th>通配符</th>
				<th>作用</th>
			</tr>
			<tr>
				<td>?</td>
				<td>匹配一个任意字符</td>
			</tr>
			<tr>
				<td>*</td>
				<td>匹配0个或任意多个任意字符，也就是可以匹配任何内容</td>
			</tr>
			<tr>
				<td>[]</td>
				<td>
					<p>匹配中括号中的任意一个字符</p>
					<p>例如：[abc]代表一定匹配一个字符，或者是 a，或者是 b，或者是 c</p>
				</td>
			</tr>
			<tr>
				<td>[-]</td>
				<td>
					<p>匹配中括号中的任意一个字符，-代表一个范围</p>
					<p>例如：[a-z]代表匹配一个小写字母</p>
				</td>
			</tr>
			<tr>
				<td>[^]</td>
				<td>
					<p>逻辑非，表示匹配不是中括号内的一个字符</p>
					<p>例如：[^0-9]代表匹配一个不是数字的字符</p>
				</td>
			</tr>
		</table>
	</ul>
</ul>
### 6.11 Bash 中其他特殊符号
<ul>
	<p style="font-size: 22px;"></p>
	<b style="font-size: 24px;color: blue;"></b>
	<p style="font-size: 18px;"></p>
	<ul>	
		<li></li>
		<table style="border: 1;">
			<caption>Bash 中其他特殊符号</caption>
			<tr>
				<th>符号</th>
				<th>作用</th>
			</tr>
			<tr>
				<td>''</td>
				<td>单引号。在单引号中所有的特殊符号，如“$”和“`”(反引号)都没有特殊含义</td>
			</tr>
			<tr>
				<td>""</td>
				<td>双引号。在双引号中特殊符号都没有特殊含义，但是“$”、“`”和“\”是例外，拥有“调用变量的值”、“引用命令”和“转义符”的特殊含义</td>
			</tr>
			<tr>
				<td>``</td>
				<td>
					<p>反引号。反引号括起来的内容是系统命令，在 Bash 中会先执行它。</p>
					<p>和$()作用一样，不过推荐使用$()，因为反引号非常容易看错</p>
				</td>
			</tr>
			<tr>
				<td>$()</td>
				<td>和反引号作用一样，用来引用系统命令</td>
			</tr>
			<tr>
				<td>#</td>
				<td>在 Shell 脚本中，#开头的行代表注释</td>
			</tr>
			<tr>
				<td>$</td>
				<td>用于调用变量的值，如需要调用变量 name 的值时需要用$name 的方式得到变量的值</td>
			</tr>
			<tr>
				<td>\</td>
				<td>转义符，跟在\之后的特殊符号将失去特殊含义，变成普通字符。如\$将输出“$”符号，而不当作是变量引用</td>
			</tr>
		</table>
	</ul>
</ul>
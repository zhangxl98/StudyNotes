<b style="font-size: 42px;font-family: 'Consolas';">Vim 的使用</b>
***
## 安装 ##

1. 安装
	 - 执行命令

			sudo apt-get install vim
2. 检查安装版本
	 - 执行命令

			vim --version
## 插入 ##
<table style="border: 1;">
	<caption><b style="font-size: 16px;font-family: '微软雅黑';">插入</b></caption>
	<tr>
		<th>命令</th>
		<th>说明</th>
	</tr>
	<tr>
		<td>i</td>
		<td>在光标前插入</td>
	</tr>
	<tr>
		<td>a</td>
		<td>在光标后插入</td>
	</tr>
	<tr>
		<td>o</td>
		<td>在前行后插入一个新行</td>
	</tr>
	<tr>
		<td>O</td>
		<td>在当前行前插入一个新行</td>
	</tr>
	<tr>
		<td>cw</td>
		<td>替换从光标所在位置后到一个单词结尾的字符</td>
	</tr>
</table>
## 移动 ##
<table style="border: 1;">
	<caption><b style="font-size: 16px;font-family: '微软雅黑';">行内移动</b></caption>
	<tr>
		<th>命令</th>
		<th>说明</th>
	</tr>
	<tr>
		<td>0</td>
		<td>行首</td>
	</tr>
	<tr>
		<td>$</td>
		<td>行尾</td>
	</tr>
	<tr>
		<td>^</td>
		<td>第一个不是blank字符的位置</td>
	</tr>
	<tr>
		<td>g_</td>
		<td>最后一个不是blank字符的位置</td>
	</tr>
	<tr>
		<td>fa</td>
		<td>下一个为 a 的字符</td>
	</tr>
	<tr>
		<td>ta</td>
		<td>下一个为 a 的字符的前一个</td>
	</tr>
	<tr>
		<td>3fa</td>
		<td>第3个为 a 的字符</td>
	</tr>
</table>
<table style="border: 1;">
	<caption><b style="font-size: 16px;font-family: '微软雅黑';">行间移动</b></caption>
	<tr>
		<th>命令</th>
		<th>说明</th>
	</tr>
	<tr>
		<td>nG</td>
		<td>第 n 行</td>
	</tr>
	<tr>
		<td>gg</td>
		<td>第一行</td>
	</tr>
	<tr>
		<td>G</td>
		<td>最后一行</td>
	</tr>
</table>

<table style="border: 1;">
	<caption><b style="font-size: 16px;font-family: '微软雅黑';">其他移动</b></caption>
	<tr>
		<th>命令</th>
		<th>说明</th>
	</tr>
	<tr>
		<td>w</td>
		<td>到下一个单词的开头</td>
	</tr>
	<tr>
		<td>e</td>
		<td>到下一个单词的结尾</td>
	</tr>
	<tr>
		<td>%</td>
		<td>匹配当前光标上的括号的另一半，包含 (,{,[</td>
	</tr>
	<tr>
		<td>#</td>
		<td>匹配当前光标上的上一个单词</td>
	</tr>
	<tr>
		<td>*</td>
		<td>匹配当前光标上的下一个单词</td>
	</tr>
</table>
### 拷贝 ###
<table style="border: 1;">
	<caption><b style="font-size: 16px;font-family: '微软雅黑';">拷贝</b></caption>
	<tr>
		<th>命令</th>
		<th>说明</th>
	</tr>
	<tr>
		<td>y</td>
		<td>复制到"寄存器</td>
	</tr>
	<tr>
		<td>"+y</td>
		<td>复制到系统剪贴板(也就是vim的+寄存器)</td>
	</tr>
	<tr>
		<td>yy</td>
	</tr>
	<tr>
		<td></td>
		<td></td>
	</tr>
</table>
### 粘贴 ###
<table style="border: 1;">
	<caption><b style="font-size: 16px;font-family: '微软雅黑';">粘贴</b></caption>
	<tr>
		<th>命令</th>
		<th>说明</th>
	</tr>
	<tr>
		<td>p</td>
		<td>在当前位置之后</td>
	</tr>
	<tr>
		<td>P</td>
		<td>在当前位置之前</td>
	</tr>
	<tr>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
	</tr>
</table>
### 删除 ###
<table style="border: 1;">
	<caption><b style="font-size: 16px;font-family: '微软雅黑';">删除</b></caption>
	<tr>
		<th>命令</th>
		<th>说明</th>
	</tr>
	<tr>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
	</tr>
</table>





<table style="border: 1;">
	<caption><b style="font-size: 16px;font-family: '微软雅黑';">插入</b></caption>
	<tr>
		<th>命令</th>
		<th>说明</th>
	</tr>
	<tr>
		<td></td>
		<td></td>
	</tr>
</table>
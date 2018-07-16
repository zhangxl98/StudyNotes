<b style="font-size: 42px;font-family: 'Consolas';">Ubuntu 修改 swapfile</b>
***
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今天(2018-7-16)，我将一条内存加入了一台 Ubuntu 主机，所以顺便调整一下 swap 的大小，并将操作方法记录下来，以便今后查阅。顺便一提，最好有全速 NVMe 固态硬盘。  
## 查看交换分区大小 ##

- 执行

		free -m
- 返回

		              total        used        free      shared  buff/cache   available
		Mem:           7850        1442        4907          24         1500        6112
		Swap:          2047           0        2047
 - 可以看出 swap 只有安装系统时分配的 2GB。
## 创建一个 swap 文件 ##
- 先切换到 / 目录

		cd /
- 然后依次执行

		sudo mkdir swap
		cd swap
		sudo dd if=/dev/zero of=swapfile bs=1024 count=8000000
- 在 /swap 创建了一个叫 swapfile 的交换文件，大小是8GB，也可以根据需求自行更改大小。
- 这里也可以直接在 / 目录下创建 swapfile，如果这样做，下面操作的路径需要自行更改。
- 等一会儿，执行完毕后显示

		8000000+0 records in
		8000000+0 records out
		8192000000 bytes (8.2 GB, 7.6 GiB) copied, 26.5573 s, 308 MB/s
## 创建 swap 文件系统 ##
- 执行


		sudo mkswap swapfile
- 也就是把之前创建的文件转换成 swap 文件。
- 这里 `mkswap` 可以带参数，不过一般也不需要。

		-c：建立交换区前，先检查是否有损坏的区块；
		-f：在SPARC电脑上建立交换区时，要加上此参数；
		-v0：建立旧式交换区，此为预设值；
		-v1：建立新式交换区。
- 返回结果

		mkswap: swapfile: insecure permissions 0644, 0600 suggested.
		Setting up swapspace version 1, size = 7.6 GiB (8191995904 bytes)
		no label, UUID=39570deb-1f1e-4568-b6dd-17bb55b30d32

## 激活 swap ##
- 执行

		sudo swapon swapfile
- 返回

		swapon: /swap/swapfile: insecure permissions 0644, 0600 suggested.
- 到这一步，swap 就已经被改过来了。
- 可以再次查看大小。
- 执行

		free -m
- 返回

		              total        used        free      shared  buff/cache   available
		Mem:           7850        1830         131          21        5888        5695
		Swap:          9860           0        9860
- 从返回的数据上来看好像有点不对劲，总量大于8GB，那是因为系统预设的那一部分还没去掉。
## 关闭和删除原来的swapfile ##
- 先切换到 / 目录

		cd /
- 关闭原来的 swapfile

		sudo swapoff swapfile
- 删除原来的 swapfile

		sudo rm /swapfile
- 再次查看，发现已经改过来了

		              total        used        free      shared  buff/cache   available
		Mem:           7850        1841         246          21        5762        5684
		Swap:          7812           0        7812
## 设置开机启动 ##
- 打开 fstab 文件

		sudo vim /etc/fstab
- 修改

		“/swapfile”改为“/swap/swapfile”，也就是 swapfile 文件的路径。

## 卸载 ##
- 如果暂时不想要用 swapfile，你可以卸载它。
- 执行

		sudo swapoff swap/
swapfile
- 如果要永久生效，还是要写入文件的。当然，也可以选择删除它，这里不再赘述。
<b style="font-size: 42px;font-family: 'Consolas';">BackTrack</b>
***
<p style="font-size: 18px;">创建时间：2018/7/23 22:03:45 </p>
*** 
# BackTrack 环境的基本配置与汉化 #
### 网络配置基本命令 ###
1. 查看本地网卡

		ifconfig -a
2. 激活网卡

		ifconfig eth0 up
3. 重启网络服务

		/etc/init.d/networking restart
4. DHCP 网络自动获取 IP

		dhclient eth0
5. 手动设置 IP

		ifconfig eth0 [inet] netmask [netmask]
6. 设置网关

		route add default gw [gateway]

7. 静态 IP 配置文件

		/etc/network/interfaces

		iface eth0 inet static
		address [inet]
		netmask [netmask]
		gateway [gateway]
8. DNS 配置文件

		/etc/resolv.conf
### BackTrack环境汉化 ###
1. 安装中文支持模块

		apt-get install language-support-zh language-pack-zh
2. 安装语言选择器

		apt-get install language-selector
3. 重启系统

		reboot
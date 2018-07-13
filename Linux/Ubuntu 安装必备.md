<b style="font-size: 42px;font-family: 'Consolas';">Ubuntu 安装必备</b>
***
# 写在前头 #
<p style="font-size: 18px;">创建时间：2018/7/12 18:06:06 </p>
# Replace software source #
 1. backup

		sudo cp /etc/apt/sources.list /etc/apt/sources.list_backup
 2. Execute after adding the address

		sudo apt-get update
		sudo apt-get upgrade
 3. Open the graphical interface

		sudo update-manager -c -d
 4. address
	 + 中科大源

			# 中科大源
			
			deb https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
			deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
			deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
			deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
			deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
			deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
			deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
			deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
			deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
			deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
	 + 阿里源

			# 阿里源
			
			deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
			deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
			deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
			deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
			deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
			deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
			deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
			deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
			deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
			deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
	 + 163源

			# 163源
			
			deb http://mirrors.163.com/ubuntu/ bionic main restricted universe multiverse
			deb http://mirrors.163.com/ubuntu/ bionic-security main restricted universe multiverse
			deb http://mirrors.163.com/ubuntu/ bionic-updates main restricted universe multiverse
			deb http://mirrors.163.com/ubuntu/ bionic-proposed main restricted universe multiverse
			deb http://mirrors.163.com/ubuntu/ bionic-backports main restricted universe multiverse
			deb-src http://mirrors.163.com/ubuntu/ bionic main restricted universe multiverse
			deb-src http://mirrors.163.com/ubuntu/ bionic-security main restricted universe multiverse
			deb-src http://mirrors.163.com/ubuntu/ bionic-updates main restricted universe multiverse
			deb-src http://mirrors.163.com/ubuntu/ bionic-proposed main restricted universe multiverse
			deb-src http://mirrors.163.com/ubuntu/ bionic-backports main restricted universe multiverse
	 + 清华源

			# 清华源
			
			deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
			deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
			deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
			deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
			deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
			deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
			deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
			deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
			deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
			deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse

# chrome #
 + install

		sudo wget http://www.linuxidc.com/files/repo/google-chrome.list -P /etc/apt/sources.list.d/
	
		wget -q -O - https://dl.google.com/linux/linux_signing_key.pub  | sudo apt-key add -
	
		sudo apt-get update
	
		sudo apt-get install google-chrome-stable
	
		/usr/bin/google-chrome-stable
# gimp #
 + Photo editors
 + install

		sudo add-apt-repository ppa:otto-kesselgulasch/gimp
		sudo apt-get update
		sudo apt-get install gimp
 + unistall

		udo apt-get remove gimp
# indicator-sysmonitor #
 + Check the computer
 + install

		sudo add-apt-repository ppa:fossfreedom/indicator-sysmonitor  
		sudo apt-get update  
		sudo apt-get install indicator-sysmonitor 
 + launch

		indicator-sysmonitor &
		^C
# VLC #
+ Video player

		  1 sudo apt-get update
		  2 sudo apt-get install vlc browser-plugin-vlc	
# Guake Terminal #
+ Press the `F12` to appear the terminal

		  1 sudo add-apt-repository ppa:webupd8team/unstable
		  2 sudo apt-get update
		  3 sudo apt-get install guake	
# Docky #
+ New docky

		  1 sudo apt-get install docky
+ delete ubuntu docky

		  1 /usr/share/gnome-shell/extensions/ubuntu-dock@ubuntu.com
# Unity Tweak Tool #
+ Beautify/Theme

+ 1.install

		  1 sudo add-apt-repository ppa:freyja-dev/unity-tweak-tool-daily
		  2 sudo apt-get update
		  3 sudo apt-get install unity-tweak-tool
+ 2.launch

		  1 unity-tweak-tool
+ 3.add Theme
	+ Numix Theme
		+ Theme install

				  1 sudo add-apt-repository ppa:numix/ppa  
				  2 sudo apt-get update 
				  3 sudo apt-get install numix-gtk-theme 
		+ Icon install

				  1 sudo apt-add-repository ppa:numix/ppa  
				  2 sudo apt-get update  
				  3 sudo apt-get install numix-icon-theme-circle 
	+ Flatabulous Theme
		+ Theme install

				  1 sudo add-apt-repository ppa:noobslab/themes
				  2 sudo apt-get update
				  3 sudo apt-get install flatabulous-theme
		+ Icon install

				  1 sudo add-apt-repository ppa:noobslab/icons
				  2 sudo apt-get update
				  3 sudo apt-get install ultra-flat-icons
# Java #
	sudo apt update
	sudo apt-get install openjdk-8-jdk
	java -version
# Intellij IDEA #
 + download

		https://www.jetbrains.com/idea/download/#section=linux
 + install

		sudo tar xf ~/Downloads/ideaIU-2017.2.5.tar.gz -C /opt/
		/opt/idea-IU-172.4343.14/bin/idea.sh
 + crack

		sudo gedit /etc/hosts
		write"0.0.0.0 account.jetbrains.com"
		access"http://idea.lanyus.com/"
 + shortcut

		sudo vim /usr/share/applications/intellij-idea.desktop
		write"
		[Desktop Entry]
		Name=IntelliJ IDEA
		Exec=/home/xring/Tools/idea-IU-172.4343.14/bin/idea.sh
		Comment=IntelliJ IDEA
		Icon=/home/xring/Tools/idea-IU-172.4343.14/bin/idea.png
		Type=Application
		Terminal=false
		Encoding=UTF-8
		"


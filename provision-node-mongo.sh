# File used for vagrant provisioning

echo "Installing requirements for building node extensions" &&
apt-get -y install build-essential &&

echo "Installing Node" &&
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs
echo "Node installed" &&

echo "Installing MongoDB" &&
apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10 &&
echo "deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen" >> /etc/apt/sources.list &&
apt-get -y update &&
apt-get -y install mongodb-10gen &&
echo "Installed MongoDB" &&

/usr/sbin/service mongodb restart &&

echo "NPM Install"
apt-get -y install npm
npm install -g gulp
npm install /vagrant/
echo "NPM Dependencies installed"

echo "Provision finished"

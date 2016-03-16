
Vagrant.configure("2") do |config|

  config.vm.box = "hashicorp/precise64"
  config.vm.hostname = "node-mongo"

  config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
    vb.gui = false
    vb.name = "node-mongo"
  #
  #   # Customize the amount of memory on the VM:
  #   vb.memory = "1024"
  end
  config.vm.synced_folder ".", "/vagrant"
  config.ssh.forward_agent = true
  config.vm.network :forwarded_port, guest: 3000, host: 3000
  config.vm.network :forwarded_port, guest: 27017, host: 27017

  config.vm.provision :shell, path: "provision-node-mongo.sh"
end

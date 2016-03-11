
# encoding: utf-8
# This file originally created at http://rove.io/2c31db58c88bc7e8477ec023d4960a4e

# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "brianveltman/mean-minimal"
  config.vm.box_url = "https://atlas.hashicorp.com/brianveltman/boxes/mean-minimal/versions/1.0.0/providers/virtualbox.box"

  # Note: I know mongo can be a memory hog, keep an eye on memory usage to see if it needs to be enforced
  # config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
  #   vb.memory = "1024"
  # end

  config.ssh.forward_agent = true
  config.vm.network :forwarded_port, guest: 3000, host: 3000

  config.vm.provision "shell",
    inline: "sudo apt-get update"
end

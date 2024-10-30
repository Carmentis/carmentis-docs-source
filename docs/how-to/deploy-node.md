
# Deploy your replication node
In this tutorial, you will learn how to deploy a replication node contributing to the network of Carmentis.
This node will mainly hold and keep up-to-date the [master-chain](../architecture.md).

To deploy a replication node, download the latest version of the repository [here](https://github.com/Carmentis/carmentis-node-docker)
and move into the folder.

```shell
git clone https://github.com/Carmentis/carmentis-node-docker.git
cd carmentis-node-docker
```

Then, start the replication node by executing the following commands:
```shell
# give the right to execute the script
chmod u+x ./scripts/carmentis.sh

# (optional) update the images to the latest available, useful when an older image is in cache.
./scripts/carmentis.sh update 
sudo ./scripts/carmentis.sh reset

# start the replication node (be sure to execute the script twice!)
./scripts/carmentis.sh start:themis # create the structure and halt, useful to add a validator key
./scripts/carmentis.sh start:themis # start the replication node
```

The replication node is now downloading all blocks composing the master-chain and is keeping up-to-date the master-chain.

## Create a backup for your replication node
When the master-chain is long, downloading all the blocks is time-consuming. While this step is necessary in a *first place*,
the chain can be stored locally. This way, the replication node only have to restore the chain from the local backup.
Recent backups are already available at [https://backupnode.carmentis.io](https://backupnode.carmentis.io) (a backup is 
created everyday at midnight).

In the following, we introduce the manual procedure to create a backup. We encourage interested readers
to create automations in order to create backups automatically and periodically.

To save the data from the node, execute the following commands:
```shell
# install the lz4 compressor
sudo apt install lz4

# download the backup creation scripts
git clone git@github.com:Carmentis/carmentis-node-backup-script.git
cd carmentis-node-backup-scripts

# execute the backup creation script
# the "node-folder" parameter is the path of the running node,
# containing the `.carmentis`  folder (e.g., ~/carmentis-node-docker).  
./carmentis-backup.sh <node-folder>

# (optional) stop the replication node
./scripts/carmentis.sh stop
```

To restore the local backup of the master:
```shell
# (optional) if your replication is running, stop it
# and delete the data folder in the running node
./scripts/carmentis.sh stop
sudo rm -Rf .carmentis/data

# move the data from the backup storage to the running node folder
sudo lz4 -dc output/<backup_file>.tar.lz4 | sudo tar -xf - -C <running_node_directory>

# restart the replication node (be sure to be in the `carmentis-node-docker` folder!)
./scripts/carmentis.sh start:themis
```

To display the logs of your running node:
```shell
docker logs cometbft.carmentis -f
```

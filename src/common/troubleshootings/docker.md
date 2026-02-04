<details>
    <summary>Docker not permitted (`permission denired while trying to connect to the docker API at unix:///var/run/docker.sock`)</summary>

    In a fresh install of Docker, you might be unable to execute the `docker run --rm hello-world` command.
    To solve this issue, we highly recommend you to follow the [official Docker documentation for post-installations](https://docs.docker.com/engine/install/linux-postinstall/).
    For more convinience, you can run the following commands but remember to check the [Official Docker documentation](docker.com):
    ```shell
    sudo groupadd docker
    sudo usermod -aG docker $USER
    newgrp docker
    docker run --rm hello-world
    ```
</details>



<details>
    <summary>The `docker-compose` command is not found</summary>

    Have you tried `docker compose`?
</details>
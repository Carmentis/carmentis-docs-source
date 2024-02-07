---
sidebar_position: 3
---

# Manage the Operator service

## Unix Users

- **Starting the Application:** Run `./scripts/operator.sh start` to start the application. This command launches the Operator service in detached mode.

- **Stopping the Application:** Execute `./scripts/operator.sh stop` to stop and remove container instances.

- **Restarting the Application:** Use `./scripts/operator.sh restart` to restart the Operator service.

- **Viewing Logs:** To view the application logs, run `./scripts/operator.sh logs`.

- **Checking the Status:** For the current status of the service, execute `./scripts/operator.sh status`.
- **Upgrading the Application:** To update the application, run `./scripts/operator.sh update`.
- **Resetting the Application:** To reset the application's database, execute `./scripts/operator.sh reset:db`.

## Windows Users

- **Starting the Application:** Run `scripts/operator.cmd start` in the command prompt to start the application.

- **Stopping the Application:** Use `scripts/operator.cmd stop` to stop and remove container instances.

- **Restarting the Application:** To restart the Operator service, execute `scripts/operator.cmd restart`.

- **Viewing Logs:** View the application logs by running `scripts/operator.cmd logs`.

- **Checking the Status:** Check the current status of the service with `scripts/operator.cmd status`.
- **Upgrading the Application:** To update the application, run `scripts/operator.cmd update`.
- **Resetting the Application:** To reset the application's database, execute `scripts/operator.cmd reset:db`.

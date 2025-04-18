---
sidebar_position: 6
---

# Manage your operator

The "**Manage Your Operator**" page provides advices for setting up and maintaining your operator within the 
Carmentis protocol. Administrators can add and manage users, assign roles, and ensure the right permissions for 
secure collaboration. You can also create and configure applications.

## Most frequent actions

### Create an organisation
![operator-organisations](/img/operator-organisations.png)

To create an organisation, go to the "Organisations" section and click on "Create organisation". Provide the name 
of your organisation and click on "Create".

### Manage an organisation
![](/img/operator-organisation.png)

**Edit an organisation:** To edit the organisation name, city, country, and website, update the relevant fields with the new information. 
Once you've made the necessary changes, be sure to save your updates to ensure the new details are reflected in your operator.

**Publish an organisation:** To publish your organisation on chain, click on the "Publish" button.
Once published, "Virtual blockchain ID" field will be filled. You can now see your organisation on the explorer.


### Create an application
![operator-applications](/img/operator-applications.png)
To create an application, navigate to the **Application** section and click on the **New** button. 
A popup will prompt you to enter the name of the application you wish to create. After you submit the name, 
the application will be marked as pending until you publish it. 

### Manage users on the operator
![](/img/operator-users.png)

**Add user on the operator:** To add a user to your operator, go to the **Organization** section in the left sidebar, then select the **Users** tab. 
Click on **Add User**, and a form will appear prompting you to enter the public key of the user you wish to add, 
along with the privileges you want to assign (Visit our [Share my public key](./wallet-usage.md#share-my-public-key) to show how to share 
your public key). This setup allows you to control each user's access level, 
ensuring they have the appropriate permissions for their role in the operator.


**Remove user from the operator:** To remove an administrator from your operator, go to the **Organization** section and select the **Users** tab. 
Locate the administrator you wish to remove, and find the deletion button. Click this deletion button to remove the 
administrator from your organisation.

:::note
An organisation should always have an administrator, so the last administrator cannot remove himself from the organisation.
:::

### Manage members of an organisation
![](/img/operator-members.png)


**Add existing user in organisation:** To add an existing user in your organisation, click on "Add user" and select
the user to add.

:::info
You cannot create a user directly from the members page of your organisation. To create a user, your have
to move on the users page.
:::


**Remove a user from organisation:** To remove a user from your organisation, you can click on the "Delete" icon.
:::info
Removing a user from the organisation do not delete the user.
:::
### Manage API keys
![](/img/operator-application.png)

**Create an API key:** On the application, you can click on the "Generate key" button. Provide a name and the period of 
time of validity for the key.

**Delete an API key:** Click on the "Delete" icon to delete the key.

:::warning
All usage logs will be deleted. If you want to disable the key but keep the logs of the key,
prefer to disable the key instead.
:::

### API key usages  
![](/img/operator-key.png)

**See API key usages:** We propose an interface to observe the usage of a specific key.

**Disable an API key:** You can enable/disable a key but clicking on the switch button.
:::warning
After being disabled, all requests embedding the disabled key will be rejected.
:::
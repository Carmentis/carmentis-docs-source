---
sidebar_position: 20
---

# Declare your application

An application in our workspace  serves as a framework for defining the structure of events that facilitate
interactions between users and the underlying system. It acts as a blueprint that outlines
how actions are represented.

## Import an application declaration
When you are deploying an already existing application, the authors of the application can provide you
an *application declaration*, that can be imported within your workspace. To import an application declaration, 
go to the "Applications" section in your workspace and click on the "Import" button. A modal will appear to ask you
the file containing the application declaration. Once imported, a new application will be created. 

:::warning
Do not forget to publish the imported application!
:::

## Declare a new application

To declare an application in your workspace, which is essential for defining the structure of events that your application will utilize, follow these steps:

1. Visit your workspace by either clicking on the Workspace link in the [explorer](https://data.testapps.carmentis.io) or directly navigating to https://data.testapps.carmentis.io/workspace.
2. Sign in to your account to gain access to your workspace features.
3. Once signed in, look for the Application section in the sidebar menu and click on it.
   ![applications.png](/img/workspace/applications.png)
4. To create a new application, select the option to add a new application. A modal will appear, prompting you to
   enter the name of the application you wish to create.
   ![new-application.png](/img/workspace/new-application.png)

Click on **"Edit"** to view the details of your application. Here, you can review and modify the information as necessary. In the following section, we will explore how to configure your application. Once you have configured it, you will need to deploy it to the Carmentis network by clicking on **"Deploy."**
By registering your application, you define the event structures that will be used by the SDK, enabling it to interpret the input your concrete application sends effectively. This process is crucial for ensuring smooth communication and data management within your workspace.

## Configure your application
After having signed in to the [Carmentis workspace](https://data.testapps.carmentis.io/workspace) and created your application, you will encounter several properties that are essential for configuring your application effectively. Here is a detailed explanation of each:

### Name

The `name` property is a descriptive identifier for your application. It is used primarily for display purposes within the Carmentis workspace and helps you and others identify your application amongst others. Choose a name that is both meaningful and concise to ensure easy identification.

### Fields

The "Fields" tab represents the data structure that your application will use to store or process data. Managing fields involves specifying the name, type (e.g., string, integer, date but also structures), and constraints (e.g., required, public, hashable, anon mask) for each field. This structure should be carefully designed to match the data your application will handle, ensuring that all necessary information is captured and validated correctly.

| Property   | Meaning                                                                                                                                                                                                                                                                                                               |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name       | The name of your field.                                                                                                                                                                                                                                                                                               |
| Type       | The type of your field.                                                                                                                                                                                                                                                                                               |
| Visibility | Define the visibility of the value your field. **Public** means that your data is stored in the blockchain and visible by everyone. **Private** allows your field to be observed by users in the chain but also the operator.  |
| Hashable   | States that your field can be hashed (useful to limit used space in the blockchain).                                                                                                                                                                                                                                  |


### Structures

The "Structures" tab allows you to define complex data structures that can be used into your fields. Structures can be used to group related fields together, making it easier to manage and process data. For example, you might use structures to represent a customer, an order, or a transaction, each of which contains multiple fields that are logically related.
:::note
Nested structure are *supported*, meaning that a structure can be used inside another structure.
:::

### Enumerations
The "Enumerations" tab allows you to implement a finite set of values that a variable can take. The most natural
way to think enumerations is when dealing with some status.
:::note Example
Suppose a project in which a task whose its status is either `Awaiting`, `In Progress`, `Blocked` or `Done`.
Programmatically, the status of a task is expressed as below:
```rust title="Example of Task Enumeration (Rust)"
enum TaskStatus {
    Awaiting,
    InProgress,
    Blocked,
    Done
}
```
:::

### Anonymization Masks

The "Anonymization Masks" tab is used to define patterns or templates that apply to certain fields, ensuring data is displayed in a specific format. For example, you might use masks to ensure phone numbers or social security numbers are displayed consistently, or to hide sensitive information from certain users or reports.
We provide you some examples, feel free to explore them. 

<details>
  <summary>Example to hide a phone number</summary>

  To hide a phone number, write `[+]?[0-9 ]+` as the targeted text to substitute and write `***` as the substitution.
</details>

<details>
  <summary>Example to hide an email address</summary>

To hide the user part in an email address, write `[:alpha:]+@` as the targeted text to substitute and write `***@` as the substitution.
</details>

By carefully configuring each of these properties, you can ensure that your application is well-structured, efficient, and compliant with relevant standards and regulations. Remember to review and update these settings as your application evolves to meet changing requirements or to incorporate new features.


### Messages

The "Messages" tab allows you to customize a message that is sent by Carmentis during an approval to the user performing
approving an action. You are allowed to customize a message by referencing a value from your fields in your message.

:::info Example
Suppose you have defined a structure defining a person, including its name, its age and its home address (itself defined
as a structure containing the road and the city).

```json
{
  "name": "John Doe",
  "age": 32,
  "address": {
    "road": "123 East Avenue",
    "city": "New York"
  }
}
```

To reference the values of your structure, use `{{this.<your field>}}` directly in your message. 
In our example, an approval message may look like this:


```
Hey {{this.name}}! 
We have a box for you, could you confirm us your address: 
-> {{this.address.road}}, {{this.address.city}}?
```
:::

<div class="related-pages">
    <p class="title">Related pages</p>
    <div class="pages">
        <a class="page" href="../concepts/application">
            Application concept
        </a>
        <a class="page" href="../how-to/create-workspace">
            Create your workspace
        </a>
    </div>
</div>
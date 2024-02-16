---
sidebar_position: 3
---

# How to configure your application

After signing in to the Carmentis workspace and creating your application on the Carmentis explorer, you will encounter several properties that are essential for configuring your application effectively. Here is a detailed explanation of each:

### Name

The `name` property is a descriptive identifier for your application. It is used primarily for display purposes within the Carmentis workspace and helps you and others identify your application amongst others. Choose a name that is both meaningful and concise to ensure easy identification.

### Endpoint

The `endpoint` property refers to the URL or URI where your application's backend services endpoint [you have to implement and expose from your application](/docs/guide-operator/your-application/what-you-need-to-implement#endpoint-to-expose-the-operator-server-api) to the Carmentis network. 
This is crucial for enabling communication between your application and the Carmentis platform. The endpoint should be specified as a full URL, including the protocol (http or https) and the domain name or IP address, along with any necessary path or port.

### Data Retention

`Data retention` specifies the policy or period for which data recorded by your application into the Carmentis network will be retained. This property is essential for compliance with data protection regulations and for managing the lifecycle of the data your application collects or generates. You will need to define how long data is kept before it is automatically deleted or archived, based on legal requirements or business needs.

### Fields

The "Fields" tab represents the data structure that your application will use to store or process data. Managing fields involves specifying the name, type (e.g., string, integer, date but also structures), and constraints (e.g., required, public, hashable, anon mask) for each field. This structure should be carefully designed to match the data your application will handle, ensuring that all necessary information is captured and validated correctly.

### Structures

The "Structures" tab allows you to define complex data structures that can be used into your fields. Structures can be used to group related fields together, making it easier to manage and process data. For example, you might use structures to represent a customer, an order, or a transaction, each of which contains multiple fields that are logically related.

### Anonymization Masks

The "Anonymization Masks" tab is used to define patterns or templates that apply to certain fields, ensuring data is displayed in a specific format. For example, you might use masks to ensure phone numbers or social security numbers are displayed consistently, or to hide sensitive information from certain users or reports.

By carefully configuring each of these properties, you can ensure that your application is well-structured, efficient, and compliant with relevant standards and regulations. Remember to review and update these settings as your application evolves to meet changing requirements or to incorporate new features.


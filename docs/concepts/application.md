# Application

In our context, an *application* is a logical component 
defined within the [Workspace](./workspace), structured as a (possibly nested) format,
like a JSON object. Unlike an application that might typically be created through
code to execute tasks, here it serves as a conceptual model for representing how data
and interactions are organized within the [Workspace](./workspace). This model, or structure, 
is crafted by a developer and is essential for enabling an [Operator](./operator) 
to interpret and process approved events relevant to the application.

![application](/img/application.drawio.png)

Because our framework is intentionally generic, it doesn't assume 
specific data structures or processes. Instead, the developer defines
the application’s structure to specify which data the 
framework will attempt to verify and incorporate into the 
blockchain. Each field within this structure includes a visibility
setting that dictates its accessibility, such as whether it is public or private. This design provides flexibility for developers to adapt
the framework to various use cases, ensuring that only the appropriate information is accessible
based on its designated visibility level.


<div class="related-pages">
    <p class="title">Related pages</p>
    <div class="pages">
         <a class="page" href="../how-to/create-workspace">
            Create your workspace
        </a>
        <a class="page" href="../how-to/declare-your-application">
            Declare your application
        </a>
        <a class="page" href="../how-to/develop-your-application">
            Develop an application
        </a>
    </div>
</div>
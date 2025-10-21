
<details>
    <summary>Operator requests end in 404</summary>

In development, if the request
ends in 404, ensure that the operator listens at the right port by checking the logs.
Indeed, when starting the operator, if the specified port is not available, the operator attempts to listen on another free port.
</details> 


<details>
    <summary>The workspace shows an operator connection error</summary>

When the workspace cannot establish a connection with the operator, it displays an error message.
The problem might come from several issues:
- The operator server is not running.
- The operator server does not listen to the correct port. It might come from an invalid port specification in the
  configuration, from a port conflict (the operator tries another free port), or an invalid docker port mapping.
- The `Caddyfile` is invalid if you have provided twice the same URL for the two servers or an invalid URL.
- The DNS configuration is not updated. You might have to update the DNS configuration to point to the correct IP address.
</details> 

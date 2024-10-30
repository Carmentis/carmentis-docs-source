# Operator

An operator plays a crucial role in the Carmentis protocol by ensuring the integrity and validity of user-initiated 
events. Serving as a dedicated server, the operator checks each event against the [Application definition](./application) stored in the 
user’s workspace, verifying that it aligns with preset criteria and protocol standards. When the operator confirms 
that the event is valid, it approves the action by signing it. This signed approval takes the form of a [Micro block](./flow-and-micro-block), 
encapsulating all relevant data associated with the event under review. The operator’s signature on the [Micro block](./flow-and-micro-block) 
establishes the event’s authenticity, allowing it to proceed toward [Wallet](./wallet) validation.
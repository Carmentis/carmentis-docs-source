---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Get your Carmentis wallet

A traditional cryptocurrency wallet is a secure digital tool that allows users to manage, 
store, and interact with their digital assets like Bitcoin, Ethereum, and other 
cryptocurrencies. Unlike traditional wallets that hold physical currency, 
cryptocurrency wallets are designed to safeguard the keys that grant access to your 
digital funds and provide a way to sign transactions. Essentially, they don’t store 
the assets themselves but rather the private keys necessary to access and manage these 
assets on the blockchain.


Unlike traditional crypto wallets primarily designed for transferring
cryptocurrency and handling transactions, our wallet is focused on providing confidence in
the everyday digital actions. Our wallet enjoys a new range of features
specifically designed for the Carmentis environment:

**Authentication.** Our wallet enables secure sign-ins using a unique private signature key, 
allowing users to authenticate without traditional passwords. This cryptographic signature verifies 
identity seamlessly, enhancing both security and convenience in accessing applications.

**Secure approval.** In addition to the initial authentication feature, our wallet
allows users to approve events that will be anchored immutably on the blockchain, ensuring a verifiable record
of actions or approvals. This feature enhances transparency and accountability by securing event data directly
on-chain, which is especially valuable for applications requiring traceable and tamper-proof event tracking.

**History of approved actions.** The wallet provides users with a clear and simple view 
of their approval history, showing all past actions they’ve authorized. 
This organized timeline offers easy access to a verifiable record of approvals, 
enhancing transparency and accountability.

**Proof of approval.** Our wallet allows users to share a proof of approval, 
confirming they have authorized an action, which is securely anchored on the blockchain. 
This proof ensures transparency and traceability without exposing any private data, 
maintaining user privacy while verifying approval.

## Install your wallet
The wallet installation process is straightforward and secure, designed to get you set up and using your wallet quickly. 
First, download and install the wallet application. Once installed, open the wallet to begin the onboarding process. 
During onboarding, you’ll create a strong password, and the wallet will generate a unique set of seed words, often known 
as a recovery phrase. This phrase is critical as it serves as a backup to access your wallet  if you ever 
lose your device, so make sure to store it safely and privately. After securing your password and seed words, you’re ready 
to use the wallet to sign in applications, and authenticate actions or events.

![wallet-on-boarding-steps](/img/wallet-on-boarding-steps.png)

### Download and install your wallet

<Tabs>
  <TabItem value="marketplace" label="Via marketplace (Recommended)" default>
    You can easily install your Carmentis Wallet using the Google Extensions Marketplace. Click on the button
    below and click on **"Add to Google Chrome"** to install your wallet on your browser.
    
    <a  class="download-button" href="https://chromewebstore.google.com/detail/carmentis-wallet/ekchappkfhfkbgekcleodkhlfcadocmj" target="_blank">
      <p>Download Carmentis Wallet Extension</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
      </svg>
    </a>
  </TabItem>
  <TabItem value="github" label="Via GitHub">

#### Step 1: Download our latest wallet release:

<a class="download-button" href="https://github.com/Carmentis/carmentis-wallet-extension/releases/latest" target="_blank">
    <p>Download Latest Wallet (GitHub)</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
      <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
    </svg>
</a>




#### Step 2: Install the extension in your browser


<Tabs>
  <TabItem value="chrome" label="Chrome" default>
    1. Once downloaded, unzip the extension.
2. Click on the extension icon, manage the extension.
3. Enable the developer mode on the top-right side.
4. Install unpackaged extension.
5. Choose the folder of the extension.
   For more details, go to [(Chrome, Step 2)](https://support.google.com/chrome/a/answer/2714278?hl=en)


  </TabItem>
  <TabItem value="firefox" label="Firefox">
    1. Go to the Add-ons Manager by clicking the menu button (three horizontal lines) in the top-right corner, then select Add-ons and themes or press `Ctrl + Shift + A`.
2. Enable Developer Mode by clicking the gear icon in the top-right corner of the Add-ons Manager and selecting Debug Add-ons.
3. Click on "Load Temporary Add-on" located at the top of the Debug Add-ons page.
4. Select the ZIP File by navigating to the folder where you downloaded the extension. Unzip the file and open the extension folder.
5. Verify installation by checking for a confirmation message and an icon for the extension in the toolbar.

:::info
The extension will remain installed only for the current session, and you will need to reload it after restarting Firefox.
:::
  </TabItem>
</Tabs>

</TabItem>
</Tabs>


### Setup your wallet

Once the wallet is installed, the onboarding process begins by prompting you to create a password. This password is 
essential as it encrypts a seed, which is the core of your wallet's security. The security features of the wallet rely 
on the seed remaining confidential, known only to you as the wallet owner. Importantly, the password you create is 
never shared or transmitted outside of the wallet; it is strictly used within your wallet to safeguard the seed.

The seed itself is derived from a unique 12-word passphrase, which you’ll be given during setup. This passphrase acts 
as a backup, allowing you to recover your wallet if necessary. You also have the flexibility to use the same 
passphrase across multiple wallets if you want to access the same assets from different devices or applications.

:::danger No password and seed recovery
Be aware that your wallet is **personal** and hence is private. Carmentis **cannot** help you to **recover**
both your password and your passphrase. 
:::



## Use your wallet


The **"Use Your Wallet"** section guides you through the essential features and functionalities of your wallet.
Here, you’ll learn how to navigate the home page to track your transaction history, manage multiple accounts, and set up
personalized parameters. This section will also cover important actions, such as signing in to applications,
and authenticating events.


The wallet features two main interfaces designed for different interactions: the **main interface** and the **popup
interface**. The main interface is the full-screen page you access when managing your wallet, allowing you to view
your transaction history, adjust settings and oversee multiple accounts. This comprehensive
view offers all the tools you need for in-depth management of your digital assets.

The popup interface, on the other hand, is a compact window that appears when specific actions—such as
sign-in, authentication, or event approval—require your confirmation. In this interface, you can quickly
review the details of a request and choose to approve or reject it, providing a secure way to control your online
interactions without needing to navigate away from your current activity. This separation of interfaces makes it easy
to manage both frequent approvals and deeper wallet settings efficiently.


This section covers the steps to perform the most common actions in your wallet, ensuring you can quickly and
efficiently manage your digital interactions. Whether you're viewing transaction history, connecting to new networks,
or signing in to applications, this guide will walk you through each action with simple, clear instructions.
By mastering these frequent tasks, you'll get the most out of your wallet's features and keep your digital interactions
secure and seamless.


To enhance clarity, we’ve included annotations for each action to indicate
which interface it should be performed in: the main interface, the popup interface, or both. This labeling helps you
quickly understand where each task takes place. By following these annotations, you can efficiently navigate between
interfaces and carry out each action in the appropriate context.

| Label                                                          | Interface                                           |
|----------------------------------------------------------------|-----------------------------------------------------|
| <img src="/img/main-interface.png" alt="drawing" width="30"/>  | The action can be performed on the main interface.  |
| <img src="/img/popup-interface.png" alt="drawing" width="30"/> | The action can be performed on the popup interface. |


### Access to the parameters

| Interface supporting the action        | <img src="/img/main-interface.png" alt="drawing" width="30"/> |
|--|-------------------------------------------------------------------------------------------------------------------------------|


To access the parameters, go to the main interface of the wallet. Click on the three dots located in the top-right
corner of the screen, which will open a dropdown menu.


### Change the node endpoint
| Interface supporting the action        | <img src="/img/main-interface.png" alt="drawing" width="30"/> | 
|--|-------------------------------------------------------------------------------------------------------------------------------|

To change the node endpoint, open the Parameters page in the main interface. Click on the three dots in the top-right corner,
select Parameters, and navigate to the network settings section. Here, you can modify the node endpoint to change the replication node
in which the wallet is connected (*should belong to the Carmentis network*).





### Sign in to applications
| Interface supporting the action        | <img src="/img/popup-interface.png" alt="drawing" width="30"/> | 
|--|----------------------------------------------------------------|

To sign in to applications using the wallet, follow the steps in the popup interface. When an application requests a sign-in, the popup will first display an initial approval request. This step is simply to confirm that you want to proceed with the request, not to complete the sign-in yet. Here, you can review the origin of the request to ensure it’s from a trusted source.

Once you approve this initial step, the popup interface will display a new page specifically for the sign-in action. If you agree to sign in on this second page, the popup will close, and the sign-in process will be completed, granting access to the application.

### Authenticate with your email
| Interface supporting the action        | <img src="/img/popup-interface.png" alt="drawing" width="30"/> | 
|--|----------------------------------------------------------------|


The authentication process is similar to the sign-in process, as both grant access to an application, but with one key difference: authentication uses the email associated with your account. When an application initiates authentication, the popup interface will first display an initial approval request, asking you to confirm that you want to proceed with the authentication process.

Once you approve, a second page appears, similar to the sign-in flow, but with one distinction: it displays the email address linked to your account, which will be used to authenticate. After confirming on this second page, the popup closes, and the authentication is completed, granting access to the application.

:::info
The email is required to authenticate with your email. Be sure to have associated (and validated) an email with your account.
:::

### Approve a transaction
| Interface supporting the action        | <img src="/img/popup-interface.png" alt="drawing" width="30"/> | 
|--|----------------------------------------------------------------|


The event approval process begins with an initial page in the popup interface displaying the origin of the request and prompting you to approve or reject the processing of the event. This step is designed to give you control over whether to proceed with the request. Once approved, a detailed view of the transaction appears, allowing you to explore the specifics of the event awaiting approval.

In this detailed view, you can navigate through the transaction’s data, examining the contents of the current block under approval. Additionally, you have the option to review previous blocks in the transaction history—those already anchored on the blockchain. This transparency provides a comprehensive view of the event's context, ensuring that you have all the necessary information before finalizing your approval.

### See history of my approvals
| Interface supporting the action        | <img src="/img/main-interface.png" alt="drawing" width="30"/> | 
|--|-------------------------------------------------------------------------------------------------------------------------------|

The view history of approved events is shown on the home of the main interface. Here, you’ll find a list
of flow in which the user is involved. For each [flow](../concepts/flow-and-micro-block.md), you can
explore the micro blocks associated with it—some blocks will show as already anchored on the blockchain,
while others may appear as approved but not yet anchored.

Within each flow’s details, you’ll have the ability to dive deeper. Several buttons allow you to access
a master block, flow, or micro block on the [blockchain explorer](https://data.testapps.carmentis.io/explorer),
providing a comprehensive view of the micro block’s status. This history helps you keep track of your
approvals and offers an easy way to verify the state of each micro-block on the blockchain.


### Create, edit and delete an account
#### Create an account
| Interface supporting the action        | <img src="/img/main-interface.png" alt="drawing" width="30"/> | 
|--|-------------------------------------------------------------------------------------------------------------------------------|

To create a new account, start in the main interface and click on the current account displayed in the top-left corner. Then, select "Add an account" from the menu. A modal will appear with a form where you can enter the pseudo for the new account. After submitting the form, the new account will be created and automatically set as the active account.
#### Change the pseudo of an account
| Interface supporting the action        | <img src="/img/main-interface.png" alt="drawing" width="30"/> | 
|--|-------------------------------------------------------------------------------------------------------------------------------|

To change the account's pseudo, start by accessing the Parameters page in the main interface. Click on the three
dots in the top-right corner, select Parameters, and locate the option for account settings. From there, you can edit
and update the pseudo for your account.


#### Change the nonce of an account
| Interface supporting the action        | <img src="/img/main-interface.png" alt="drawing" width="30"/> | 
|--|-------------------------------------------------------------------------------------------------------------------------------|

To change the account nonce, access the Parameters page in the main interface. Click on the three dots in the top-right
corner, select Parameters, and navigate to the account settings section. Here, you can adjust the nonce, which is used to derive a unique key from the same seed. Note that if two accounts share the same nonce, they will use the same key pair.


#### Associate an email with an account
| Interface supporting the action        | <img src="/img/main-interface.png" alt="drawing" width="30"/> | 
|--|-------------------------------------------------------------------------------------------------------------------------------|

To associate an email with your account, go to the Parameters page in the main interface. If no email is currently set up, you’ll see a form prompting you to enter your email address. Once entered, an email verification oracle will send a unique code to the provided email. Enter this code in the form to complete the email verification and associate the email with your account.

#### Switch to another account
| Interface supporting the action        | <img src="/img/main-interface.png" alt="drawing" width="30"/> |  <img src="/img/popup-interface.png" alt="drawing" width="30"/> |
|--|-------------------------------------------------------------------------------------------------------------------------------|--| 

To switch to another account, you can use either the main interface or the popup interface. Simply click on the current account displayed in the top-left corner, and a list of available accounts will appear. Select the account you want to switch to, and you’ll be taken to its dashboard instantly.

#### Delete an account
| Interface supporting the action        | <img src="/img/main-interface.png" alt="drawing" width="30"/> | 
|--|-------------------------------------------------------------------------------------------------------------------------------|

To delete an account, go to the Parameters page in the main interface. Click on the three dots in the top-right corner,
select Parameters, and find the account deletion option. For security, you'll be prompted to enter the exact account
name before the deletion can be completed, ensuring that this action is intentional.

:::danger No data recovery
Be aware that once your account has been deleted, all the *locally* stored transactions are lost and cannot be
recovered.   
:::

:::info
The account deletion is disabled when there is a single account.
:::

### Share my public key
| Interface supporting the action        | <img src="/img/main-interface.png" alt="drawing" width="30"/> | 
|--|-------------------------------------------------------------------------------------------------------------------------------|

To share a user’s public key, go to **Parameters** and click the **Share my public key** button located below the public key.
This action opens a pre-filled email containing the public key, ready to be sent to another user for easy sharing.
Alternatively, you can directly copy the public key if you prefer to share it manually through another channel.


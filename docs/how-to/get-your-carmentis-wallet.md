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



## Learn how the wallet works

![carmentis-wallet](/img/carmentis-wallet.png)
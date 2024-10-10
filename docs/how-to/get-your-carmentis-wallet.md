---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Get your Carmentis wallet


## Install your wallet

### Automatic installation (Recommended)

:::info Coming Soon
The installation using the marketplace extension is currently not supported. We are working hard to make our wallet
available on the most popular marketplaces soon.
:::

### Manual installation

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


## Configure your wallet

Once installed, the wallet will ask you to create an account. We introduce the main stages below. 

![carmentis-wallet](/img/carmentis-wallet.png)

### Onboarding
During the onboarding, the wallet will ask your to create a password. This password is crucial since it is used to
encrypt a [seed](https://en.wikipedia.org/wiki/Cryptocurrency_wallet) being at the heart of your wallet. All the claimed
security properties holds at condition that the seed remains secret, only known by the user owning the wallet. The 
password you provide is never transmitted, its scope being to your wallet only. As usual, the seed is derived from 
12 words constituting your *passphrase*. You can use the same passphrase on several wallets *at the same time* if desired.

:::danger No password and seed recovery
Be aware that your wallet is **personal** and hence is private. Carmentis **cannot** help you to **recover**
both your password and your passphrase. 
:::

### Home Page
In the main page, the wallet ask you to setup your email. This step is optional to use your wallet but becomes
mandatory to access applications whose the authentication is based on your email. Carmentis wallet has the ability to 
register your email and to validate it. 

### Account edition
The wallet offers you the ability to edit your account (such as your account name or the endpoints to the oracles).
To edit your account, click on `Parameters` at the dropdown menu in the *main* page (the popup 
does not support this feature yet).

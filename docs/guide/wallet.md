---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# The Carmentis Wallet

Carmentis provides an easy-to-install and  ready-to-use wallet, taking the form of an extension.

## Wallet Installation

### Automatic Installation (Recommended)

:::info Coming Soon
The installation using the marketplace extension is currently not supported. We are working hard to make our wallet
available on the most popular marketplaces soon.
:::

### Manual Installation

1. Download our latest wallet release:

<a class="download-button" href="https://github.com/Carmentis/carmentis-wallet-extension/releases/tag/v0.1.0-alpha" target="_blank">
    <p>Download Wallet (GitHub)</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
      <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
    </svg>
</a>



2. Install the extension in your browser

- **Firefox:**
1. Go to the Add-ons Manager by clicking the menu button (three horizontal lines) in the top-right corner, then select Add-ons and themes or press `Ctrl + Shift + A`.
2. Enable Developer Mode by clicking the gear icon in the top-right corner of the Add-ons Manager and selecting Debug Add-ons.
3. Click on "Load Temporary Add-on" located at the top of the Debug Add-ons page.
4. Select the ZIP File by navigating to the folder where you downloaded the extension. Unzip the file and open the extension folder.
5. Verify installation by checking for a confirmation message and an icon for the extension in the toolbar. 

:::info
The extension will remain installed only for the current session, and you will need to reload it after restarting Firefox.
:::
- **Chrome**:
1. Once downloaded, unzip the extension.
2. Click on the extension icon, manage the extension.
3. Enable the developer mode on the top-right side.
4. Install unpackaged extension.
5. Choose the folder of the extension.
For more details, go to [(Chrome, Step 2)](https://support.google.com/chrome/a/answer/2714278?hl=en)


## Wallet Configuration

Once installed, you have to create an account, fill your personal data and finally to verify your email. Note that the 
creation of an account to use the wallet is mandatory, since your account will be associated to a secret key
stored in your wallet.

![carmentis-wallet](/img/carmentis-wallet.png)

1. The first step when creating an account is to create a password that will be used to protect your wallet. This password
is really important and should be **kept secure** in some safeplace.
2. Then, the wallet asks you either to import a secret key if you already have one, or to create a new 
secret key. When creating a new secret key, the wallet will show up 16 words that you be **kept secure** in some safeplace.
These words are really important since these are used to derive fresh signature keys. The wallet ensures that you have 
saved your words using a challenge in which you are asked to write some missing words.
:::danger No Recovery
Carmentis cannot help you to recover the secret password as well as the words!
:::
3. Then, the wallet asks you an identity name. 
4. Go to `Accounts`, click on your account, `Your personal data > Edit` and write your firstname, your lastname as well as
a **valid** email address. 
5. Finally, click on `verify your email`. A unique 6-digits password will be sent to the provided email address, that you
have to copy-paste in your wallet. Once your email has been validated, you will be ready.